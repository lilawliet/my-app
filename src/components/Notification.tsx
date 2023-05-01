import React from 'react'
import { useTranslation } from 'react-i18next'

export const Notification = () => {
  const { t } = useTranslation()

  return (
    <div
      className="notification"
      onClick={() => window.open('https://github.com/lilawliet/my-app')}
    >
      {t(
        'One-stack deployment of pure static personal website based on Nuxt Js and github workflows'
      )}
    </div>
  )
}
