import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter,FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
      <div className='header_socials'>
          <a href="https://www.linkedin.com/in/bahrul-anwar-644658176/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/arul753" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://twitter.com/Bhrlanwar" target="_blank" rel="noreferrer"><FaTwitter /></a>
           <a href="https://www.instagram.com/bhrlanwar/" target="_blank" rel="noreferrer"><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials