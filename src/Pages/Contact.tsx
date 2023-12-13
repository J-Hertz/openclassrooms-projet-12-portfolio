import React, { useEffect, useState } from 'react';
import { getContactDetails } from '../Services/DataService';

function Contact() {
  const [contactData, setContactData] = useState({
    email: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getContactDetails();
        setContactData(data);
      } catch (error) {
        console.error('Error fetching data for Contact page:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Contact
      </h1>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
      </h3>
    </main>
  );
}

export default Contact;
