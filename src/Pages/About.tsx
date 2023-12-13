import React, { useState, useEffect } from 'react';
import Work from '../Components/Work';
import { getPersonalDetails, getEduDetails } from '../Services/DataService';
import { EduDetails } from '../type';

function About() {
  const [personalDetails, setPersonalDetails] = useState({
    about: '',
  });

  const [eduDetails, setEduDetails] = useState<EduDetails[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const personalData = await getPersonalDetails();
        const eduData = await getEduDetails();

        setPersonalDetails(personalData);
        setEduDetails(eduData);
      } catch (error) {
        console.error('Error fetching data for About page:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          À propos de moi
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          {personalDetails.about}
        </p>
      </section>

      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Formation
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
