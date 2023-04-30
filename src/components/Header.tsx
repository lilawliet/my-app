import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

import i18n, { LANGUAGE } from '../i18n'
import { useUpdateLocaleCallback } from '../store/global/hooks'
import GithubComponent from './Svgs/GithubComponent'
import I18nComponent from './Svgs/I18nComponent'

export const Header = ({}) => {
  const { t } = useTranslation()
  const updateLocale = useUpdateLocaleCallback()

  const i18nClickHandler = () => {
    updateLocale(i18n.language === 'zh_CN' ? 'en_US' : 'zh_CN')
  }

  return (
    <div className="md:h-20 h-16 px-8 border-b bg-white bg-opacity-80 backdrop-blur-lg flex justify-between shadow-lg fixed top-0 w-full z-10 items-center">
      <div className=" flex flex-row gap-4 text-base items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/12482690?v=4"
          width="36"
          height="36"
          alt={''}
        ></Image>
        <span>{t('Projects')}</span>
        <span>{t('About me')}</span>
      </div>

      <div className=" flex flex-row gap-4 ">
        <I18nComponent
          width={24}
          height={24}
          onClick={i18nClickHandler}
          language={i18n.language as LANGUAGE}
        />
        <GithubComponent
          width={24}
          height={24}
          onClick={() => {
            window.open('https://github.com/lilawliet')
          }}
        />
        {/* <a href="https://github.com/lilawliet" aria-label="Follow my github">
      </a> */}
      </div>
    </div>
  )
}
