import React from 'react';
import "../styles.css";

function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>Bachelor of Engineering</h3>
          <p><strong>Dr. Ambedkar Institute of Technology, Bengaluru</strong></p>
          <p>Branch: Information Science and Engineering</p>
          <p>CGPA: 9.06 (2nd Year)</p>
          <p>Nov 2022 – Aug 2026</p>
        </div>

        <div className="education-item">
          <h3>Senior Secondary School</h3>
          <p><strong>HKS PU College, Hassan</strong></p>
          <p>Stream: PCMB</p>
          <p>Percentage: 94.6%</p>
          <p>Apr 2020 – Apr 2022</p>
        </div>

        <div className="education-item">
          <h3>Secondary School</h3>
          <p><strong>Kalpataru Central School, Tiptur (CBSE)</strong></p>
          <p>Percentage: 90%</p>
          <p>2010 – 2020</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
