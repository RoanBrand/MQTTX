import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Repository } from 'typeorm'
import CollectionEntity from '../models/CollectionEntity'
import ConnectionEntity from '../models/ConnectionEntity'
import WillEntity from '../models/WillEntity'

@Service()
export default class ConnectionService {
  constructor(
    @InjectRepository(CollectionEntity)
    private collectionRepository: Repository<CollectionEntity>,
    @InjectRepository(ConnectionEntity)
    private connectionRepository: Repository<ConnectionEntity>,
    @InjectRepository(WillEntity)
    private willRepository: Repository<WillEntity>,
  ) {}

  // travel current layer of tree, composition collection and connection to children
  private async travelEntity(data: CollectionEntity[], parentId?: string): Promise<ConnectionModelTree[]> {
    let res: ConnectionModelTree[] = []
    let connections: ConnectionModel[] = []
    if (parentId) {
      // find current collection's connections
      const query: ConnectionEntity[] = await this.connectionRepository.find({
        parentId,
      })
      if (query && query.length) {
        connections = query as ConnectionModel[]
      }
    }
    await Promise.all(
      data.map(async (collection) => {
        let children: ConnectionModelTree[] = []
        if (collection) {
          const curChildrens = collection.children ? collection.children : []
          children = await this.travelEntity(curChildrens, collection.id)
        }
        res.push({
          id: collection.id,
          name: collection.name,
          children,
          isCollection: true,
          isEdit: false,
          orderId: collection.orderId,
        } as ConnectionModelTree)
      }),
    )
    return [...res, ...connections] as ConnectionModelTree[]
  }

  // travel current layer of tree, deconstruct children to collection and connection
  private async travelModel(
    children: ConnectionModelTree[],
    parentId?: string | undefined,
  ): Promise<{ collection: CollectionEntity[]; connection: ConnectionEntity[] }> {
    let collection: CollectionEntity[] = []
    let connection: ConnectionEntity[] = []
    await Promise.all(
      children.map(async (treeNode: ConnectionModelTree) => {
        if (treeNode.isCollection) {
          const { collection: topCollection, connection: topConnection } = await this.travelModel(
            treeNode.children ? treeNode.children : [],
            treeNode.id,
          )
          collection.push({
            ...treeNode,
            children: topCollection,
            connections: topConnection,
          } as CollectionEntity)
        } else if (!treeNode.isCollection) {
          if (parentId) {
            const parent: CollectionEntity | undefined = await this.collectionRepository.findOne(parentId)
            if (parent) {
              connection.push({
                ...treeNode,
                parent,
              } as ConnectionEntity)
            }
          } else {
            connection.push(treeNode as ConnectionEntity)
          }
        }
      }),
    )
    if (collection.length) {
      await this.collectionRepository.save(collection)
    }
    for (let i = 0; i < connection.length; i++) {
      const query = await this.connectionRepository.findOne({
        clientId: connection[i].clientId,
      })
      if (query) {
        const updatedConnection: ConnectionEntity = { ...connection[i], id: query.id } as ConnectionEntity
        await this.willRepository.save(updatedConnection.will as WillEntity)
        await this.connectionRepository.save(updatedConnection)
      } else {
        await this.willRepository.save(connection[i].will as WillEntity)
        await this.connectionRepository.insert(connection[i])
      }
    }
    return { collection, connection }
  }

  public async setAll(data: ConnectionModelTree[] | undefined): Promise<ConnectionModelTree[] | undefined> {
    if (!data || !data.length) {
      return
    }
    const { collection, connection } = await this.travelModel(data)
    if (collection && connection) {
      // maybe not this condition
      return data
    }
    return
  }

  public async getAll(): Promise<ConnectionModelTree[] | undefined> {
    const topConnections: ConnectionEntity[] = await this.connectionRepository.find({
      parentId: '',
    })
    const query: CollectionEntity[] = await this.collectionRepository.manager
      .getTreeRepository(CollectionEntity)
      .findTrees()
    if (!query) {
      return
    }
    const collectionTree: ConnectionModelTree[] | undefined = await Promise.all(
      query.map(async (treeNode) => {
        const children = await this.travelEntity(treeNode.children, treeNode.id)
        return {
          id: treeNode.id,
          children,
          name: treeNode.name,
          isCollection: true,
          isEdit: false,
          orderId: treeNode.orderId,
        } as CollectionModel
      }),
    )
    return [...collectionTree, ...topConnections] as ConnectionModelTree[]
  }
}
