import React from 'react'
import './Portfolio.css'
import portfolioPhoto from "../../images/portfolio-photo.png";
import porfolioLink from "../../images/portfolio-project-link.svg";
import { Link } from 'react-router-dom';

function portfolio(props) {
    return (
        <section className="portfolio">
            
     
            <h3 className="portfolio__subtitle">Портфолио</h3>
            <ul className="portfolio__projects">
                <li className="portfolio__project">
                    <p className="portfolio__project-name">Статичный сайт</p> 
                    <a className="portfolio__project-link" href="https://asgardd2.github.io/mesto">
                        <img alt="Ссылка на сторонний проект" src={porfolioLink} className="portfolio__project-link-img"></img>
                    </a>
                    </li>
                <li className="portfolio__project">
                <p className="portfolio__project-name">Адаптивный сайт</p> 
                <a className="portfolio__project-link" href="https://asgardd2.github.io/russian-travel">
                <img alt="Ссылка на сторонний проект" src={porfolioLink} className="portfolio__project-link-img"></img>
                </a>
                </li>
                
                <li className="portfolio__project">
                <p className="portfolio__project-name">Одностраничное приложение</p> 
                <a className="portfolio__project-link" href="https://mesto-aav.nomoredomains.club">
                <img alt="Ссылка на сторонний проект" src={porfolioLink} className="portfolio__project-link-img"></img>
                </a>
                </li>
            </ul>
         
        </section>
        

    ); 
  }

export default portfolio;

  
