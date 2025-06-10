import "./Projects.css"; 
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VideocamIcon from '@mui/icons-material/Videocam';
import tophits from "./assets/TOP HITS.png"



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Projects = ({ projectsList }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };



  return (
    <div className="projects-container">
      <div className="projects-header">
        <div className="header-icon">
          <img src={tophits} alt="Portfolio icon" />
        </div>
        <h2 className="header-title">Portfolio</h2>
      </div>

      <div className="project-list">
        {projectsList.map((project) => (
          <div key={project.id} className="project-item" onClick={() => handleOpen(project)}>
            <img src={project.cover} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-artist">{project.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box className="modal-box">
            <div className="modal-header">
                <div className="modal-icon">
                    <img src={selectedProject.cover}></img>
                </div>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <a style={{ color:'white'}} href={selectedProject.link} target="_blank" ><OpenInNewIcon/></a>
                {
                  selectedProject.video_link &&
                  <a style={{marginLeft: '10px', color:'white', }} href={selectedProject.video_link} target="_blank" ><VideocamIcon/></a>

                }
            </div>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              {selectedProject.description}
            </Typography>
            {
                selectedProject.tech ? 
                    <div className="tech-main-container">
                    {selectedProject.tech.map((tech) => (
                        <div className="tech-container">
                            <p>{tech}</p>   
                        </div>

                    ))}
                    </div>
                
                :
                <div></div>

            }
            <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
