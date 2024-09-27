import './Swiper.css'; 
import { useEffect, useRef, useState, useCallback, Fragment } from "react";
import { register } from "swiper/element/bundle";

import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";

import EmailIcon from '@mui/icons-material/Email';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import useMediaQuery from '@mui/material/useMediaQuery';



//importing images 
import profilePic from "./assets/profile-pic.png";
import pythonLogo from "./assets/python.svg";
import reactLogo from "./assets/react-logo.png";
import htmlCSS from "./assets/html-css.png";
import sqlLogo from "./assets/sql-logo.png";
import awsLogo from "./assets/aws-logo.webp";
import azureLogo from "./assets/azure-logo.png";
import gcpLogo from "./assets/gcp-logo.png";
import figmaLogo from "./assets/figma-logo.png";
import agileLogo from "./assets/agile-logo.png";
import dovetailLogo from "./assets/dovetail-logo.png";
import jiraLogo from "./assets/jira-logo.svg";

import cleanifyLogo from "./assets/cleanify-logo.png";
import graze from "./assets/Graze.png";
import committo from "./assets/Committo.png";
import radixLogo from "./assets/radix-logo.png";
import thisisa from "./assets/thisisa.png";

import thisisbri from "./assets/thisisbri.png"
import thisisapaper from "./assets/TIA-paper.pdf";
import grazedeck from "./assets/Graze.pdf";

import linkedin from "./assets/linkedin.png";            
import gmail from "./assets/gmail.png";
import github from "./assets/GitHub-logo.png"; 
import medium from "./assets/medium.png";   

import tophits from "./assets/TOP HITS.png";
import brimix from "./assets/brimix.png";










//importing Material UI icons
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
register();


