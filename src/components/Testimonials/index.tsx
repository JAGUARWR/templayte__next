import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Александр",
    designation: "Владелец SaaS-стартапа",
    content:
      "После перехода на Next.js мы сразу увидели скачок в конверсии. Мы гарантировали клиентам быструю загрузку, а на Tilda это было невозможно. Теперь наш сайт работает идеально, и это заметно.",
    image: "/images/testimonials/author-01.svg",
    star: 5,
  },
  {
    id: 2,
    name: " Елена",
    designation: "Директор по Маркетингу",
    content:
      "Мы потратили месяцы на оптимизацию WordPress, но так и не смогли пробить потолок в выдаче Google. С сайтом на Next.js наш трафик вырос на 30% за два месяца. Чистый код — это лучшая инвестиция в SEO.",
    image: "/images/testimonials/author-02.svg",
    star: 5,
  },
  {
    id: 3,
    name: "Михаил",
    designation: "Технический директор",
    content:
      "Главное — мы избавились от 'костылей' и постоянных проблем с плагинами. Сейчас у нас чистая, масштабируемая архитектура, которую легко дорабатывать и интегрировать с любым API. Next.js снял ограничения с нашего развития.",
    image: "/images/testimonials/author-03.svg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Наши отзывы"
          title="Что говорят клиенты, выбравшие Next.js"
          paragraph="Мы не просим верить нам на слово. Посмотрите, как изменилась работа бизнеса тех, кто отказался от конструкторов."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
