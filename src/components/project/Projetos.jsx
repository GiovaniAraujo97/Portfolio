import React, { useState } from 'react';
import './project.css'; // Seus estilos 
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';


function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Tela de Login - Projeto de Prática',
      description: 'Este projeto consiste em uma tela de login criada para praticar o uso de HTML, CSS e JavaScript. O design é simples e funcional, com ênfase na organização semântica do HTML, estilização com CSS para um layout limpo e moderno, e validação básica dos campos de login usando JavaScript. A tela é responsiva, adaptando-se bem a diferentes resoluções.',
      imageUrl: project1,
    },
    {
      id: 2,
      title: 'Tela de Pagamento - Projeto de Prática',
      description: 'Este projeto é uma tela de pagamento criada para praticar HTML, CSS e JavaScript. O design prioriza simplicidade e clareza, com campos para informações de pagamento, como número do cartão, validade e código de segurança. A interface é responsiva e estilizada com CSS, enquanto o JavaScript valida os dados inseridos em tempo real.',
      imageUrl: project2,
    },
    {
      id: 3,
      title: 'Relógio Digital Online - Projeto de Prática',
      description: 'EsEste projeto consiste em um relógio digital online criado para praticar HTML, CSS e JavaScript. O objetivo foi desenvolver uma interface simples e funcional que exibisse a hora atual em tempo real.',
      imageUrl: project3,
    },
    {
      id: 4,
      title: 'Cardápio Digital Pastelaria - React e Tailwind',
      description: ' Este projeto é um cardápio digital interativo para uma pastelaria, desenvolvido com React e Tailwind CSS. O design é simples e atraente, proporcionando uma visualização clara e organizada dos itens do cardápio, além de ser responsivo para diferentes dispositivos.',
      imageUrl: project4,
    },
    {
      id: 5,
      title: 'Card 3D Loja de Tênis Nike - Projeto com NavillaJS',
      description: 'Este projeto é um cardápio digital interativo para uma pastelaria, desenvolvido com React e Tailwind CSS. O design é simples e claro, com React gerenciando interações dinâmicas e Tailwind CSS garantindo estilização responsiva.',
      imageUrl: project5,
    },
  ];

  // Estado para controlar o índice do projeto atual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para navegar para o próximo projeto
  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para navegar para o projeto anterior
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className='project' id='project'>
      <div className="projects-carousel">
        <button className="carousel-button left" onClick={prevProject}>
          &lt;
        </button>

        <div className="project-slide">
          <div className="project-image">
            <img src={projects[currentIndex].imageUrl} alt={projects[currentIndex].title} />
          </div>
          <div className="project-description">
            <h2>{projects[currentIndex].title}</h2>
            <p>{projects[currentIndex].description}</p>
          </div>
        </div>

        <button className="carousel-button right" onClick={nextProject}>
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Projects;
