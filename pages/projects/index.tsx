import { Grid } from 'antd-mobile'
import _ from 'lodash'
import Head from 'next/head'
import Image from 'next/image'
import React, { ReactElement, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ASSEST_PREFIX } from '@/constant/config'
import { Company, PROJECT, Projects, Tags } from '@/constant/projects'
import { ImageViewer } from '@/src/components/ImageViewer'
import Notification from '@/src/components/Notification'
import LinkComponent from '@/src/components/Svgs/LinkComponent'
import useMousePosition from '@/src/hooks/useMousePosition'
import { useOpenUrl } from '@/src/hooks/useOpenUrl'
import Layout from '@/src/layouts/Base'
import { globalActions } from '@/src/store/global/reducer'
import { useAppDispatch } from '@/src/store/hooks'

import { NextPageWithLayout } from '../_app'

const title = 'Projects'

const CenterComponent = /* 画出卡片的中线 */ ({ position }: { position: string }) => (
  <div className="project-item-center">
    {position === 'self-start' ? <div className="project-timeline-left"></div> : <div className="w-10"></div>}

    <div className="w-[2px] h-[2px] rounded bg-border-soft"></div>
    {position === 'self-end' ? <div className="project-timeline-right"></div> : <div className="w-10"></div>}
  </div>
)

const TagsComponent = /* 卡片标签 */ ({ tags, position }: { tags?: string[]; position: string }) => (
  <div className={`flex my-1 flex-wrap gap-2 ${position === 'self-start' ? 'flex-row' : 'flex-row-reverse md:self-end self-start'}`}>
    {tags?.map((tag, index) => (
      <div key={`tag-${index}`} className=" tag text-black">
        {tag}
      </div>
    ))}
  </div>
)

const Page: NextPageWithLayout = () => {
  const { t } = useTranslation()
  const openUrl = useOpenUrl()
  const mousePosition = useMousePosition()

  // const global = useGlobalState()
  const dispatch = useAppDispatch()

  // const [images, setImages] = useState<string[]>([])
  // const [imagesIndex, setImageIndex] = useState<number>(0)
  // const [visible, setVisible] = useState<boolean>(false)

  // const ImageViewer = () => (
  //   <_ImageViewer.Multi
  //     images={images.map((image) => `${ASSEST_PREFIX}${image}`)}
  //     visible={visible}
  //     defaultIndex={imagesIndex}
  //     onClose={() => {
  //       setImages([])
  //       setImageIndex(0)
  //       setVisible(false)
  //     }}
  //   />
  // )

  // const HighlightComponent = () => <StarComponent width={18} height={28} />
  const HighlightComponent = () => <div className=" text-sm leading-7">⭐</div>

  const ROTATE_RATE = 12

  const [rotateXs, setRotateXs] = useState<number[]>(new Array(Projects.length).fill(0))
  const [rotateYs, setRotateYs] = useState<number[]>(new Array(Projects.length).fill(0))

  const CardComponent = /* 卡片主体 */ ({ index, project }: { index: number; project: PROJECT }) => {
    const _itemRef = useRef<HTMLDivElement>(null)

    const onMouseOver = _.throttle(() => {
      if (!_itemRef.current) return
      if (!mousePosition.x || !mousePosition.y) return

      const _rect = _itemRef.current?.getBoundingClientRect()
      const rotateY = ~~(((mousePosition.y - _rect.top) / _rect.height) * ROTATE_RATE - ROTATE_RATE / 2)
      const rotateX = ~~(((mousePosition.x - _rect.left) / _rect.width) * ROTATE_RATE - ROTATE_RATE / 2)

      rotateXs[index] = rotateX
      setRotateXs(rotateXs)

      rotateYs[index] = rotateY
      setRotateYs(rotateYs)
    }, 300)

    const onMouseOut = () => {
      rotateXs[index] = 0
      setRotateXs(rotateXs)

      rotateYs[index] = 0
      setRotateYs(rotateYs)
    }

    return (
      <div
        key={`card-${index}`}
        ref={_itemRef}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onMouseLeave={onMouseOut}
        style={{
          border: 'none',
          transform: `rotateX(${rotateXs[index]}deg) rotateY(${rotateYs[index]}deg)`,
          boxShadow: `${rotateXs[index]}px ${rotateYs[index]}px 4px rgba(0,0,0,.5)`,
          transition: 'transform 150ms ease, box-shadow 150ms ease-in-out', // smooth transition
        }}
        className={`item-card ${project.position === 'self-end' ? 'md:self-end' : 'md:self-start'} self-center`}
      >
        <div className="announce h-full flex-1 bg-red-700">
          <div className="card-content">
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
              <Grid columns={3} gap={8}>
                {project.images.slice(0, 3).map((image, index) => (
                  <Grid.Item key={image}>
                    <Image
                      onClick={() => {
                        dispatch(globalActions.setImages(project.images))
                        dispatch(globalActions.setImagesIndex(index))
                        dispatch(globalActions.setImagesVisible(true))
                        // setImages(project.images)
                        // setImageIndex(index)
                        // setVisible(true)
                      }}
                      priority
                      src={`${ASSEST_PREFIX}${image}`}
                      width={100}
                      height={20}
                      className="w-full"
                      alt={''}
                    />
                  </Grid.Item>
                ))}
              </Grid>
            )}
            <span className=" text-prmary text-opacity-80 font-light text-md ">{project.description}</span>
            <span className=" text-xs font-light italic text-white text-opacity-80 self-end">
              {project.startTime} - {project.endTime}
            </span>
          </div>
        </div>
      </div>
    )
  }

  const ProjectItem = ({ project, index }: { project: PROJECT; index: number }) => {
    return (
      <div key={index} className="project-item">
        <CenterComponent position={project.position} />
        <CardComponent project={project} index={index} />
        <TagsComponent tags={project.tags} position={project.position} />
      </div>
    )
  }

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
