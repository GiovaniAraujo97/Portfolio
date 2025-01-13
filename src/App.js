import React from 'react';
import Home from './components/home/Home'; // Certifique-se que o arquivo é Home.js e não home.js
import Sobre from './components/sobre/Sobre'; // Certifique-se que o arquivo é Sobre.js e não sobre.js
import Project from './components/project/Projetos';
import 'boxicons/css/boxicons.min.css';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div>
      <Home />
      <Sobre />
      <Project />
      <Contact/>
    </div>
  );
}

export default App;
