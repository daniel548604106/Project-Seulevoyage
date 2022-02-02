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
        <link rel="apple-touch-icon" href="/icons/512.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SeuleVoyage" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* <!-- generics --> */}
        <link rel="icon" href="/icons/60.png" sizes="60x60" />
        <link rel="icon" href="/icons/76.png" sizes="76x76" />
        <link rel="icon" href="/icons/128.png" sizes="128x128" />
        <link rel="icon" href="/icons/144.png" sizes="144x144" />
        <link rel="icon" href="/icons/192.png" sizes="192x192" />
        <link rel="icon" href="/icons/228.png" sizes="228x228" />
        <link rel="icon" href="/icons/512.png" sizes="512x512" />

        {/* <!-- Android --> */}
        <link rel="shortcut icon" sizes="196x196" href="/icons/196.png" />

        {/* <!-- iOS --> */}
        <link rel="apple-touch-icon" href="/icons/120.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/icons/152.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/icons/180.png" sizes="180x180" />

        {/* <!-- Windows 8 IE 10--> */}
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/icons/144.png" />

        {/* <!— Windows 8.1 + IE11 and above —> */}
        <meta
          name="msapplication-config"
          content="/path/to/browserconfig.xml"
        />

        {/* Apple Splash Screen Icon */}
        <link
          href="/splashscreens/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphoneplus_splash.png"
          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexr_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexsmax_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipad_splash.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro1_splash.png"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro3_splash.png"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro2_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></Script>
    </>
  )
}

export default MyApp
