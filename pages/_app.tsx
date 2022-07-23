import '../styles/globals.scss'
import "../styles/NavbarStyle.scss"
import "../styles/MainPageStyle.scss"
import "../styles/ClinicsStyles.scss"
import "../styles/PaginationStyle.scss"
import "../styles/ClinicDetailsStyle.scss"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
