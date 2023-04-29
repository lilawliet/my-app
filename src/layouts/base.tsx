import { Footer, NavBar } from 'antd-mobile'
import { ChipItem, LinkItem } from 'antd-mobile/es/components/footer'
import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

export default function Layout({
  children,
  back = null,
  backArrow = null,
  onBack = () => {
    window.history.back()
  },
  title,
}: {
  children?: ReactElement
  back?: ReactElement | null
  backArrow?: ReactElement | null
  onBack?: () => void
  title?: string
}) {
  const { t } = useTranslation()
  // const chips: ChipItem[] = [
  //   {
  //     text: '简介',
  //   },
  //   {
  //     text: '内容',
  //   },
  //   {
  //     text: '其他',
  //   },
  // ]
  const chips: ChipItem[] = []

  const links: LinkItem[] = [
    // {
    //   text: 'github',
    //   href: 'https://github.com/lilawliet',
    // },
    {
      text: t('usage policy'),
      href: 'https://openai.com/policies/usage-policies',
    },
  ]

  return (
    <>
      <NavBar back={back} backArrow={backArrow} onBack={onBack}>
        {t(title ?? '')}
      </NavBar>
      {/* <a href="https://github.com/lilawliet" aria-label="Follow my github">
        <GithubCornerRight />
      </a> */}
      <main>{children}</main>
      <Footer
        label={t('no more')}
        content="@ 2023-2024 demo.com All rights reserved"
        links={links}
        chips={chips}
      ></Footer>
    </>
  )
}
