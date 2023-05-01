import { useTranslation } from 'react-i18next'

export const Button = ({
  title,
  onClick,
  type = 'primary',
}: {
  title?: string
  onClick?: () => void
  type?: 'primary' | 'secondary'
}) => {
  const { t } = useTranslation()

  return (
    <div onClick={onClick} className={`button ${type}`}>
      <button>{title && t(title)}</button>
    </div>
  )
}
