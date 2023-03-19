import { useEffect } from 'react'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import { dynamicActivate } from './i18nLoader'
import { useAppSelector } from '@/shared/hooks/useRedux'
import { selectLanguage } from '../store/application-ui/applicationUISelector'

interface I18nActivatorProps {
  children: JSX.Element
}

export const I18nActivator = ({ children }: I18nActivatorProps) => {
  const currentLocale = useAppSelector(selectLanguage)

  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(currentLocale)
  }, [currentLocale])

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}
