<template>
  <div class="msg-left-item">
    <span class="topic-color" :style="{ height: topicColorHeight, background: currentTopicColor }"></span>
    <div ref="leftPayload" class="left-payload payload">
      <p class="left-info">
        <span class="topic">Topic: {{ topic }}</span>
        <span class="qos">QoS: {{ qos }}</span>
      </p>
      <pre>{{ payload }}</pre>
    </div>
    <p class="left-time time">{{ createAt }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { matchTopicMethod } from '@/utils/topicMatch'

type LeftPayloadDOM = Vue & {
  offsetHeight: number
}

@Component
export default class MsgLeftItem extends Vue {
  @Prop({ required: true }) public topic!: string
  @Prop({ required: true }) public qos!: number
  @Prop({ required: true }) public payload!: string
  @Prop({ required: true }) public createAt!: string
  @Prop({ required: true }) public subsList!: SubscriptionModel[]

  private topicColorHeight = '0px'
  private currentTopicColor = ''

  private setCurrentTopicColor() {
    const topic: SubscriptionModel | undefined = this.subsList.find((sub: SubscriptionModel) =>
      matchTopicMethod(sub.topic, this.topic),
    )
    if (topic && topic.color) {
      this.currentTopicColor = topic.color
    }
  }

  private mounted() {
    const leftPayloadDom = this.$refs.leftPayload as LeftPayloadDOM
    this.topicColorHeight = `${leftPayloadDom.offsetHeight - 6}px`
    this.setCurrentTopicColor()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/mixins.scss';

.msg-left-item {
  @include msg-item;
  text-align: left;
  position: relative;
  .topic-color {
    height: calc(100% - 44px);
    display: inline-block;
    width: 4px;
    position: absolute;
    top: 11px;
    border-radius: 8px;
    left: -4px;
  }
  .left-payload {
    background: var(--color-main-grey);
    border-radius: 0px 10px 10px 10px;
    position: relative;
  }
  .left-payload,
  .left-time {
    position: relative;
    right: 0px;
    animation: leftMsg 0.3s ease-in-out;
  }
}
</style>
