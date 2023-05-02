import Head from 'next/head'
import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { ASSEST_PREFIX } from '@/constant/config'
import { Company, PROJECT, Projects } from '@/constant/projects'
import Notification from '@/src/components/Notification'
import LinkComponent from '@/src/components/Svgs/LinkComponent'
import Layout from '@/src/layouts/Base'

import { NextPageWithLayout } from '../_app'

const title = 'Projects'

const Page: NextPageWithLayout = () => {
  const { t } = useTranslation()

  // const HighlightComponent = () => <StarComponent width={18} height={28} />
  const HighlightComponent = () => <div className=" text-sm leading-7">⭐</div>

  const ProjectItem = ({
    project,
    index,
  }: {
    project: PROJECT
    index: number
  }) => (
    // <List.Item key={index}>
    //   <span className=" font-bold text-2xl ">{project.name}</span>
    //   <Image
    //     src={`${ASSEST_PREFIX}/Bessage/chat-main.png`}
    //     alt={''}
    //     fit="cover"
    //   ></Image>
    //   <video controls autoPlay className=" w-full" style={{ width: '100%' }}>
    //     <source
    //       src={`${ASSEST_PREFIX}/Bessage/WeChat_20230430002356.webm`}
    //       type="video/mp4"
    //     />
    //     Your browser does not support the video tag.
    //   </video>
    // </List.Item>

    <div
      key={index}
      className={`card ${
        project.position === 'self-end' ? 'md:self-end' : 'md:self-start'
      } self-center`}
    >
      <div className="announce opacity-80 h-full flex-1">
        <div className="bg-card-bg w-full h-full flex flex-col md:gap-4 gap-2 md:px-6 md:py-4 py-2 p-4 relative">
          {project.link ? (
            <span className="font-extrabold tracking-widest text-lg text-white flex flex-row flex-wrap items-start md:gap-2 gap-1">
              <a
                className="hover:underline text-white flex flex-row items-start gap-1"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <LinkComponent width={18} height={28} className=" fill-white" />
                {project.name}
              </a>
              {project.highlight && HighlightComponent()}
              <span className="text-xs font-normal leading-7">
                {project.company !== undefined &&
                  `  [${Company[project.company]}]`}
              </span>
            </span>
          ) : (
            <span className=" font-extrabold tracking-widest text-lg text-white flex flex-row flex-wrap items-start md:gap-2 gap-1">
              <span>{project.name}</span>
              {project.highlight && <HighlightComponent />}
              <span className="text-xs font-normal leading-7">
                {project.company !== undefined &&
                  `  [${Company[project.company]}]`}
              </span>
            </span>
          )}

          <span className=" text-white font-light text-md">
            {project.description}
          </span>
          {/* <div className="announce w-full h-full z-10 opacity-30"></div> */}
          {/* <div className="announce-2 w-full h-full"></div>
        <div className="announce-3 w-full h-full"></div> */}
          <span className=" text-xs font-light italic text-white text-opacity-80 self-end">
            {project.startTime} - {project.endTime}
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${ASSEST_PREFIX}/Common/marble.jpg)`,
        backgroundColor: 'rgba(255,255,255,.8)',
        backgroundBlendMode: 'overlay',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
    >
      <Head>
        <title>{t(title)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="projects-container">
          <span className="projects-timeline md:block hidden"></span>
          <Notification text="Projects marked with an asterisk are more complete or more engaged or have been involved in development for a longer period of time" />
          {Projects.map((project, index) => ProjectItem({ project, index }))}
        </div>
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={title}>{page}</Layout>
}

export default Page
