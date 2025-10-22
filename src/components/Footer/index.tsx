import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[120px]"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Бренд + краткий текст */}
          <div className="w-full px-4 md:w-5/12 lg:w-4/12">
            <div className="mb-10">
              <Link href="/" className="mb-6 inline-flex items-center gap-3">
                <Image
                  src="/images/logo/WhiteLogo.svg"
                  alt="Sakne Studio"
                  width={150}
                  height={40}
                  className="max-w-full"
                />
              </Link>

              <p className="max-w-[340px] text-base text-gray-7">
                Разрабатываем быстрые сайты и приложения на Next.js.
                Дизайн, интеграции, SEO — полный цикл под ключ.
              </p>
            </div>
          </div>

          {/* Навигация */}
          <div className="w-full px-4 sm:w-1/2 md:w-3/12 lg:w-2/12">
            <div className="mb-10">
              <h4 className="mb-6 text-lg font-semibold text-white">Навигация</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-base text-gray-7 hover:text-primary">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-base text-gray-7 hover:text-primary">
                    Портфолио
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-base text-gray-7 hover:text-primary">
                    Прайс-лист
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-base text-gray-7 hover:text-primary">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Контакты */}
          <div className="w-full px-4 sm:w-1/2 md:w-4/12 lg:w-3/12">
            <div className="mb-10">
              <h4 className="mb-6 text-lg font-semibold text-white">Контакты</h4>
              <ul className="space-y-3">
                <li className="text-base text-gray-7">
                  Новосибирск <br /> Работаем удалённо по миру
                </li>
                <li>
                  <a
                    href="mailto:hello@sakne.studio"
                    className="text-base text-gray-7 hover:text-primary"
                  >
                    {/* hello@sakne.studio */}
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+79994316266"
                    className="text-base text-gray-7 hover:text-primary"
                  >
                    +7 (999) 431-62-66
                  </a>
                </li>
                <li className="flex gap-3 pt-1">
                  <a
                    href="https://t.me/@Pavelvrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-white/5 px-3 py-1.5 text-sm text-gray-7 hover:bg-white/10 hover:text-white"
                    aria-label="Telegram"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/79994316266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-white/5 px-3 py-1.5 text-sm text-gray-7 hover:bg-white/10 hover:text-white"
                    aria-label="WhatsApp"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Документы */}
          <div className="w-full px-4 md:w-4/12 lg:w-3/12">
            <div className="mb-10">
              <h4 className="mb-6 text-lg font-semibold text-white">Документы</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-base text-gray-7 hover:text-primary">
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-base text-gray-7 hover:text-primary">
                    Пользовательское соглашение
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя плашка — те же отступы, что в оригинале */}
      <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="w-full text-center text-base text-gray-7 md:w-auto md:text-left">
              © {year} Sakne Studio. Все права защищены.
            </p>
            <p className="w-full text-center text-base text-gray-7 md:w-auto md:text-right">
              Сделано в&nbsp;Sakne Studio
            </p>
          </div>
        </div>
      </div>

      {/* Декор — как в оригинале */}
      <span className="absolute left-0 top-0 z-[-1] aspect-[95/82] w-full max-w-[570px]">
        <Image src="/images/footer/shape-1.svg" alt="shape" fill />
      </span>
      <span className="absolute bottom-0 right-0 z-[-1] aspect-[31/22] w-full max-w-[372px]">
        <Image src="/images/footer/shape-3.svg" alt="shape" fill />
      </span>
      <span className="absolute right-0 top-0 z-[-1]">
        {/* сетка точек без изменений */}
        <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* … paths … */}
        </svg>
      </span>
    </footer>
  );
};

export default Footer;
