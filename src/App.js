import React from 'react';
import './App.css';
import Header from './components/Header'
import Subtitle from './components/Subtitle'

function App() {
  return (
    <div className="App">
      <Header />      
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
            <Subtitle titulo="Acerca de mi" />
            <p>
              Soy una persona apasionada por la tecnología que le gusta aprender
              nuevas cosas cada día para poder ponerlas en práctica en proyectos
              personales o dentro del trabajo. bla bla bla...
          </p>
          </div>
          <div className="Skills">
            <Subtitle titulo="Habilidades" />
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
