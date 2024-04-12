import { Popover } from 'antd-mobile'
import { Action } from 'antd-mobile/es/components/popover'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { THEME } from '@/constant/commons'
import { ASSEST_PREFIX } from '@/constant/config'

import { useOpenUrl } from '../hooks/useOpenUrl'
import { useTheme } from '../hooks/useTheme'
import i18n, { LANGUAGE } from '../i18n'
import { useGlobalState, useUpdateLocaleCallback } from '../store/global/hooks'
import GithubComponent from './Svgs/GithubComponent'
import I18nComponent from './Svgs/I18nComponent'
import ThemeDarkComponent from './Svgs/ThemeDarkComponent'
import ThemeLightComponent from './Svgs/ThemeLightComponent'
import ThemeSystemComponent from './Svgs/ThemeSystemComponent'

export const Header = ({}) => {
  const { t } = useTranslation()
  const updateLocale = useUpdateLocaleCallback()
  const openUrl = useOpenUrl()
  const { updateTheme } = useTheme()
  const global = useGlobalState()

  const i18nClickHandler = () => {
    updateLocale(i18n.language === 'zh_CN' ? 'en_US' : 'zh_CN')
  }

  const updateThemeHandler = (theme: THEME) => {
    updateTheme(theme)
  }

  const [shadow, setShadow] = useState<boolean>(false)

  const scrollHandler = () => {
    setShadow(document.documentElement.scrollTop !== 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true)

    return () => window.removeEventListener('scroll', scrollHandler, false)
  }, [])

  const tabs = [
    {
      name: 'Home',
      href: `${ASSEST_PREFIX}/`,
    },
    {
      name: 'Projects',
      href: `${ASSEST_PREFIX}/projects`,
    },
    {
      name: 'Resume',
      // href: `${ASSEST_PREFIX}/resume`,
      href: 'https://mxvfurm2ssn.feishu.cn/docx/OSZ1dr0fLoS8DAx4su5cHPd0n1f?from=from_copylink',
      target: '_blank',
    },
    // {
    //   name: 'About me',
    //   href: `${ASSEST_PREFIX}/about`,
    // },
  ]

  const themes: Action[] = [
    {
      key: 'light',
      icon: <ThemeLightComponent width={18} height={18} color="black" />,
      text: <span className="text-black">{t('Light')}</span>,
    },
    {
      key: 'dark',
      icon: <ThemeDarkComponent width={18} height={18} color="black" />,
      text: <span className="text-black">{t('Dark')}</span>,
    },
    // {
    //   key: 'system',
    //   icon: <ThemeSystemComponent width={18} height={18} color="black" />,
    //   text: <span className="text-black">{t('System')}</span>,
    // },
  ]

  return (
    <div className="md:h-20 h-16 md:px-8 px-4 bg-gradient-to-b from-body-bottom to-body  bg-opacity-80 backdrop-blur-lg  fixed top-0 w-full z-10 ">
      {/* backdrop-blur-lg  背景模糊 */}
      <div className="flex justify-between h-full items-center flex-1 bg-transparent">
        <div className=" flex flex-row md:gap-8 gap-4 text-base items-center">
          <Image
            src="https://avatars.githubusercontent.com/u/12482690?v=4"
            width={36}
            height={36}
            alt={''}
            className=" md:w-9 md:h-9 w-7 h-7 md:rounded-none rounded-full"
            onClick={() => (window.location.href = `${ASSEST_PREFIX}/`)}
          ></Image>

          {tabs.map((tab, index) => (
            <a className="text-secondary hover:text-primary md:text-base text-sm font-medium" href={tab.href} key={index} target={tab.target ?? '_self'}>
              {t(tab.name)}
            </a>
          ))}
        </div>

        <div className=" flex flex-row gap-4 ">
          <Popover.Menu actions={themes} placement="bottom-start" onAction={(node) => updateThemeHandler(node.key as any as THEME)} trigger="click">
            <>
              {global.theme === 'light' ? (
                <ThemeLightComponent width={24} height={24} />
              ) : global.theme === 'dark' ? (
                <ThemeDarkComponent width={24} height={24} />
              ) : (
                <ThemeSystemComponent width={24} height={24} />
              )}
            </>
          </Popover.Menu>
          <I18nComponent width={24} height={24} onClick={i18nClickHandler} language={i18n.language as LANGUAGE} />
          <GithubComponent
            width={24}
            height={24}
            onClick={() => {
              openUrl('https://github.com/lilawliet')
            }}
          />
          {/* <a href="https://github.com/lilawliet" aria-label="Follow my github">
        </a> */}
        </div>
      </div>
      {useMemo(
        () => (
          <div className={`${shadow ? 'separator' : ''}`}></div>
        ),
        [shadow]
      )}
    </div>
  )
}
