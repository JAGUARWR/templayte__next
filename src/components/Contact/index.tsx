// src/components/Contact/index.tsx (или где у вас лежит Contact)
"use client";

import Link from "next/link";

const WHATSAPP = "https://wa.me/79994316266";     // подставьте свой номер без +
const TELEGRAM = "https://t.me/Pavelvrl";         // ваш @
const TEL = "tel:+79994316266";                   // номер для клика
// const EMAIL = "mailto:hello@sakne.studio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden py-20 md:py-[120px]
        bg-white dark:bg-[#111928]
      "
    >
      {/* Верхняя полоса фона (как в вашем референсе) */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 -z-10
          h-1/2 bg-[#E9F9FF]
          dark:bg-[#0E1624]   /* чуть темнее #111928 для верха */
          lg:h-[45%] xl:h-1/2
        "
      />

      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-start">
          {/* Левая колонка — заголовок и контакты текста */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 lg:mb-[150px]">
              <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                Как с нами связаться
              </span>
              <h2 className="max-w-[620px] text-[38px] md:text-[48px] font-semibold leading-tight text-dark dark:text-white">
                Давайте обсудим <br /> ваш проект.
              </h2>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-10">
              {/* Локация */}
              <div className="flex w-[330px] max-w-full">
                <div className="mr-6 text-[32px] text-primary">
                  {/* pin */}
                  <svg width="29" height="35" viewBox="0 0 29 35" className="fill-current">
                    <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                    <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-dark dark:text-white">
                    Наше расположение
                  </h3>
                  <p className="text-base text-body-color dark:text-white/70">
                    Новосибирск <br />Работаем удалённо по миру
                  </p>
                </div>
              </div>

              {/* Как связаться */}
              <div className="flex w-[330px] max-w-full">
                <div className="mr-6 text-[32px] text-primary">
                  {/* envelope */}
                  <svg width="34" height="25" viewBox="0 0 34 25" className="fill-current">
                    <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-dark dark:text-white">
                    Как связаться
                  </h3>
                  {/* <p className="text-base text-body-color dark:text-white/70">
                    hello@sakne.studio
                  </p> */}
                  <p className="mt-1 text-base text-body-color dark:text-white/70">
                    +7 (999) 431 62 66
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая карточка с кнопками */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-[#0F1A2A] sm:px-10 sm:py-12">
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px]">
                Свяжитесь <br /> удобным способом
              </h3>

              <div className="space-y-4">
                <Link
                  href={WHATSAPP}
                  target="_blank"
                  className="block w-full rounded-md bg-[#22C55E] px-6 py-3 text-center text-white hover:opacity-90"
                >
                  WhatsApp
                </Link>

                <Link
                  href={TELEGRAM}
                  target="_blank"
                  className="block w-full rounded-md bg-[#3B82F6] px-6 py-3 text-center text-white hover:opacity-90"
                >
                  Telegram
                </Link>

                <Link
                  href={TEL}
                  className="block w-full rounded-md bg-primary px-6 py-3 text-center text-white hover:bg-primary/90"
                >
                  Позвонить
                </Link>

                {/* <Link
                  href={EMAIL}
                  className="block w-full rounded-md bg-[#0B1220] px-6 py-3 text-center text-white hover:opacity-90 dark:bg-black/40"
                >
                  Email: hello@sakne.studio
                </Link> */}

                <p className="pt-2 text-center text-xs text-dark/60 dark:text-white/60">
                  Мы не собираем данные на сайте. <br />Нажимая на кнопку, вы пишете нам напрямую
                  в мессенджере, на почту или звоните.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
