import React from 'react';
import "../styles.css";

function Accomplishments() {
  return (
    <>
     
      <section id="accomplishments" className="accomplishments-section">
        <h2>Accomplishments</h2>
        <div className="accomplishments-container">
          <div className="accomplishment-item">
            <a href="#" className="accomplishment-link">Achievement 1</a>
            <p>Description for achievement 1.</p>
          </div>
          <div className="accomplishment-item">
            <a href="#" className="accomplishment-link">Achievement 2</a>
            <p>Description for achievement 2.</p>
          </div>
          <div className="accomplishment-item">
            <a href="#" className="accomplishment-link">Achievement 3</a>
            <p>Description for achievement 3.</p>
          </div>
          <div className="accomplishment-item">
            <a href="#" className="accomplishment-link">Achievement 4</a>
            <p>Description for achievement 4.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accomplishments;
