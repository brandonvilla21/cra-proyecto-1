import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My First React App</h1>
      </header>
      <section className="Section">
        <div className="Personal-info">
          <div>
            <span className="Name">Brandon Villa</span>
            <span className="Work-title">Software Engineer</span>
          </div>
          <div>
            <ul className="Personal-info-list">
              <li><strong>Telefono:</strong> 3411361316</li>
              <li><strong>E-mail:</strong> brandon.villa@gmail.com</li>
              <li><strong>Website:</strong> brandonvilla.dev</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="Section">
        <div className="About-me">
          <div>
            <span className="Subtitle">Acerca de mi</span>
            <p>
              Soy una persona apasionada por la tecnología que le gusta aprender
              nuevas cosas cada día para poder ponerlas en práctica en proyectos
              personales o dentro del trabajo. bla bla bla...
          </p>
          </div>
          <div className="Skills">
            <span className="Subtitle">Skills</span>
            <ul className="Skills-list">
              <li><strong>HTML</strong></li>
              <li><strong>CSS</strong></li>
              <li><strong>JavaScript</strong></li>
              <li><strong>Node.js</strong></li>
              <li><strong>TypeScript</strong></li>
              <li><strong>Python</strong></li>
              <li><strong>Django</strong></li>
              <li><strong>React</strong></li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="Footer">
        <span>Created by Me</span>
      </footer>
    </div>
  );
}

export default App;
