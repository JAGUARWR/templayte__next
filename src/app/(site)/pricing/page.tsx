// app/pricing/page.tsx
import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Цены — Sakne Studio | Разработка сайтов на Next.js",
  description:
    "Актуальные цены Sakne Studio на разработку сайтов и приложений на Next.js: фиксированные пакеты и индивидуальные оценки под задачи бизнеса.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Цены — Sakne Studio",
    description:
      "Тарифы на разработку сайтов и web-приложений на Next.js. Пакеты и кастомные решения.",
    type: "website",
    images: [{ url: "/og/pricing.jpg" }], // опционально: добавь файл
  },
  twitter: {
    card: "summary_large_image",
    title: "Цены — Sakne Studio",
    description:
      "Тарифы на разработку сайтов и web-приложений на Next.js.",
    images: ["/og/pricing.jpg"], // опционально
  },
  robots: { index: true, follow: true },
};

export default function PricingPage() {
  return (
    <>
      <Breadcrumb pageName="Прайс-лист" />

      {/* JSON-LD для страницы с тарифами */}
      <Script
        id="ld-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Прайс-лист — Sakne Studio",
            url: "/pricing",
            description:
              "Цены на разработку сайтов и приложений на Next.js: пакеты и индивидуальные предложения.",
          }),
        }}
      />

      <Pricing />
      <Faq />
    </>
  );
}
