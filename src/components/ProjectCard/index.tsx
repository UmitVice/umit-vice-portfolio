import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  detailsLink: string;
  externalLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, image, detailsLink, externalLink }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-sm">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-4">{name}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex justify-between mt-4">
        <Link href={detailsLink}>
          Details
        </Link>
        <a href={externalLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Visit
        </a>
      </div>
    </div>
  );
};