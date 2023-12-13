import React, { useState, useEffect } from 'react';
import { getTechStackDetails } from '../Services/DataService';

function Technologies() {
  const [techStackDetails, setTechStackDetails] = useState({
    html: '',
    css: '',
    js: '',
    react: '',
    redux: '',
    sass: '',
    git: '',
    github: '',
    reactRouter: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const techStackData = await getTechStackDetails();

        setTechStackDetails(techStackData);
      } catch (error) {
        console.error('Error fetching data for About page:', error);
      }
    }

    fetchData();
  }, []);

  const { html, css, js, react, redux, sass, git, github, reactRouter } =
    techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Langages et Technologies Web
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={sass} title="SASS" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Contrôle de Version
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Bibliothèques React
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={redux} title="Redux" alt="" />
        <img src={reactRouter} title="reactRouter" alt="" />
      </section>
    </main>
  );
}

export default Technologies;
