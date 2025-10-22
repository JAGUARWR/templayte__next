// app/contact/page.tsx
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Контакты — Sakne Studio | Разработка сайтов на Next.js",
  description:
    "Свяжитесь с Sakne Studio: разработка быстрых сайтов и приложений на Next.js. Москва, работаем по миру. Telegram @Pavelvrl, hello@sakne.studio.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Контакты — Sakne Studio",
    description:
      "Свяжитесь с Sakne Studio: разработка быстрых сайтов и приложений на Next.js.",
    type: "website",
    images: [{ url: "/og/contact.jpg" }], // опционально: добавь файл
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакты — Sakne Studio",
    description:
      "Разработка быстрых сайтов и приложений на Next.js. Свяжитесь с нами.",
    images: ["/og/contact.jpg"], // опционально
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb pageName="Наши контакты" />

      {/* JSON-LD (полезно для SEO) */}
      <Script
        id="ld-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Контакты — Sakne Studio",
            url: "/contact",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "hello@sakne.studio",
                telephone: "+79999431666",
                availableLanguage: ["ru", "en"],
                areaServed: ["RU", "Worldwide"],
              },
            ],
          }),
        }}
      />

      <Contact />
    </>
  );
}
