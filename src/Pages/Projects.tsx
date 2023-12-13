import React, { useState, useEffect } from 'react';
import Project from '../Components/Project';
import { getProjectDetails } from '../Services/DataService';
import { ProjectDetails } from '../type';

function Projects() {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProjectDetails();
        setProjectDetails(data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({
                title,
                image,
                desc,
                techstack,
                technoImg,
                githublink,
                previewlink,
              }) => (
                <Project
                  title={title}
                  image={image}
                  description={desc}
                  techstack={techstack.join(', ')}
                  previewLink={previewlink || null}
                  showPreviewLink={!!previewlink}
                  githubLink={githublink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
