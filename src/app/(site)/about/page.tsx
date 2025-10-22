// app/about/page.tsx
import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "О нас — Sakne Studio | Разработка сайтов на Next.js",
  description:
    "Sakne Studio — команда разработки быстрых сайтов и web-приложений на Next.js. Дизайн, интеграции, SEO и поддержка — полный цикл.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "О нас — Sakne Studio",
    description:
      "Кто мы и как работаем: команда Sakne Studio, проекты и подход к разработке.",
    type: "website",
    images: [{ url: "/og/about.jpg" }], // добавь файл при желании
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "О нас — Sakne Studio",
    description:
      "Команда Sakne Studio: опыт, стек и подход к проектам.",
    images: ["/og/about.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <main>
      <Breadcrumb pageName="О нас" />

      {/* JSON-LD для страницы «О нас» */}
      <Script
        id="ld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "О нас — Sakne Studio",
            url: "/about",
            description:
              "Sakne Studio — команда разработки быстрых сайтов и web-приложений на Next.js.",
            about: {
              "@type": "Organization",
              name: "Sakne Studio",
              url: "/",
              sameAs: [
                "https://t.me/sakne_studio",
                "https://wa.me/79999431666",
              ],
            },
          }),
        }}
      />

      <About />
      <Team />
    </main>
  );
}

