# <img src="https://avatars.githubusercontent.com/u/12482690?v=4" width="24" height="24"> Idai's Personal Website

## github-action workfolws + nextjs v13.3 + typescript + @reduxjs/toolkit + i18next + eslint + prettier + husky + lint-staged

### base

- node v18
- nextjs v13.3
- github action workflows CI/CD 流程化部署
- @reduxjs/toolkit`^1.9.2`：运行时数据全局状态管理
- redux-persist`^6.0.0`：数据持久化（客户端缓存）
- eslint：代码检查
  > - `"plugins": "@typescript-eslint"`：告诉 ESLint 加载 @typescript-eslint/eslint-plugin 包作为插件
  > - `"extends": "plugin:@typescript-eslint/recommended`：ESLint 内置的 "推荐 "配置
- prettier：代码格式化
- husky：Git Commit Hooks
- lint-staged：只在需要时检查代码
- cross-env：跨平台设置环境变量
- i18next：国际化

### to start

`yarn` && `yarn dev`
