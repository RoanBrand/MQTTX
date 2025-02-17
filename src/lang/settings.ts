export default {
  settings: {
    zh: '设置',
    en: 'Settings',
    tr: 'Ayarlar',
    ja: '設定',
    hu: 'Beállítások',
  },
  general: {
    zh: '基础',
    en: 'General',
    tr: 'Genel',
    ja: '一般',
    hu: 'Általános',
  },
  language: {
    zh: '语言',
    en: 'Language',
    tr: 'Dil',
    ja: '言語',
    hu: 'Nyelv',
  },
  automatically: {
    zh: '自动检查更新',
    en: 'Auto check update',
    tr: 'Otomatik güncelleme',
    ja: '自動更新チェック',
    hu: 'Frissítések automatikus ellenőrzése',
  },
  maxReconnectTimes: {
    zh: '最大重连次数',
    en: 'Max reconnection times',
    tr: 'Maks yeniden bağlantı süreleri',
    ja: '最大再接続回数',
    hu: 'Max újracsatlakozás száma',
  },
  appearance: {
    zh: '外观',
    en: 'Appearance',
    tr: 'Görünüm',
    ja: '外観',
    hu: 'Megjelenés',
  },
  theme: {
    zh: '主题',
    en: 'Theme',
    tr: 'Tema',
    ja: 'テーマ',
    hu: 'Téma',
  },
  light: {
    zh: '明亮',
    en: 'Light',
    tr: 'Açık',
    ja: 'ライト',
    hu: 'Világos',
  },
  dark: {
    zh: '暗黑',
    en: 'Dark',
    tr: 'Koyu',
    ja: 'ダーク',
    hu: 'Sötét',
  },
  night: {
    zh: '夜间',
    en: 'Night',
    tr: 'Geceleyin',
    ja: '夜',
    hu: 'Éjszaka',
  },
  advanced: {
    zh: '高级',
    en: 'Advanced',
    tr: 'Gelişmiş',
    ja: '詳細',
    hu: 'Haladó',
  },
  dataBackup: {
    zh: '数据备份',
    en: 'Data backup',
    tr: 'Yedekleme',
    ja: 'データバックアップ',
    hu: 'Adatmentés',
  },
  dataRecovery: {
    zh: '数据恢复',
    en: 'Data recovery',
    tr: 'Veri kurtarma',
    ja: 'データ復旧',
    hu: 'Adat visszaállítás',
  },
  historyCleanup: {
    zh: '清除历史数据',
    en: 'Clear history data',
    tr: 'Geçmiş verileri temizle',
    ja: '履歴データをクリアする',
    hu: 'Előzmények törlése',
  },
  dataManage: {
    zh: '数据管理',
    en: 'Data management',
    tr: 'Veri yönetimi',
    ja: 'データ管理',
    hu: 'Adatkezelés',
  },
  autoResub: {
    zh: '自动恢复订阅',
    en: 'Auto resubscribe',
    tr: 'Otomatik yeniden abone ol',
    ja: '自動的に再購読',
    hu: 'Automata újra feliratkozás',
  },
  autoScroll: {
    zh: '自动滚动',
    en: 'Auto scroll',
    tr: 'Otomatik kaydırma',
    ja: '自動スクロール',
    hu: 'Automatikus görgetés',
  },
  multiTopics: {
    zh: '多主题订阅',
    en: 'Multi topics subscribe',
    tr: 'Çoklu başlık abone ol',
    ja: '複数のトピックを購読',
    hu: 'Több téma feliratkozás',
  },
  autoResubDesc: {
    zh: '重连时，对连接的订阅列表进行恢复订阅，仅在 Clean Session 为 True 时有效',
    en: 'When reconnecting, the subscription list of the connection will be automatically resubscribed, which is only valid when Clean Session is True',
    tr: 'Yeniden bağlanırken, bağlantının abonelik listesi otomatik olarak yeniden abone olur ve bu yalnızca Temiz Oturum Doğru olduğunda geçerlidir.',
    ja: '再接続すると、接続のサブスクリプションリストが自動的に再サブスクライブされます。これは、クリーンセッションがTrueの場合にのみ有効です',
    hu: 'Újracsatlakozáskor a kapcsolat feliratkozási listájára automatikusan feliratkozik, amely csak akkor érvényes, ha a tiszta munkamenet TRUE',
  },
  autoScrollDesc: {
    zh: '是否自动滚动消息列表',
    en: 'Whether to automatically scroll the list of messages',
    tr: 'Mesaj listesinin otomatik olarak kaydırılıp kaydırılmayacağı',
    ja: 'メッセージリストを自動的にスクロールするかどうか',
    hu: 'Az üzenetlista automatikus görgetése',
  },
  cleanHistoryDialogMessage: {
    zh: '将会清除历史建议信息，包括历史 Payload/QoS/Retain/Topic/Connection 数据',
    en: 'It will clear the historical suggestion information, including historical Payload/QoS/Retain/Topic/Connection',
    tr: 'Geçmiş Yük/QoS/Saklama/Konu/Bağlantı dahil olmak üzere geçmiş öneri bilgilerini temizleyecektir.',
    ja: 'ペイロード/ QoS /保持/トピック/接続を含む過去の提案情報をクリアします',
    hu: 'It will clear the historical suggestion information, including historical Payload/QoS/Retain/Topic/Connection',
  },
  syncOsTheme: {
    zh: '同步操作系统主题',
    en: 'Sync with OS Theme',
    tr: 'İşletim Sistemi Teması ile Senkronizasyon',
    ja: 'OSテーマと同期する',
    hu: 'Szinkronizálás az OS témával',
  },
  syncOsThemeDesc: {
    zh: '开启后，系统将跟随操作系统主题自动切换',
    en: 'Automatically switch between Light and Night themes when your system does.',
    tr: 'Sisteminiz yaptığında Işık ve Gece temaları arasında otomatik olarak geçiş yapın.',
    ja: 'システムが切り替えると、ライトテーマとナイトテーマを自動的に切り替えます。',
    hu: 'Automatikusan válthat a Világos és az Éjszakai témák között, amikor a rendszer ezt teszi.',
  },
  multiTopicsDesc: {
    zh: '开启后，将支持一次订阅多个主题，使用逗号（,）分隔',
    en: 'Enable to subscribe to multiple topics at once, separated by commas',
    tr: 'Açık kaldığında, birden fazla konu abone olmak için bir kez abone olunabilir.',
    ja: '複数のトピックを一度に購読することができます。コンマで区切ります。',
    hu: 'Egy időben több témára feliratkozhat.',
  },
}
