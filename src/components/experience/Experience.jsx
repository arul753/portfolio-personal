import React from "react";
import "./experience.css";
import css3 from '../../assets/css3.png'
import html from '../../assets/html-5.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import bs from '../../assets/bootstrap.png'
import node from '../../assets/node.jpg'
import premiere from '../../assets/adobepremiere.png'
import ilustrator from '../../assets/adobeilustrator.png'
import jurnal from '../../assets/jurnalmekari.png'
import dataentry from '../../assets/dataentry.png'
import multimedia from '../../assets/fotovideo.png'
import mysql from '../../assets/mysql.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Web Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} className="experience_details-icon" alt="html"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={css3} className="experience_details-icon" alt="css"/>
              <div>
               
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js"/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">intermediate </small>
              </div>
            </article>
            <article className="experience_details">
              <img src={react} className="experience_details-icon" alt="react"/>
              <div>                
                <h4>REACT</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={bs} className="experience_details-icon" alt="bs"/>
              <div>           
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={mysql} className="experience_details-icon" alt="python"/>
              <div>
                <h4>Mysql</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={node} className="experience_details-icon" alt="node"/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          
          <h3>Other Fields</h3>
          <div className="experience_content">

            <article className="experience_details">
              <img src={premiere} className="experience_details-icon" alt="premiere"/>
              <div>
                <h4>Premiere</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={ilustrator} className="experience_details-icon" alt="ilustrator"/>
              <div>
                <h4>Ilustrator</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={jurnal} className="experience_details-icon" alt="premiere"/>
              <div>
                <h4>Jurnal Mekari</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={dataentry} className="experience_details-icon" alt="premiere"/>
              <div>
                <h4>Data Entry</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={multimedia} className="experience_details-icon" alt="multimedia"/>
              <div>
                <h4>Foto & Video</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
