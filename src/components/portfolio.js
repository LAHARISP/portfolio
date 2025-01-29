import React from 'react';
import "../styles.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      
      <div className="portfolio-container">
        <div className="portfolio-item">
          <a href="#" className="portfolio-link">Project 1</a>
          <p>Project 1 description goes here.</p>
        </div>
        <div className="portfolio-item">
          <a href="#" className="portfolio-link">Project 2</a>
          <p>Project 2 description goes here.</p>
        </div>
        <div className="portfolio-item">
          <a href="#" className="portfolio-link">Project 3</a>
          <p>Project 3 description goes here.</p>
        </div>
        <div className="portfolio-item">
          <a href="#" className="portfolio-link">Project 4</a>
          <p>Project 4 description goes here.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
