import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.className} ${roboto.className}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
