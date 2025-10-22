export type Project = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  cover: string;     // путь к обложке в /public/images/...
  href?: string;     // ссылка на живой сайт
  date?: string;
  tags?: string[];
  metrics?: string;  // коротко: "LCP <1s, Score 100"
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "landing-100-lighthouse",
    title: "Студия звукозаписи в Кемерево",
    excerpt: "SSG, оптимизация изображений, CDN. Чистые Web Vitals.",
    cover: "/images/blog/vox.png",
    href: "https://voxmusic.ru/",
    metrics: "Сайт о котором мечтают",
    tags: ["Next.js", "SSG", "SEO"]
  },
  {
    id: 2,
    slug: "shop-nextjs",
    title: "Архитектор София Алякина",
    excerpt: "SSR, платежи, фильтры, интеграция CRM.",
    cover: "/images/blog/alyakina.png",
    href: "https://alyakina.ru/",
    metrics: "Перейди и убедись в скорости",
    tags: ["Next.js", "SSR"]
  },
  {
    id: 3,
    slug: "corp-multipage",
    title: "Маркетинговые услуги",
    excerpt: "Статические страницы + MDX, быстрый поиск.",
    cover: "/images/blog/edvays.png",
    href: "http://zsmc-advice.ru/",
    tags: ["Next.js", "MDX"]
  }
];
