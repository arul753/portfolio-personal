import React from "react";
import "./about.css";
import Me from "../../assets/pov-2.png";
import { FaAward, FaCertificate, FaFolder} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div> 
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>experience in all fields</h5>
              <small>6+ Years Working</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>10+</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>9+ projects completed</small>
            </article>
          </div>
          <p>Nama saya Bahrul Anwar, saya tinggal di daerah Jakarta Selatan, fashion saya saat ini sebagai Junior Web Developer, aktifitas keseharian saya adalah membuat dan mengembangkan aplikasi berbasis website, Saya memiliki karakter yang disiplin dan mudah bergaul, saya juga bisa bekerja secara independen maupun bekerjasama dengan tim hingga tuntas.
            <br />
            <br />
            Bukan hanya bidang programming saja, saya juga berpengalaman di bidang, Data Entry, Photographer, Videographer, dan Content Creator.
            Saya juga memiliki bakat di editing.
          </p>
          <a href="#project" className="btn btn-primary"> See my projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;
