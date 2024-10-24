import React from "react";
import "./container.css";

const Container = () => {
    return (
    <header>
        <section className="home" id="home">
            <div className="home-content">
                <h1>Olá, sou <br /></h1>
                <span className="name">Giovani Araujo<i>,</i></span>
                <h3 className="text-animation">
                Eu sou um <br/>
                <span></span>
                </h3>
                <p>
                Sou um desenvolvedor front-end dedicado, impulsionado por uma paixão pela tecnologia e sempre em busca de novas habilidades.
                </p>

                <div className="icons">
                    <a href="https://www.linkedin.com/in/giovani-araujo-786538222/"><i className='bx bxl-linkedin-square'></i></a>
                    <a href="https://github.com/GiovaniAraujo97"><i className='bx bxl-github'></i></a>
                    <a href="https://wa.me/5511958520419"><i className='bx bxl-whatsapp'></i></a>
                </div>


                <div className="btn-group">
                    <a href="#contact" className="btn">Contrate-me</a>
                    <a href="#contact" className="btn">Contato</a>
                </div>

            </div>
        </section>        
    </header>
    )
}

export default Container;