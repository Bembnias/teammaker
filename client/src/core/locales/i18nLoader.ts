import { i18n } from '@lingui/core'
import { en, pl } from 'make-plural/plurals'

export const locales = {
  en: {
    label: 'English',
    twoLettersCode: 'en',
    locale: 'en-EN',
  },
  pl: {
    label: 'Polski',
    twoLettersCode: 'pl',
    locale: 'pl-PL',
  },
}

export const defaultLocale = 'en'

i18n.loadLocaleData({
  en: { plurals: en },
  pl: { plurals: pl },
})

/**
 * dynamicActivate - We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: string) {
  const { messages } = await import(`@/locales/${locale}/messages`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}
