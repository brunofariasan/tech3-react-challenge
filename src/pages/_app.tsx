import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/globalStyles/globalStyle';
import { theme } from '@/styles/theme';
import { useRouter } from 'next/router';
import { ToastContainer } from '@/components/micro/Toast';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div
        style={{ backgroundColor: isHome ? 'rgb(217, 217, 217)' : '#15171a', minHeight: '100vh' }}
      >
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}