const Swiper = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [open, setOpen] = useState(false);


  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  function handlePageOnClick(index) {
    console.log("ON CLICK");
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  }
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      on:{
        slideChange: function (current) {
          setActiveIndex(current.activeIndex);
        }
      },
      injectStyles: [
        `
          .swiper-button-next, .swiper-button-prev {
            display: none;
          }
          .swiper-pagination-bullet{
            display: none;

          }
          *{
            margin: none;
          }
      `,
      ],
    
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);




  useEffect(() => {
    const handlePagination = () => {
      console.log("QUEUE HANDLER");
      console.log(activeIndex);

  
        const pages = document.querySelectorAll('.page');
        console.log(pages);
  
        const nowPlayingContainer = document.getElementById('now-playing');
        console.log(nowPlayingContainer);
        const nowPlayingCurrent = nowPlayingContainer.querySelector('.page');
  
        const upNextContainer = document.getElementById('up-next');
  
        // Moving the active page div to the now playing parent div, removing previous now playing child and adding it back to Up Next
        pages.forEach(page => {
          const pageIndex = Number(page.getAttribute('pageindex'));
          if (pageIndex === activeIndex) {
            if (nowPlayingCurrent) {
              nowPlayingContainer.removeChild(nowPlayingCurrent);
              upNextContainer.appendChild(nowPlayingCurrent);
            }
            nowPlayingContainer.appendChild(page);
          }
        });
  
        // Maintaining the Up-Next order
        const upNextContainerElements = Array.from(upNextContainer.querySelectorAll('.page'));
        const upNextLength = upNextContainerElements.length;
        const sortedElements = [];
  
        for (let i = activeIndex; i <= upNextLength; i++) {
          if (i !== activeIndex) {
            let element = upNextContainerElements.find(el => Number(el.getAttribute('pageindex')) === i);
            if (element) {
              sortedElements.push(element);
            }
          }
  
          if (i === upNextLength && activeIndex !== 0) {
            for (let j = 0; j < activeIndex; j++) {
              if (j !== activeIndex) {
                let element = upNextContainerElements.find(el => Number(el.getAttribute('pageindex')) === j);
                if (element) {
                  sortedElements.push(element);
                }
              }
            }
          }
        }
        
        upNextContainer.replaceChildren(...sortedElements);
    };
  
    // Call the function on the initial render
    if(document.querySelector('.pagination')){
      handlePagination();
    }
    
    
  }, [activeIndex]);

  const queueContent = (
    <div class="pagination">
    <div class="queue">
    <h3 style={{color: "white"}}>Queue</h3>      
      
      <div id="now-playing"></div>

      <p>Up Next:</p>
        <div id="up-next">

          <div class="page" pageindex="0" onClick={() => handlePageOnClick(0)}>
            <div class="page-image-container">
              <img src={thisisbri}></img>
            </div>
            <p>About me</p>
          </div>

          <div class="page" pageindex="1" onClick={() => handlePageOnClick(1)} >
            <div class="page-image-container">
              <img src={brimix}></img>
            </div>
            <p>Experience</p>
          </div>

          <div class="page" pageindex="2" onClick={() => handlePageOnClick(2)}>
            <div class="page-image-container">
              <img src={tophits}></img>

            </div>
            <p>Portfolio</p>
          </div>
        </div>
    </div>
  </div>
  );


  const skills = [
    {name: "React Javascript" , image: reactLogo, type: "software"},
    {name: "HTML/CSS" , image: htmlCSS, type: "software"},
    {name: "Python" , image: pythonLogo, type: "software"},
    {name: "SQL" , image: sqlLogo, type: "software"},
    {name: "Amazon Web Services" , image: awsLogo, type: "cloud"},
    {name: "Microsoft Azure" , image: azureLogo, type: "cloud"},
    {name: "Google Cloud Platform" , image: gcpLogo, type: "cloud"},
    {name: "Figma" , image: figmaLogo, type: "software"},
    {name: "Scrum" , image: agileLogo, type: "pm"},
    {name: "Dovetail" , image: dovetailLogo, type: "pm"},
    {name: "Jira" , image: jiraLogo, type: "pm"},
  ];

  const projectsList = [
    {
      id: 1,
      title: 'Cleanify',
      cover: cleanifyLogo,
      link: 'https://briiking4.github.io/cleanify/',
      caption: 'Web Application',
      description: (<>Cleanify offers an appropriate listening experience for all ages and audiences through providing tools to filter explicit music content.<span style={{marginTop:'15px', display: 'block' }}></span> 
      <span style={{marginTop:'15px', display: 'flex', fontWeight: 'bold', }}>Version 1</span>
      Developed a web app enabling users to create clean versions of explicit playlists, enhancing the experience for Spotify listeners in sensitive environments. <span style={{marginTop:'15px', display: 'block' }}></span>
      <span style={{marginTop:'15px', display: 'flex', fontWeight: 'bold'}}>Version 2 (coming soon) <a href="https://docs.google.com/presentation/d/1rKp72_P_QHRQrYnFaUPzYYvUS7sI7Vz0-m8rRafx_Aw/pub?start=false&loop=false&delayms=10000" target="_blank" style={{marginLeft:'15px'}}><OpenInNewIcon/></a></span>
      V2 utilizes Google’s Natural Language Processing to accurately identify mis-tagged explicit content through lyric sentiment analysis and moderation, empowering users to define their own standards of music appropriateness.
</>),
      tech: ["React", "Spotify API", "Google Natural Language AI", "GitHub", "Node", "Figma"]
      
    },
    {
      id: 2,
      title: 'Radix Dance Team Website',
      cover: radixLogo,
      link: 'https://radix-9544c.firebaseapp.com/',
      caption: 'Web Application',
      description: (<>
      <p style={{marginBottom:'15px'}}>Developed and designed full stack website for Loyola Marymount University's dance team, Radix, to grow the on campus dance community</p>
      <li>Increased dance event attendence by about 10%</li>
      <li>Increased dance team try-out attendence by about 20%</li>
      <li>Designed using Figma, coded using React, and built backend database using Google Firebase</li>
      
      </>),
      tech: ["React", "Youtube API", "Google Firebase", "Node", "Figma"]
      
    },
    {
      id: 3,
      title: 'Graze',
      cover: graze,
      link: grazedeck,
      caption: '1st place - Tech Stars Startup Competition',
      description: (<>
        <p style={{marginBottom: '15px'}}>Graze is a B2B food delivery app for high volume orders, specializing in customizing corporate office'</p>

        <li>Developed 1st place start-up business in 54 hours with team of 3</li>
        <li>In charge of market research and user validation - conducting surveys and holding focus group sessions</li>
        <li>Acted as design and technical lead, creating user journey wireframes and prototype using Figma</li>
      </>),
      tech: ["Figma", "User interviews", "Start-up"]    
    },
    {
      id: 4,
      title: 'Popular Media & the African American Experience',
      cover: thisisa,
      link: thisisapaper,
      caption: 'Undergraduate Media Research Symposium',
      description: (<>Presented media research at Loyola Marymount's Undergraduate Research Symposium. This paper highlights Black struggle in America through the work of the artist Donald Glover (Childish Gambino). One of the most impactful pieces of 2018, the music video for "This is America", addresses the Black experience through powerful metaphors and symbolism. By releasing the viral video on YouTube, Gambino demonstrated the power of social media to spark meaningful conversations about the contrast between popular media’s perception of Black culture and the realities of systematic violence and discrimination faced by African-Americans.</>) ,
      tech: ["Culture and social media research"]
 
    },
  ];

  function showSkills(list, type) {
    return (
      <div class="skills-section">
        {list.map(skill => skill.type === type ? (
          <div key={skill.name} class="skill-container">
            <img src={skill.image} alt={`${skill.name} logo`} />
            <p>{skill.name}</p>
          </div>
        ): null)}
      </div>
    );
  }

  

  

  return (
    <div class="main">
      <div class="swiper-pag">
        {/* SLIDES */}
        
        <swiper-container class="slides-main" ref={swiperRef} init="false"> 
          <swiper-slide class="slide">
            <div class="profile">
              <div class="prof-pic-container">
                <img src={profilePic} class="profile-pic"></img>
              </div>
              <div class="profile-info">  
                <h3 class="profile-name">Briana King</h3>    
                <h5 class="profile-position">Product Manager</h5>
                <div class="profile-sub-info">
                  <div class="school-container">
                    <SchoolIcon/> 
                    <div class="profile-row-details">
                      <p>Loyola Marymount University - Class of 2022</p>  
                      <p>B.S, Information Systems and Business Analytics</p>
                    </div>
                  </div>
                  <div class="profile-location">
                    <LocationOnIcon/>
                    <div class="profile-row-details">
                      <p>Los Angeles, CA</p>
                    </div>
                  </div>    
                  <div class="email">
                    <MailIcon/>
                    <div class="profile-row-details">
                      <p>brianaking626@gmail.com</p>
                    </div>
                    </div>  
                </div> 
              </div>
            </div>
            <div class="section">
              <h5 class="section-header">About the Artist</h5>
 
              <p>As a user-obsessed Product Manager, I harness a versatile blend of technical acumen and a passion for the intersection of technology and entertainment media. With a B.S. in Information Systems and Business Analytics from Loyola Marymount University, my journey began as a Software Engineering Intern and advanced to an Associate Product Manager at a global start-up solving cross-cloud data sharing. Proficient in data analytics, cloud management systems, and full-stack software development, I excel in dynamic and technical environments, adeptly solving intricate business challenges through a blend of precise attention to detail and creativity.</p>
              
              <h5 class="section-header section-two"> Discover On</h5>
              <div className="contacts">
                <a className="icon" href="https://www.linkedin.com/in/briana-king-147546172/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a className="icon" href="https://github.com/briiking4?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" />
                </a>
                <a className="icon" href="https://medium.com/@briananking" target="_blank" rel="noopener noreferrer">
                  <img src={medium} alt="Medium" />
                </a>
              </div>

            </div>

            {/* Skills section on about page. Hiding for now. */}

            {/* <div class="section">
              <h5 class="section-header">Skills</h5>  
              <div class="skills-main">
                <div class="skills-section-container">
                  <p>Programming & Design</p>
                  {showSkills(skills, "software")}
                </div>

                <div class="skills-section-container">
                  <p>Cloud Database</p>
                  {showSkills(skills, "cloud")}
                </div>
                <div class="skills-section-container">
                  <p>Product/Project Management</p>
                  {showSkills(skills, "pm")}
                </div>


              </div>
              

              
            </div>  */}
            
          </swiper-slide>

          <swiper-slide class="slide">   
            <Experience/>  
          </swiper-slide>
          <swiper-slide class="slide">
            <Projects projectsList={projectsList}/>

          </swiper-slide>
        </swiper-container>

        {/* SLIDE BAR PAGINATION */}
       

        {isMobile ? (
        <>
            {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} variant="temporary">
                {queueContent}
            </Drawer> */}
        </>
        ) : (
        queueContent
      )}
  
    
      </div>
        
        {/* NAVIGATION BOTTOM */}

      <div class="navigation">
        <SkipPreviousIcon class="prev-arrow" onClick={handlePrev}/>
        <PlayCircleOutlineIcon class="play" onClick={handleNext}/>
        <SkipNextIcon class="next-arrow" onClick={handleNext}/>
      </div>
    </div>
  );
};

export default Swiper;