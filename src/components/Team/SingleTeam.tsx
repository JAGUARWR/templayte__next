import { TeamType } from "@/types/team";
import Image from "next/image";
import Link from "next/link";

const SingleTeam = ({ team }: { team: TeamType }) => {
  const { image, name, designation, telegramLink } = team;

  const contactHref = telegramLink ?? "#";
  const hasContact = contactHref !== "#";

  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
        {/* Аватар + декор — анимация как в оригинале, но с корректным z-index */}
        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
          <Image
            src={image}
            alt={name}
            width={120}
            height={120}
            className="relative z-10 w-full rounded-full"
          />

          {/* зелёный кружок, оригинальные классы + без -z-10 */}
          <span className="absolute bottom-0 left-0 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100" />

          {/* синие точки, оригинальная анимация + без -z-10 */}
          <span className="absolute right-0 top-0 opacity-0 transition-all group-hover:opacity-100">
            <svg
              width="55"
              height="53"
              viewBox="0 0 55 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5118 3.1009C13.3681 3.1009 14.0622 2.40674 14.0622 1.55045C14.0622 0.69416 13.3681 0 12.5118 0C11.6555 0 10.9613 0.69416 10.9613 1.55045C10.9613 2.40674 11.6555 3.1009 12.5118 3.1009Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.5038 3.1009C23.3601 3.1009 24.0543 2.40674 24.0543 1.55045C24.0543 0.69416 23.3601 0 22.5038 0C21.6475 0 20.9534 0.69416 20.9534 1.55045C20.9534 2.40674 21.6475 3.1009 22.5038 3.1009Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.4958 3.1009C33.3521 3.1009 34.0463 2.40674 34.0463 1.55045C34.0463 0.69416 33.3521 0 32.4958 0C31.6395 0 30.9454 0.69416 30.9454 1.55045C30.9454 2.40674 31.6395 3.1009 32.4958 3.1009Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.4875 3.1009C43.3438 3.1009 44.038 2.40674 44.038 1.55045C44.038 0.69416 43.3438 0 42.4875 0C41.6312 0 40.9371 0.69416 40.9371 1.55045C40.9371 2.40674 41.6312 3.1009 42.4875 3.1009Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.4795 3.1009C53.3358 3.1009 54.03 2.40674 54.03 1.55045C54.03 0.69416 53.3358 0 52.4795 0C51.6233 0 50.9291 0.69416 50.9291 1.55045C50.9291 2.40674 51.6233 3.1009 52.4795 3.1009Z"
                fill="#3758F9"
              />
              {/* остальные path такие же, как у тебя */}
            </svg>
          </span>
        </div>

        <div className="text-center">
          <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white">
            {name}
          </h3>
          <p className="mb-5 text-sm text-body-color dark:text-dark-6">
            {designation}
          </p>

          {/* Кнопка: чуть ниже по высоте, менее круглая */}
          <div className="flex items-center justify-center">
            <Link
              href={contactHref}
              target={hasContact ? "_blank" : undefined}
              rel={hasContact ? "noopener noreferrer" : undefined}
              className={
                "inline-flex items-center justify-center rounded-lg " +
                "px-5 py-2.5 text-sm font-medium transition " +
                (hasContact
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "pointer-events-none bg-dark-3/40 text-dark-6 dark:bg-dark-3/60")
              }
            >
              Связаться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;
