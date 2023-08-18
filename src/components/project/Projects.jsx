import React from "react";
import "./project.css";
import IMG1 from '../../assets/BMI.png';
import IMG2 from '../../assets/TPAportfolio.png';
import IMG3 from '../../assets/Linktree.png';
import IMG4 from '../../assets/TPAassyifa.png';
import IMG5 from '../../assets/PSB.png';
import IMG6 from '../../assets/ModernLogin.png';


const projects = [{
  id: 1,
  image: IMG1,
  title: 'Kalkulator BMI project - RevoU project',
  github: 'https://github.com/arul753/revoU_day1',
  demo:'https://revou-fundamental-course.github.io/10-jul-23-arul753/'
},
 {
  id: 2,
  image: IMG2,
  title: 'Portfolio TPA Madrasah-Tugas Akhir single-project',
  github: 'https://github.com/arul753/Portofolio-Tugas',
  demo:'https://tpaassyifa.netlify.app'
  }, 
 {
  id: 3,
  image: IMG3,
  title: 'Linktree Rempah Kita - single-project',
  github: 'https://github.com/arul753/Rempah-Kita',
   demo: 'https://rempah-kita.netlify.app/'
  },
 {
  id: 4,
  image: IMG4,
  title: 'Project tugas akhir - TPA Assyifa part 2',
  github: 'https://github.com/arul753?tab=repositories',
  demo:'https://tpa-assyifa.netlify.app/'
  },
 {
  id: 5,
  image: IMG5,
  title: 'PSB santri baru - Project tugas akhir - PHP',
  github: 'https://github.com/arul753/PSB-santri-TPA',
  demo:'https://cranky-cray-0feacf.netlify.app/'
  },
 {
  id: 6,
  image: IMG6,
  title: 'Modern Login-sass -single porject',
  github: 'https://github.com/arul753/modern-login',
  demo:'https://arul753.github.io/modern-login/'
},
]
const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
          <div className="project_item-image">
          <img src={image} alt={title} />
          </div>
              <h3>{title}</h3>
          <div className="project-item-cta">
                     <a
            href={github}
            className="btn"
          >
            Github
          </a>
          <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">
            Live Demo
          </a>
          </div> 
        </article>
          )
        })}               
      </div>
    </section>
  );
};

export default Projects;
