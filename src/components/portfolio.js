import React from 'react';
import "../styles.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Projects</h2>
      
      <div className="portfolio-container">
        <div className="portfolio-item">
          <a href="https://promodo.netlify.app/" className="portfolio-link">Pomodoro Stopwatch</a>
          <p> 
          Developed a productivity timer using HTML, CSS, and JavaScript, implementing the Pomodoro
          technique to boost focus and time management.<br/>
          Delivered an interactive and responsive interface with seamless session tracking</p>
        </div>
        <div className="portfolio-item">
          <a href="https://symphonious-zabaione-b043d5.netlify.app/" className="portfolio-link">Personal Resume Website</a>
          <p>Built a visually engaging personal portfolio website using HTML and CSS, optimized for both
          desktop and mobile devices.</p>
        </div>
        <div className="portfolio-item">
          <a href="https://github.com/arko-14/White-Hats" className="portfolio-link">Touchie Vision</a>
          <p>Developed a Braille translator for visually impaired individuals using Python and Arduino, combining
            hardware and software innovation.<br/>
            Designed algorithms for text-to-Braille conversion, improving accessibility and inclusivity.</p>
        </div>
        <div className="portfolio-item">
          <a href="#" className="portfolio-link"> Skincare-Haircare Product Suggestion Website</a>
          <p>Designed a personalized product recommendation platform using Next.js and MSQL, integrating
            user-specific data such as skin type, concerns, and price preferences.<br/>
            Enhanced database functionality for accurate and real-time product suggestions(yet to be deployed)</p>
          </div>
      </div>
    </section>
  );
}

export default Portfolio;
