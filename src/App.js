// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showSkills, setShowSkills] = useState(false);
  const [showSchool, setShowSchool] = useState(false);
  const skills = ['JavaScript', 'HTML', 'CSS', 'React', 'SQL', 'PHP'];

  const handleSkillsClick = () => {
    setShowSkills(!showSkills);
  };

  const handleSchoolClick = () => {
    setShowSchool(!showSchool);
  };

  return (
    <div className="App">
      <header className="App-header">

        <h2>
          Kevin Bell
        </h2>
        <p>I am a student at Davis Technical College, studying Software Development. My goal is to become a full-stack developer.</p>
        <div className="button-container">
          <button onClick={handleSkillsClick}>
            {showSkills ? 'Hide Skills' : 'See Skills'}
          </button>
          <button onClick={handleSchoolClick}>
            {showSchool ? 'Hide School' : 'See School'}
          </button>
        </div>
        {showSkills && (
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )}
        {showSchool && (
          <div>
            <h3>Davis Technical College</h3>
            <img src="https://raw.githubusercontent.com/bell-kevin/about_me_web_app/main/dtc.jpg?token=GHSAT0AAAAAAB5FGJOEDEKDEXXP6XHOBN4CY7NU7CQ" alt="Davis Technical College" />
            <p>550 East 300 South</p>
            <p>Kaysville, Utah, United States of America 84037</p>
            <p>801-593-2500</p>
          </div>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
    </div>
  );
}

export default App;
