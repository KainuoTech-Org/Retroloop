import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  date: string;
  images: any[];
}

async function getProjects() {
  const query = `*[_type == "projectGallery"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    date,
    images
  }`;
  return client.fetch(query);
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-retro-red mb-12 text-center">
          Project Gallery / 项目展示
        </h1>
        
        <div className="space-y-20">
          {projects.map((project: Project) => (
            <div key={project._id} className="border-t border-retro-black/10 pt-12">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                <div>
                  <h2 className="text-4xl font-oswald font-bold uppercase">{project.title}</h2>
                  <p className="font-mono text-retro-black/60 mt-2">{project.date}</p>
                </div>
                <p className="max-w-md font-mono text-sm leading-relaxed text-retro-black/80">
                  {project.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.images?.map((img, index) => (
                  <div key={index} className="relative aspect-[4/5] bg-retro-gray/10">
                    <Image
                      src={urlForImage(img).url()}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:opacity-90 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-xl font-mono text-retro-black/60">
            暂无项目。<br/>
            (No projects found.)
          </p>
        )}
      </div>
    </div>
  );
}
