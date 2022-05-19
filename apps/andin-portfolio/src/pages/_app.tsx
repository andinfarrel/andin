import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { Navbar } from 'app/components/common'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
