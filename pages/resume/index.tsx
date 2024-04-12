// import Head from 'next/head'
// import React, { ReactElement } from 'react'
// import { useTranslation } from 'react-i18next'

// import { useWindowSize } from '@/src/hooks/useWindowSize'
// import Layout from '@/src/layouts/Base'

// import { NextPageWithLayout } from './_app'

// const title = 'About me'

// const Page: NextPageWithLayout = () => {
//   const { t } = useTranslation()
//   const windowSize = useWindowSize()

//   return (
//     <div className=" w-full min-h-[88vh] flex flex-col  justify-center  " id="container">
//       <Head>
//         <title>{t(title)}</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className="grid grid-cols-3 box flex-1 ">
//         <div className="col-span-1">姓名</div>
//         <div className="col-span-1">性别</div>
//         <div className="col-span-1 row-span-4 col-start-3"></div>
//         <div className="col-span-1">出生日期</div>
//         <div className="col-span-1">专业</div>
//         <div className="col-span-1">户口所在地</div>
//         <div className="col-span-1">学历</div>
//         <div className="col-span-1">联系电话</div>
//         <div className="col-span-1">电子邮箱</div>
//       </div>
//     </div>
//   )
// }

// Page.getLayout = function getLayout(page: ReactElement) {
//   return <Layout title={title}>{page}</Layout>
// }

// export default Page
