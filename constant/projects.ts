export enum Company {
  '珠海国通科技有限公司',
  '中检健康产业珠海有限公司',
  '臻实科技有限公司',
  '珠海比元网络科技有限公司',
}

type PROJECT = {
  name: string
  description: string
  startTime: string
  endTime: string
  images: string[]
  company?: Company
  tags?: string[]
}

export const Projects: PROJECT[] = [
  {
    name: 'Bessage',
    description: '仿微信&推特的Web3概念社交软件',
    company: Company.珠海比元网络科技有限公司,
    tags: ['React Native'],
    startTime: '2022-12',
    endTime: '2023-04',
    images: [],
  },
  {
    name: '足球投票类概念游戏',
    description: 'Web3 用户参与公平投票足球概念类游戏',
    company: Company.珠海比元网络科技有限公司,
    tags: ['Vue3'],
    startTime: '2022-05',
    endTime: '2022-08',
    images: [],
  },
]
