export default function ProjectCard({ project }) {
  return (
    <>
      <div className='flex flex-col gap-4 rounded-xl p-4 justify-center items-center bg-slate-700'>
        <img
          src={project.image}
          alt={project.title}
          width={250}
        />
        <h3 className='text-sm text-center'>{project.title}</h3>
      </div>
    </>
  );
}
