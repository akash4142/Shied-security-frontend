import '@/styles/global.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/styles/theme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { AppProps } from 'next/app'; // ✅ Import AppProps from next/app
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function MyApp({ Component, pageProps }: AppProps) { // ✅ Define AppProps type
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
