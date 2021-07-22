import type { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../lib/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
