import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  return (
    <>
      <div className='grid grid-cols-3 gap-10'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </>
  );
}
