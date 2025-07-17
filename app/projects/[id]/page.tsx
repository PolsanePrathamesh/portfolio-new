import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/utils/json/projects/projects.json";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

interface PageProps {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ProjectDetails({ params }: PageProps) {
  const project = projectsData.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 md:px-8 lg:px-12">
      <div className=" mx-auto">
        <div className="">
          <div className="!p-10">
            <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-7xl font-semibold text-white">
                    {project.name.toUpperCase()}
                  </h1>
                </>
              }
            >
              <Image
                src={project.thumbnail}
                alt={project.name}
                width={1000}
                height={1000}
                className="object-cover rounded-3xl"
              />
            </ContainerScroll>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800/50 text-sm rounded-full border border-gray-700 text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Visit Project →
                </a>
              )}
            </div>
            {project.details && (
              <div
                className="prose prose-invert max-w-none mb-5"
                dangerouslySetInnerHTML={{ __html: project.details }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    id: project.id,
  }));
}
