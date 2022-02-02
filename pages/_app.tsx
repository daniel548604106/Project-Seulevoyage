import 'tailwindcss/tailwind.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.scss';
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import '../styles/global.css';
import '../styles/variables.css';

import Head from 'next/head';
import Script from 'next/script';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable='no'"
        ></meta>
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>SeuleVoyage</title>
        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/72.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/80.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons/512.png"/>
        <meta name="theme-color" content="white" />
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" href="/icons/1024.png"/>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></Script>
    </>
  )
}

export default MyApp
