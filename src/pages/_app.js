import { useEffect } from "react";
import Script from "next/script";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

import TagManager from "react-gtm-module"

const tagManagerArgs = {
  gtmId: "GTM-KV265C3",
}
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/appIcon.svg" />
      </Head>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MBXQZ0YN5X"
        strategy="afterInteractive"
      />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MBXQZ0YN5X');
      `}
      </Script> */}

      <Script id="mcjs">
        {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/2aa7b0ee0947f72b7fb00c459/272a4d199dd302016d9453b05.js");`}
      </Script>


      <Component {...pageProps} />
      {/* <GetLuca /> */}
    </div>
  );
}

export default MyApp;
