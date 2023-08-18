import React from "react";
import "./services.css";
import { FaCheckSquare } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>My Experience</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>Front-end Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I build front-end websites and mobile applications </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I optimize applications for maximum speed.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I collaborate with back-end developers and web designers to improve usability. </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Multimedia</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>fotografi & Videografi</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Editing menggunakan software, Premiere, ilustrator, capcut, inshot.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Photography Food and Wedding</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Can use figma software</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Determine the purpose of making the product and what the user wants</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Determining the location and position of predefined features and testing whether they will be sustainable</p>
            </li>
          </ul>
        </article>       
        <article className="services">
          <div className="service_head">
            <h3>Data Entry</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Recap company revenue</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Journaling transactions into Mekari Journal system</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Create bank e-statement graphs</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Recording, copying and reporting income tax 23, 21</p>
            </li>
          </ul>
        </article>       
      </div>
    </section>
  );
};

export default Services;
