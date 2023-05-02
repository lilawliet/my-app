export enum Company {
  '珠海国通科技有限公司',
  '中检健康产业珠海有限公司',
  '臻实科技有限公司',
  '珠海比元网络科技有限公司',
}

export type PROJECT = {
  id: string
  name: string
  description: string
  resonsibility?: string
  startTime: string
  endTime: string
  images: string[]
  company?: Company
  tags?: string[]
  link?: string
  highlight?: boolean // 完整性 | 参与度 | 投入时间 高的项目
  position: string
}

export const Projects: PROJECT[] = [
  {
    id: 'bessage',
    name: 'Bessage',
    highlight: true,
    description:
      '前端 React-native ，后端 golang 实现的仿微信&推特的Web3概念社交软件',
    company: Company.珠海比元网络科技有限公司,
    tags: ['react-native', 'typescript', 'docker'],
    startTime: '2022-12',
    endTime: '2023-04',
    images: ['/Bessage/chat-main.png'],
    position: 'self-start',
  },
  {
    id: 'chatgpt-server',
    name: 'ChatGPT Server',
    description:
      '基于 Fastify node 轻量级服务端框架快速搭建的简单ChatGPT接口服务',
    link: 'https://github.com/lilawliet/chatgpt-server',
    tags: ['fastify', 'typescript'],
    startTime: '2023-03',
    endTime: '2023-03',
    images: [],
    position: 'self-end',
  },
  {
    id: 'nextjs-graphql-demo',
    name: 'Nextjs GraphQL 全栈框架基础示例',
    description:
      '一个基于 nextjs + antd-mobile + redux-tooolkit + graphql + swr + mongodb 的全栈架构基础示例',
    link: 'https://github.com/lilawliet/chatgpt-server',
    tags: ['nextjs', 'redux-toolkit', 'typescript', 'graphql'],
    startTime: '2022-02',
    endTime: '2022-02',
    images: [],
    position: 'self-end',
  },
  {
    id: 'football-client',
    name: 'football-2022-client',
    highlight: true,
    description: 'Web3 用户参与公平投票足球概念类游戏前端',
    company: Company.珠海比元网络科技有限公司,
    tags: ['vue3', 'typescript'],
    startTime: '2022-05',
    endTime: '2022-11',
    images: [],
    position: 'self-start',
  },
  {
    id: 'paragon-wallet',
    name: 'paragon-wallet',
    highlight: true,
    description: '基于 react-native 实现的纯前端 Web3 移动钱包',
    company: Company.珠海比元网络科技有限公司,
    tags: ['react-native', 'typescript'],
    startTime: '2022-06',
    endTime: '2022-07',
    images: [],
    position: 'self-start',
  },
  {
    id: 'paragon-extension',
    name: 'paragon-extension',
    highlight: true,
    description: '基于 react 实现的纯前端 Web3 浏览器插件钱包',
    company: Company.珠海比元网络科技有限公司,
    link: 'https://chrome.google.com/webstore/detail/paragon/gadbifgblmedliakbceidegloehmffic?hl=zh-CN',
    tags: ['react-native', 'typescript'],
    startTime: '2022-06',
    endTime: '2022-07',
    images: [],
    position: 'self-start',
  },
  {
    id: 'novo-base',
    name: 'novo-base',
    description:
      '基于 vue3 + typescript 搭建的比元科技私有链的基础功能（查看&查询数据）网站',
    company: Company.珠海比元网络科技有限公司,
    tags: ['vue3', 'typescript'],
    startTime: '2022-03',
    endTime: '2022-06',
    images: [],
    position: 'self-start',
  },
  {
    id: 'rsb25',
    name: 'rsb2.5',
    description:
      '(Resource service builder 2.5)， 使用 vue2 + django + mongodb + docker 为基础的可视化静态网站生成管理系统新版',
    resonsibility: '在此项目负责前端可视化框架功能的迭代工作',
    company: Company.臻实科技有限公司,
    link: 'https://chrome.google.com/webstore/detail/paragon/gadbifgblmedliakbceidegloehmffic?hl=zh-CN',
    tags: ['vue2', 'django'],
    startTime: '2021-08',
    endTime: '2021-10',
    images: [],
    position: 'self-end',
  },
  {
    id: 'rsb20',
    name: 'rsb2.0',
    highlight: true,
    description:
      '(Resource service builder 2.0)是为澳门金沙集团提供的可视化构建C端网页，基于Java后台及Vue前端的管理系统',
    resonsibility:
      '在此项目负责前端的需求迭代，期间完全负责前端PC版本功能开发，包括：流程（业务）设计、数据整合（数据向：对不同终端数据匹配整合）与组件的开发',
    company: Company.臻实科技有限公司,
    tags: ['vue2'],
    startTime: '2021-06',
    endTime: '2021-10',
    images: [],
    position: 'self-end',
  },
  {
    id: 'zjjk2',
    name: '中检健康平台服务端',
    description: '基于 Flask 搭建的网络（发文&商品&用户管理）服务端',
    highlight: true,
    resonsibility:
      '搭建服务端基础框架及了实现基本业务功能，包括用户管理、产品订单管理、发文评论管理等',
    company: Company.中检健康产业珠海有限公司,
    tags: ['python ', 'flask'],
    startTime: '2021-01',
    endTime: '2021-03',
    images: [],
    position: 'self-start',
  },
  {
    id: 'cjhd',
    name: '基于内部业务系统和微信公众号平台对接的抽奖活动',
    description:
      '业务功能集成于内部业务系统，对接微信公众号的节日线上营销，H5答题、转盘抽奖活动，参与答题抽奖，邀请三位微信好友成功参与抽奖可再获抽奖机会。',
    company: Company.中检健康产业珠海有限公司,
    tags: ['python', 'flask', 'redis'],
    startTime: '2020-03',
    endTime: '2021-13',
    images: [],
    position: 'self-start',
  },
  {
    id: 'zjjk1',
    name: '内部业务系统',
    highlight: true,
    description:
      '后端基于 Flask 公司内部业务系统。主要功能包括客户信息登记、业务登记、财务统计、工作分配、安全监控、体检报告自动化、业务报表定时任务、运营管理、新闻发布、数据统计及可视化，以及的移动端/微信接口API等',
    resonsibility: '根据公司业务需要不断对系统进行功能拓展及版本迭代',
    company: Company.中检健康产业珠海有限公司,
    tags: ['python', 'flask'],
    startTime: '2021-01',
    endTime: '2021-13',
    images: [],
    position: 'self-start',
  },
  {
    id: 'flask-vue',
    name: '基于Flask + Vue 框架部署的小网站',
    description:
      '利用业余时间实现基于Flask + Vue + Mysql 框架搭建的简单网站，从零开始完成搭建、开发、部署、备案等工作，主要是为了学习运维方面的知识及技术整合。',

    tags: ['python', 'flask', 'vue'],
    startTime: '2020-02',
    endTime: '2020-02',
    images: [],
    position: 'self-end',
  },
  {
    id: 'python-demo',
    name: 'Python 项目案例实战',
    description:
      '通过清华大学出版社出版的《Python 项目案例开发从入门到实战》一书对爬虫、游戏、机器学习等方面的拓展库及入门案例的学习与实战，其中包含项目有：校园网搜索引擎、抓取百度图片豆瓣词条、生成二维码验证码、在线聊天程序、基于朴素贝叶斯文本分类及各类小游戏',
    link: 'https://github.com/lilawliet/python-project-weike',
    tags: ['python', 'flask', 'vue'],
    startTime: '2019-12',
    endTime: '2020-02',
    images: [],
    position: 'self-end',
  },
  {
    id: 'zjjk-web',
    name: '中检健康官网移动端 H5 页面',
    description: '中国检验认证集团澳门有限公司官网移动端',
    company: Company.中检健康产业珠海有限公司,
    link: 'https://m.ccicmacau.com/',
    tags: ['h5'],
    startTime: '2018-12',
    endTime: '2019-01',
    images: [],
    position: 'self-start',
  },
  {
    id: 'zsnp',
    name: '中晟农批市场贸易系统',
    description:
      '为茂名中晟实业有限公司农批市场开发的贸易系统，基本模块包括系统权限、基础数据、客户服务、合同管理、收费管理、进场登记、道闸系统对接、支付平台、NC财务对接等，包含网页端和移动客户端（基于微信公众平台的H5页面）。我在其中主要参与系统权限、基础数据、客户服务、合同管理、收费管理、进场登记、支付平台等模块的开发，并主要负责合同管理，收费管理，支付平台模块及移动客户端开发',
    company: Company.中检健康产业珠海有限公司,
    tags: ['python', 'flask', 'h5'],
    startTime: '2018-09',
    endTime: '2019-01',
    images: [],
    position: 'self-start',
  },
  {
    id: 'python-web',
    name: 'Python Web 大型网站开发',
    description:
      '由Java Web转型Python Web开发，通过对《Python学习手册》及网易云课堂的官方Python系列课程，知了课堂的《超细讲解Django打造大型企业官网》对Python基础及 Python Web 开发的相关知识进行了全面、完整、深入的学习。并基本实现了基于Django + mysql + JQuery 的模仿“小饭桌”的企业级官网及其后台管理系统，主要功能包括登录注册，新闻发布，图片云存储，视频云点播，微信支付宝支付，haystack 全文搜索等功能',
    tags: ['python', 'django', 'js', 'jquery', 'h5'],
    startTime: '2018-04',
    endTime: '2018-08',
    images: [],
    position: 'self-end',
  },
  {
    id: 'zxl2',
    name: '电子执行力检查系统第三版',
    description:
      '公司核心项目[电子执行力检察系统]的新版本，为提高系统任务流程的灵活性对数据结构进行优化，并新增功能如数据可视化、项目跟踪等以及新的UI框架替换，同时开发移动办公版本。其中使用了Spring+SpringMVC+Mybatis作为框架，数据库使用Oracle，前端使用AmaziUI实现。本人在其中参与新版数据库中用户权限模块及任务结构关系的研讨设计，独立负责项目管理模块，参与基础功能及业务层代码实现，前端页面及各类前端插件API对接工作，如amap高德地图、echar数据可视化、ueditor富文本编辑器、sweetalert 弹窗插件、swiper轮播图等等',
    company: Company.珠海国通科技有限公司,
    tags: ['java', 'js', 'jquery', 'amazi-ui', 'oracle'],
    startTime: '2017-11',
    endTime: '2018-04',
    images: [],
    position: 'self-start',
  },
  {
    id: 'zxl1',
    name: '执行力电子监察系统',
    description:
      '执行力电子监察系统（政务系统），地方政府用于内部工作任务的分发与跟踪监管，以及个人行为监督监管。本人参与执行力电子监察系统多个分版本的开发，涉及数据库、后台及前端的开发工作，并作为主要负责人负责分版本(香洲版本)的开发工作以及项目上线后的日常维护及版本迭代',
    company: Company.珠海国通科技有限公司,
    tags: ['java', 'js', 'jquery', 'amazi-ui', 'oracle'],
    startTime: '2017-01',
    endTime: '2017-09',
    images: [],
    position: 'self-start',
  },
]
