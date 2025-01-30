import React from 'react';
import '../styles.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <h1>Welcome to My Portfolio</h1>
        <div className="summary">
          <h2>About Me</h2>
          <p>
            Passionate software developer with expertise in full-stack web and mobile app development. 
            Proficient in multiple programming languages,frameworks and communication , with a keen interest in UI/UX design.
          </p>
        </div>

        <div className="skills">
          <h2>Technical Skills</h2>

          <div className="skills-container">
            <div className="skills-box">
              <h3>Programming Languages:</h3>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>SQL (MySQL, MSSQL)</li>
              </ul>
            </div>

            <div className="skills-box">
              <h3>Developer Tools:</h3>
              <ul>
                <li>VS Code</li>
                <li>Code::Blocks</li>
                <li>Android Studio</li>
                <li>Canva</li>
                <li>Eclipse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
