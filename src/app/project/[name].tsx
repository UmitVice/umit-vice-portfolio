import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';

type Project = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  detailsLink: string;
  externalLink: string;
};

type Props = {
  project: Project;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'public', 'mock.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const projects: Project[] = JSON.parse(jsonData);

  const paths = projects.map((project) => ({
    params: { name: project.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'public', 'mock.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const projects: Project[] = JSON.parse(jsonData);

  const project = projects.find((p) => p.name === params?.name);

  return {
    props: {
      project,
    },
  };
};

const ProjectPage = ({ project }: Props) => {
  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
        Visit Project
      </a>
    </div>
  );
};

export default ProjectPage;
