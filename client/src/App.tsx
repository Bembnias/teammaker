import { Trans } from '@lingui/macro'
import './App.css'
import { useAppDispatch } from './shared/hooks/useRedux'
import { setUILanguage } from './core/store/application-ui/applicationUIReducer'
import { locales } from './core/locales/i18nLoader'

function App() {
  const dispatch = useAppDispatch()

  return (
    <div className='App'>
      <h1 className=' bg-slate-400'>
        <Trans>Translation test</Trans>
      </h1>
      <button onClick={() => dispatch(setUILanguage(locales.pl))}>PL</button>
      <button onClick={() => dispatch(setUILanguage(locales.en))}>EN</button>
    </div>
  )
}

export default App
