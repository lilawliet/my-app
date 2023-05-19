import { ImageViewer as _ImageViewer, Space, Swiper } from 'antd-mobile'
import Head from 'next/head'
import Image from 'next/image'
import React, { ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ASSEST_PREFIX } from '@/constant/config'
import { Company, PROJECT, Projects, Tags } from '@/constant/projects'
import Notification from '@/src/components/Notification'
import LinkComponent from '@/src/components/Svgs/LinkComponent'
import { useOpenUrl } from '@/src/hooks/useOpenUrl'
import Layout from '@/src/layouts/Base'

import { NextPageWithLayout } from '../_app'

const title = 'Projects'

const Page: NextPageWithLayout = () => {
  const { t } = useTranslation()
  const openUrl = useOpenUrl()

  const [images, setImages] = useState<string[]>([])
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(false)
  const ImageViewer = () => (
    <_ImageViewer.Multi
      images={images.map((image) => `${ASSEST_PREFIX}${image}`)}
      visible={visible}
      defaultIndex={imageIndex}
      onClose={() => {
        setImages([])
        setImageIndex(0)
        setVisible(false)
      }}
    />
  )

  // const HighlightComponent = () => <StarComponent width={18} height={28} />
  const HighlightComponent = () => <div className=" text-sm leading-7">⭐</div>

  const CenterComponent = ({ position }: { position: string }) => (
    <div className=" z-20 self-center absolute top-1/2 flex-row items-center md:flex hidden">
      {position === 'self-start' ? <div className="project-timeline-left"></div> : <div className="w-10"></div>}

      <div className="w-[2px] h-[2px] rounded bg-border-soft"></div>
      {position === 'self-end' ? <div className="project-timeline-right"></div> : <div className="w-10"></div>}
    </div>
  )

  const CardComponent = ({ project }: { project: PROJECT }) => (
    <div className={`card ${project.position === 'self-end' ? 'md:self-end' : 'md:self-start'} self-center`}>
      <div className="announce h-full flex-1">
        <div className="bg-card-bg w-full h-full flex flex-col md:gap-4 gap-2 md:px-6 md:py-4 py-2 p-4 relative">
          {project.link ? (
            <span className="font-extrabold tracking-widest text-lg text-primary flex flex-row flex-wrap items-start md:gap-2 gap-1">
              <span className="hover:underline text-primary flex flex-row items-start gap-1" onClick={() => project.link && openUrl(project.link)}>
                <LinkComponent width={18} height={28} className="fill-primary" />
                {project.name}
              </span>
              {project.highlight && HighlightComponent()}
              <span className="text-xs font-normal leading-7">{project.company !== undefined && `  [${project.company}]`}</span>
            </span>
          ) : (
            <span className=" font-extrabold tracking-widest text-lg text-primary flex flex-row flex-wrap items-start md:gap-2 gap-1">
              <span>{project.name}</span>
              {project.highlight && <HighlightComponent />}
              <span className="text-xs font-normal leading-7">{project.company !== undefined && `  [${project.company}]`}</span>
            </span>
          )}
          {project.images.length > 0 && (
            <Space direction="vertical" block>
              <Swiper
                indicator={(total, current) => <div className=" absolute top-1 right-1 bg-white bg-opacity-70 rounded-sm px-2 py-1 text-black ">{`${current + 1} / ${total}`}</div>}
                defaultIndex={0}
              >
                {project.images.map((image, index) => (
                  <Swiper.Item key={index}>
                    <Image
                      onClick={() => {
                        // imageViewer(project.images, index + 1)
                        setImages(project.images)
                        setImageIndex(index)
                        setVisible(true)
                      }}
                      priority
                      src={`${ASSEST_PREFIX}${image}`}
                      width={100}
                      height={20}
                      className="w-full"
                      alt={''}
                    />
                  </Swiper.Item>
                ))}
              </Swiper>
            </Space>
          )}
          <span className=" text-prmary text-opacity-80 font-light text-md ">{project.description}</span>
          <span className=" text-xs font-light italic text-white text-opacity-80 self-end">
            {project.startTime} - {project.endTime}
          </span>
        </div>
      </div>
    </div>
  )

  const TagsComponent = ({ tags, position }: { tags?: string[]; position: string }) => (
    <div className={`flex my-1 flex-wrap gap-2 ${position === 'self-start' ? 'flex-row' : 'flex-row-reverse md:self-end self-start'}`}>
      {tags?.map((tag, index) => (
        <div key={`tag-${index}`} className=" tag text-black">
          {tag}
        </div>
      ))}
    </div>
  )

  const ProjectItem = ({ project, index }: { project: PROJECT; index: number }) => (
    <div key={index} className=" w-full flex flex-col relative">
      <CenterComponent position={project.position} />
      <CardComponent project={project} />
      <TagsComponent tags={project.tags} position={project.position} />
    </div>
  )

  const [company, setCompany] = useState<string[]>([])
  const [tag, setTag] = useState<string[]>([])

  const Selector = () => (
    <div className="self-start flex flex-col gap-4">
      <div className="flex flex-row flex-wrap items-center gap-2 w-full ">
        {Company.map((item, index) => (
          <div
            key={index}
            className={`tag text-black ${company.includes(item) && 'tag-active'}`}
            onClick={() => {
              company.includes(item) ? setCompany(company.filter((i) => i !== item)) : setCompany([...company, item])
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap items-center gap-2 w-full">
        {Tags.map((item, index) => (
          <div
            key={index}
            className={`tag text-black ${tag.includes(item) && 'tag-active'}`}
            onClick={() => {
              tag.includes(item) ? setTag(tag.filter((i) => i !== item)) : setTag([...tag, item])
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div
      className="w-full"
      style={{
        // backgroundImage: `url(${ASSEST_PREFIX}/Common/marble.jpg)`,
        // backgroundColor: 'rgba(255,255,255,.8)',
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
      <div className=" md:p-4 p-2 ">
        <div className="projects-container">
          <span className="projects-timeline md:block hidden"></span>{' '}
          {Projects.filter((p) => company.length === 0 || (p.company && company.includes(p.company)))
            .filter((p) => tag.length === 0 || (p.tags && p.tags.some((t) => tag.includes(t))))
            .map((project, index) => ProjectItem({ project, index }))}
        </div>
        <div className=" flex flex-col gap-4 pb-4">
          <Notification text="Projects marked with an asterisk are more complete or more engaged or have been involved in development for a longer period of time" />
          <Selector />
        </div>
      </div>
      <ImageViewer />
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={title}>{page}</Layout>
}

export default Page
