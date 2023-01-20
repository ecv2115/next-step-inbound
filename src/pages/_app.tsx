import { Chivo } from '@next/font/google';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const chivo = Chivo({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --chivo-font: ${chivo.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
