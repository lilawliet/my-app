declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: string // 环境变量声明
    readonly NEXT_PUBLIC_LOCALE: string // 暴露环境变量要用 NEXT_PUBLIC_ 前缀或者写在 .env.local 文件中
    readonly NEXT_PUBLIC_VERSION: string
  }
}
