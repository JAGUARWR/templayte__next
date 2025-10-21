export default function Head() {
  return (
    <>
      <title>Next.js сайты в Новосибирске — 100/100 Lighthouse, запуск рекламы</title>

      <meta name="description" content="Разрабатываю быстрые сайты на Next.js в Новосибирске: зелёные Core Web Vitals, чистое SEO, корректные пиксели и аналитика. Лёгкий запуск рекламы. Портфолио и цены." />

      <link rel="canonical" href="https://ваш-домен.ру/" />
      <meta name="robots" content="index,follow" />
      <meta name="theme-color" content="#0B0F19" />

      {/* <!-- Open Graph --> */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:title" content="Next.js сайты в Новосибирске — 100/100 Lighthouse, запуск рекламы" />
      <meta property="og:description" content="Быстрые, SEO-чистые сайты на Next.js. Core Web Vitals зелёные, пиксели и аналитика работают корректно." />
      <meta property="og:url" content="https://ваш-домен.ру/" />
      <meta property="og:site_name" content="Sakne" />
      <meta property="og:image" content="/og.jpg" />

      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Next.js сайты в Новосибирске — 100/100 Lighthouse, запуск рекламы" />
      <meta name="twitter:description" content="Быстрые сайты на Next.js в Новосибирске: Core Web Vitals зелёные, чистое SEO, лёгкий запуск рекламы." />
      <meta name="twitter:image" content="/og.jpg" />

      {/* <!-- JSON-LD (LocalBusiness) --> */}
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Sakne",
        "url": "https://ваш-домен.ру/",
        "image": "https://ваш-домен.ру/og.jpg",
        "description": "Сайты на Next.js с оценкой 100/100 в Lighthouse: зелёные Core Web Vitals, чистое SEO, корректные пиксели и аналитика.",
        "address": {
          "@type": "PostalAddress",
        "addressLocality": "Новосибирск",
        "addressCountry": "RU"
      },
        "areaServed": "Новосибирск",
        "sameAs": ["https://t.me/ваш_ник", "https://wa.me/ваш_номер"]
},
      </script>

    </>
  );
}
