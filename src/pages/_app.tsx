import '@/styles/global.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/styles/theme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatBotWidget';
import type { AppProps } from 'next/app'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head'; // ✅ Import Head

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ✅ Add the viewport meta here */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <ChatbotWidget />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;