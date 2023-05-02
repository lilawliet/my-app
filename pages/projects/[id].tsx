import { ReactElement } from 'react'

import { Projects } from '@/constant/projects'
import Layout from '@/src/layouts/Base'

import { NextPageWithLayout } from '../_app'

export async function getServerSideProps(context: any) {
  const { id } = context.query

  return {
    props: {
      id,
    },
  }
}

const Page: NextPageWithLayout<{ id: string }> = ({ id }: { id: string }) => {
  // const { t } = useTranslation()
  const project = Projects.find((project) => project.id === id)

  return <>{project?.name}</>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={'title'}>{page}</Layout>
}

export default Page
