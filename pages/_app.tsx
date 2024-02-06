import { AppProps } from 'next/app'
import '../styles/index.css'
import Navbar from'navbar.tsx'
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
