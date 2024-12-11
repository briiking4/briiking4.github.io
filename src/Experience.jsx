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
      'Led the ideation and launch of the critical REST API, driving strategic pivot to a software engineering target audience to enable SaaS market entry and securing a major deal with CARTO, automating 11,000+ data products',
      'Developed self-serve API documentation, reducing onboarding time by 3 weeks and streamlining Sales demos through automated POCs', 
      'Owned Azure products, following the Destination with Azure as a Source, securing 3 major deals that lead to the exceeding of acquisition OKRs. With 95% of Fortune 500 companies using Azure to store their data, this entry was crucial for Bobsled’s growth',  
      'Facilitated sprint planning and backlog grooming, reducing cycle times by 60% through improved task breakdowns and team collaboration',
      'Volunteered as a member of the internal team defining company values and culture'
    ],
    skills:["REST API", "Microsoft Azure", "Google Cloud Platform", "GitHub", "User Interviews", "Scrum", "Dovetail", "Figma"]
  },
  {
    time: '1:00',
    title: 'Graduate Software Engineering Intern',
    company: 'Bobsled - Series A, cross-cloud data sharing start-up',
    duration: 'June 2022 - October 2022',
    bullets: [
      'Led the ideation and launch of Azure as a data destination with a team of 3 engineers, securing one of the first early adopter deals and opening significant market opportunities',   
      'Developed a documentation website featuring over 100 technical articles, conducting extensive research and creating a framework inspired by the Diataxis model. Implemented a review, release, and feedback system that significantly improved user satisfaction and resource accessibility for the Solutions Engineering team',
      'Formulated a technical product documentation strategy, launching a website with 100+ articles, achieving an average 4/5 satisfaction score, a 3-minute reduction in sales call explanations, and an 80% drop in "easily resolvable issues"',
      'Collaborated closely with the CTO to streamline the weekly release process, troubleshooting bugs and conducting end-to-end user acceptance testing to ensure seamless and reliable deployments'
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

