import { useState } from "react";
import ProjectList from "./ProjectList.jsx";
import projects from "@/js/projects.js";

export default function Project() {
  const [category, setCategory] = useState("frontend");

  const handleCategoryProject = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  return (
    <>
      <div className='flex flex-col items-center justify-center pt-12 gap-5'>
        <h1 className='text-3xl'>My Projects</h1>
        <div className='flex border-b-2 border-violet-300'>
          <button
            onClick={() => handleCategoryProject("frontend")}
            className={`p-2 ${
              category === "frontend"
                ? "bg-violet-300 text-black rounded-t-sm "
                : ""
            }`}
          >
            Front End
          </button>
          <button
            onClick={() => handleCategoryProject("backend")}
            className={`p-2 ${
              category === "backend"
                ? "bg-violet-300 text-black rounded-t-sm"
                : ""
            }`}
          >
            Back End
          </button>
        </div>
        <ProjectList projects={filteredProjects} />
      </div>
    </>
  );
}
