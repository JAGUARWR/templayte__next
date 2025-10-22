import ProjectCard from "@/components/Blog/ProjectCard";
import { projects } from "@/data/portfolio";

export default function PortfolioGrid() {
  return (
    <section
      className="
        relative overflow-hidden py-16 md:py-20 lg:py-24
        bg-white dark:bg-[#111928]
      "
    >
      {/* Декоративный фон раздела (не перекрашивает подложку) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* мягкие пятна */}
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl dark:bg-primary/12" />
        <div className="absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-[#3F8CFF]/10 blur-3xl dark:bg-[#3F8CFF]/12" />
        {/* радиальная дымка – вместо чёрного используем прозрачный */}
        <div className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_65%)]
          dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_65%)]
        " />
      </div>

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {projects.map((p, i) => (
            <div key={p.id ?? i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8">
                <ProjectCard p={p} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


