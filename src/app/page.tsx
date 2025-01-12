import Hero from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import fs from 'fs/promises';
import path from 'path';

type Project = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  detailsLink: string;
  externalLink: string;
};

async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'src/data', 'data.json');
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    return data.projects;
  } catch (error) {
    console.error("Error reading or parsing projects data:", error);
    return [];
  }
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
    <Hero />
    <main className="flex-1 container mx-auto px-4 py-8 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projects?.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            detailsLink={project.detailsLink}
            externalLink={project.externalLink}
          />
        ))}
      </div>
    </main>
    </>
  );
}
