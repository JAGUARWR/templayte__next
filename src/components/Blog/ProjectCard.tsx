"use client";

import Image from "next/image";
import Link from "next/link";

/** Данные одной карточки */
type P = {
  id?: string | number;
  cover: string;
  title: string;
  excerpt?: string;
  tags?: string[];
  meta?: string;

  // возможные поля со ссылкой
  link?: string;
  p_link?: string;
  url?: string;
  href?: string;
  slug?: string; // внутренний маршрут
};

function resolveHref(p: P): { href?: string; external: boolean } {
  const raw =
    p.link ?? (p as any).p_link ?? p.url ?? p.href ?? (p.slug ? `/portfolio/${p.slug}` : undefined);

  if (!raw) return { href: undefined, external: false };
  return { href: raw, external: /^https?:\/\//i.test(raw) };
}

export default function ProjectCard({ p }: { p: P }) {
  const { href, external } = resolveHref(p);

  return (
    <article
      className="
        group relative flex h-[520px] w-full flex-col
        rounded-2xl border bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,.25)]
        transition
        hover:shadow-[0_18px_46px_-12px_rgba(59,91,255,.30)]
        border-gray-200
        dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_10px_30px_-12px_rgba(0,0,0,.55)]
      "
    >
      {/* превью */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="relative h-[260px] md:h-[280px] w-full">
          <Image
            src={p.cover}
            alt={p.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw"
          />
        </div>

        {/* градиент под подпись (светлая/тёмная темы отдельно, чтобы не конфликтовали цвета) */}
        <div className="absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-[#0B1623]/90 via-[#0B1623]/45 to-transparent dark:block" />
        <div className="absolute inset-x-0 bottom-0 block h-24 bg-gradient-to-t from-black/30 via-black/10 to-transparent dark:hidden" />
      </div>

      {/* контент */}
      <div className="flex min-h-0 flex-1 flex-col gap-4 p-6">
        <header className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>

          {p.excerpt && (
            <p className="text-[15px] leading-relaxed text-gray-600 dark:text-white/70">
              {p.excerpt}
            </p>
          )}
        </header>

        {p.tags?.length ? (
          <ul className="mt-1 flex flex-wrap gap-2">
            {p.tags.map((t, i) => (
              <li
                key={i}
                className="
                  rounded-lg px-3 py-1 text-xs
                  bg-gray-100 text-gray-700
                  dark:bg-white/10 dark:text-white/80
                "
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}

        {/* низ карточки */}
        <div className="mt-auto flex items-center justify-between gap-3">
          {p.meta ? (
            <span className="text-xs text-gray-500 dark:text-white/60">{p.meta}</span>
          ) : (
            <span />
          )}

          {href ? (
            external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[12px] bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90"
              >
                Перейти на сайт
              </a>
            ) : (
              <Link
                href={href}
                className="inline-flex items-center justify-center rounded-[12px] bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90"
              >
                Перейти на сайт
              </Link>
            )
          ) : (
            <span className="inline-flex items-center justify-center rounded-[12px] bg-gray-100 px-6 py-2.5 text-sm font-medium text-gray-500 dark:bg-white/10 dark:text-white/70">
              Скоро кейс
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

