import React from 'react';
import Header from './components/header';
import About from './components/home';
import Home from './components/about';  // Assuming 'Home' is the 'MoreAbout' page
import Portfolio from './components/portfolio';
import Education from './components/education';
import Contact from './components/contact';
import './styles.css';  // For custom styling (if needed)

function App() {
  return (
    <div>
      <Header />
      <About />  {/* About Section */}
      <Home /> {/* The Header will stay on top */}
      <Portfolio />  {/* Portfolio Section */}
      <Education />  {/* Education Section */}
      <Contact />  {/* Contact Section */}
    </div>
  );
}

export default App;
