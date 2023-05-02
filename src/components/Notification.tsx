import React from 'react'
import { useTranslation } from 'react-i18next'

const Notification = ({
  text,
  onClick,
}: {
  text: string
  onClick?: () => void
}) => {
  const { t } = useTranslation()

  return (
    <div className="notification" onClick={onClick}>
      {t(text)}
    </div>
  )
}

export default Notification
