import routes from './routes.json';

export default [
  [
    // Cookiebot consent banner — MUST be the first script in <head> so its
    // auto-blocking mode can gate cookie-setting scripts (GA4/GTM) until the
    // user explicitly opts in (GDPR/CCPA).
    //
    // Security note (tracked in ELSDOC-313): this is a NEW external <script src>
    // on docs.tuxcare.com. SRI is intentionally NOT applied — consent.cookiebot.com
    // is a versionless vendor loader, so a pinned integrity hash would break the
    // banner on every Cookiebot update. GitHub Pages cannot send a CSP header, so
    // this is a knowingly ACCEPTED supply-chain risk, taken for a legal consent
    // requirement. NOT covered by GSR-10249: that ticket closed docs on the basis
    // of "no external scripts present" — Cookiebot was added afterwards.
    "script",
    {
      id: "Cookiebot",
      src: "https://consent.cookiebot.com/uc.js",
      "data-cbid": "683e5da5-be31-4695-80e1-2c71cc909411",
      "data-blockingmode": "auto",
      type: "text/javascript",
    },
  ],
  [
    "script",
    {
      type: "application/ld+json",
      id: "tc-org-schema",
    },
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "TuxCare",
      url: "https://tuxcare.com",
      logo: "https://docs.tuxcare.com/global/TuxCare_color_logo_tagline_RGB.webp",
      sameAs: [
        "https://www.linkedin.com/company/tuxcare",
        "https://www.youtube.com/@TuxCare",
      ],
    }),
  ],
  [
    "script",
    {
      type: "application/ld+json",
      id: "tc-website-schema",
    },
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "TuxCare Documentation",
      url: "https://docs.tuxcare.com",
      publisher: {
        "@type": "Organization",
        name: "TuxCare",
        url: "https://tuxcare.com",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://docs.tuxcare.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  ],
  [
    "script",
    {},
    `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5BSW555');
      `,
  ],
  [
    "script",
    {},
    `
      (function() {
        var routes = ${JSON.stringify(routes)};
    
        for (var route_url in routes) {
          if (window.location.href.indexOf(route_url) !== -1) {
            window.location.href = routes[route_url];
          }
        }
      })();
      `,
  ],
  [
    "script",
    {},
    `
                    (function() {
                      // Trigger the scroll event without actually scrolling
                      function triggerScrollEvent() {
                        const targetElement = window;
                        const scrollEvent = new Event('scroll', {
                          bubbles: true,
                          cancelable: true,
                        });
                        targetElement.dispatchEvent(scrollEvent);
                      }
              
                      // Call the triggerScrollEvent and scrollBodyDown functions after the page is fully loaded
                      window.addEventListener('load', () => {
                        triggerScrollEvent();
                      });
                    })();
                  `,
  ],
];
