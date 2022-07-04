import '../styles/globals.scss'
import "../styles/NavbarStyle.scss"
import "../styles/MainPageStyle.scss"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
