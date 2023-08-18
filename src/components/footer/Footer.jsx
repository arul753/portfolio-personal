/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaAngellist, FaTwitter, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>My Resume</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>        
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href=""><FaLinkedin /></a>
        <a href="https://www.linkedin.com/in/bahrul-anwar-644658176/"><FaAngellist /></a>
        <a href="https://twitter.com/Bhrlanwar"><FaTwitter /></a>
        <a href="https://github.com/arul753"><FaGithub /></a>        
        <a href="https://www.instagram.com/bhrlanwar/"><FaInstagram /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; BahrulAnwar Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer