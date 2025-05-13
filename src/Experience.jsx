import React, { useState } from 'react';
import './Experience.css'; 

import brimix from "./assets/brimix.png";

const experiences = [
  {
    time: '0:00',
    title: 'Associate Product Manager',
    company: 'Bobsled - Series A, cross-cloud data sharing start-up',
    duration: 'August 2022 - December 2023',
    bullets: [
      'Owned REST API from concept to launch, transforming a no-code solution into an API, advocating for the new developer audience in product decisions. Enabled Bobsled’s pivot to SaaS, securing CARTO as the first client and automating 11K+ data products',
      'Created a Postman workspace and guide to streamline API QA testing and onboarding for cross-functional teams with varying technical expertise, enhancing collaboration, enabling POC client demos, and reducing E2E testing time in half', 
      'Launched self-serve OpenAI API documentation based on market research and 10 usability tests, reducing user implementation time by 3 weeks, and enhancing client demos with personalized experience',  
      'Researched and collaborated with engineering to design two secure data access solutions for Azure integrations, enabling the launch of Azure as a Source. Partnered with Design to create a key rotation and service account management interface,expanding customer reach to 95% of Fortune 500 companies',
      'Conducted user interviews and analyzed activity data to discover patterns in repetitive data transfers, leading to the prioritization of a ’data products’ feature. Collaborated closely with design to develop and A/B test a centralized control plane for users to define and manage data products, eliminating redundant tasks',
      'Tailored Scrum practices for a small, fast-paced team with weekly releases. Created company-wide templates for user stories, acceptance criteria, and PRDs, boosting collaboration and cutting cycle times by 60% across 5+ projects for a 7-engineer team'
    ],
    skills:["REST API", "Microsoft Azure", "Google Cloud Platform", "GitHub", "User Interviews", "Scrum", "Dovetail", "Figma"]
  },
  {
    time: '1:00',
    title: 'Graduate Software Engineer',
    company: 'Bobsled - Series A, cross-cloud data sharing start-up',
    duration: 'June 2022 - August 2022',
    bullets: [
      'Led a team of 3 engineers to launch Azure as a Destination, solving critical Azure AD limitations by balancing internal, client, and end-user security requirements. Collaborated with design to create an intuitive UX for client and end-user access management, which empowered customers to expand their reach to a large market of data consumers on Azure',   
      'Presented a comprehensive plan to the CEO for a technical product documentation strategy, launching a user-facing website with 100+ articles (4.5/5 avg. satisfaction) and a cross-functional review, release, and feedback system',
      'Translated Figma wireframes into actionable user stories and wrote detailed engineering tickets. Led weekly sprint planning, presenting to senior leaders and driving feature execution in the absence of a dedicated product team',
      'Developed front-end components using Remix (TS) and Material UI; collaborated with CTO on weekly software releases, diagnosing test failures and reducing average failures by 40% through Cypress test improvements'
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

