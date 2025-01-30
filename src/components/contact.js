import React from 'react';
import "../styles.css";

// Import images from the src/assets folder
import githubIcon from '../assets/github-icon.png';
import instagramIcon from '../assets/instagram-icon.png';
import youtubeIcon from '../assets/youtube-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import gmailIcon from '../assets/gmail-icon.png';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/LAHARISP" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="https://www.instagram.com/_charm.with.art_" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="https://www.youtube.com/@laharisp" target="_blank" rel="noopener noreferrer">
        <img src={youtubeIcon} alt="YouTube" />
      </a>
      <a href="https://www.linkedin.com/in/lahari-s-p-b9024527b" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="mailto:laharisp6@gmail.com">
        <img src={gmailIcon} alt="Gmail" />
      </a>
      <p>by @laharisp</p>
    </footer>
  );
}

export default Footer;
