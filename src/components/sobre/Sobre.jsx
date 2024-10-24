import React from "react";
import './sobre.css';

const Sobre = () => {
    return (
        <section className="sobre" id="sobre">
            <div className="sobre-content">
                <div className="sob">
                    <h3>Sobre</h3>
                    <p>
                    Desenvolvedor Junior com experiência comprovada em desenvolvimento web, 
                    buscando novas oportunidades para contribuir e crescer na área de tecnologia. Atualmente, 
                    estou cursando minha segunda graduação em Sistemas para Internet, o que tem aprofundado ainda mais meu conhecimento em tecnologias e práticas modernas de desenvolvimento. 
                    Tenho habilidades em HTML, CSS, JavaScript, PHP, Git, React, Tailwind e SQL, que aplico com foco em criar soluções eficientes e inovadoras. 
                    Estou em busca de novos desafios onde possa aplicar minhas habilidades e aprender continuamente.                    </p>
                </div>

                <div className="content-skills">
                    <h3>Habilidades</h3>
                    <div className="skills">
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">ReactJS</div>
                        <div className="skill">TypeScript</div>
                        <div className="skill">Tailwind</div>
                        <div className="skill">NodeJS</div>
                        <div className="skill">Figma</div>
                        <div className="skill">GitHub</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre;
