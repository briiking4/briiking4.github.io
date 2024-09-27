import React, { useState } from 'react';
import './Experience.css'; 

import brimix from "./assets/brimix.png";

const experiences = [
  {
    time: '0:00',
    title: 'Associate Product Manager',
    company: 'Bobsled - Series A, cross-cloud data sharing start-up',
    duration: 'October 2022 - December 2023',
    bullets: [
      'Led development of the Bobsled REST API, adapting to a primary audience shift toward software engineers; conducted user research to identify ETL integration needs; collaborated with engineering and design teams to validate a prototype; securing 5 major deals and opened avenues for million-dollar contracts with SaaS companies',
      'Synthesized qualitative research from 10 API usability tests, leading a team to create a self-serve developer experience with OpenAI, reducing onboarding by 3 weeks and automating the API POC process for Sales',
      'Developed a data type mapping system to translate non-self-describing file formats to data warehouses, eliminating lengthy data cleaning and saving 1 hour per data engineer per dataset, improving efficiency for DaaS companies with unstructured data',
      'Led weekly sprint planning and daily backlog grooming for 2 cloud, 2 backend, and 3 front-end engineers; writing user stories and prioritizing with Scrum principals; attended standups with senior leadership to report on progress, blockers, and prioritize tasks'
    ],
    skills:["REST API", "Microsoft Azure", "Google Cloud Platform", "GitHub", "User Interviews", "Scrum", "Dovetail", "Figma"]
  },
  {
    time: '1:00',
    title: 'Graduate Software Engineering Intern',
    company: 'Bobsled - Series A, cross-cloud data sharing start-up',
    duration: 'June 2022 - October 2022',
    bullets: [
      'Devised a solution in Azure Blob Storage for secure data transfer, managing a team of 3 engineers to launch Azure object storage as a Bobsled Destination, enabling access to a market with 95% of Fortune 500 companies and closing a major early deal',
      'Collaborated on weekly software releases with CTO and SRE, conducting end-to-end user acceptance testing for object storage using Google Cloud, Azure, and AWS CLI, and in data warehouses using Snowflake and Big Query SQL queries to ensure data integrity',
      'Formulated a technical product documentation strategy, launching a website with 100+ articles, achieving an average 4/5 satisfaction score, a 3-minute reduction in sales call explanations, and an 80% drop in "easily resolvable issues"',
      'Developed, tested, and reviewed code for front-end components in Remix Typescript as well as resolved and tracked client bugs in GitHub and Google Cloud Logging'
    ],
    skills:["Remix", "Typescript", "Technical Documentation", "Microsoft Azure", "Google Cloud Platform","Git Hub", "User Interviews"]

  },
  {
    time: '2:00',
    title: 'Financial Planning & Analysis Intern - Media Tech',
    company: 'NBC Universal',
    duration: 'September 2019 - May 2020',
    bullets: [
       'Wrote software documentation and trained non-technical teams for financial reporting systems, resulting in a significant decrease in technical support ticket volume',
       'Developed project management site for 200+ users, earning executive-level recognition',
       'Collected, prioritized, and liaised communication between engineering and finance teams to resolve 50+ technical support tickets',
       'Managed SAP data in Excel, utilizing advanced VLOOKUP functions and pivot tables to validate and clean data used for financial forecasting models'
    ],
    skills:["Microsoft Excel", "Microsoft SharePoint", "Micosoft Access", "SAP", "Project Management", "Technical Support"]

  },
];

const Experience = () => {
    const [activeExperience, setActiveExperience] = useState(0); 
    const [isHovered, setIsHovered] = useState(false);
  
   
    const handleMouseEvent = (index, eventType) => {
      if (eventType === 'enter') {
        setActiveExperience(index);
        setIsHovered(true);
      } else if (eventType === 'leave' && !isHovered) {
        setActiveExperience(0);
      }
    };
  
    
    const handleDetailsMouseEvent = (eventType) => {
      if (eventType === 'enter') {
        setIsHovered(true);
      } else if (eventType === 'leave') {
        setIsHovered(false);
        setActiveExperience(0);
      }
    };


  return (
    <div className="exp-container">
        <div className="exp-header">
          <div className="header-icon">
            <img src={brimix}></img>
          </div>
          <h2 className="header-title">Experience</h2>
        </div>

        <div className="progress-container">
        {/* Progress Bar */}
        <div className="progress-bar">
            {experiences.map((experience, index) => (
            <div
                key={index}
                className={`progress-segment ${activeExperience === index ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEvent(index,'enter')}
                onMouseLeave={() => handleMouseEvent(index, 'leave')}
            >
                <span className="time-marker">{experience.time}</span>
                <div className="circle"></div>
            </div>
            ))}
        </div>

        {/* Experience Details */}
        {activeExperience !== null && (
            <div 
                className="experience-details" 
                onMouseEnter={() => handleDetailsMouseEvent('enter')}
                onMouseLeave={() => handleDetailsMouseEvent('leave')}
            >
            <h2>{experiences[activeExperience].title}</h2>
            <h3>{experiences[activeExperience].company}</h3>
            <p>{experiences[activeExperience].duration}</p>
            <ul style={{margin: "10px", marginBottom: "none"}}>
                {experiences[activeExperience].bullets.map((bullet, idx) => (
                <li key={idx} className="bullet">{bullet}</li>
                ))}
            </ul>

            {
                experiences[activeExperience].skills ? 
                    <div className="tech-main-container">
                    {experiences[activeExperience].skills.map((skill) => (
                        <div className="tech-container">
                            <p>{skill}</p>   
                        </div>

                    ))}
                    </div>
                
                :
                <div></div>

            }
            </div>
        )}
        </div>
    </div>

  );
};

export default Experience;

