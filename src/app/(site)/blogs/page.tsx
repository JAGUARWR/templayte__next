// app/(site)/blogs/page.tsx
import type { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb"; // проверь путь к компоненту хлебных
import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/Blog/ProjectCard";

export const metadata: Metadata = {
  title: "Портфолио — проекты на Next.js",
  description:
    "Кейсы: лендинги, магазины и корпоративные сайты с идеальной скоростью, SEO и зелёными Core Web Vitals.",
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumb pageName="Портфолио" />

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {projects.map((p) => (
              <div key={p.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <ProjectCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
