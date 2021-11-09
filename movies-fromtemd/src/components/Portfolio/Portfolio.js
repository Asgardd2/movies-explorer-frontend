import React from 'react'
import './Portfolio.css'
import portfolioPhoto from "../../images/portfolio-photo.png";
import porfolioLink from "../../images/portfolio-project-link.svg";
import { Link } from 'react-router-dom';

function portfolio(props) {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Студент</h2>
            <div className="portfolio__main">
                <div className="portfolio__descr">
                <p className="portfolio__name">Виталий</p>
                <p className="portfolio__profession">Фронтенд-разработчик, 30 лет</p>
                <p className="portfolio__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <ul className="portfolio__sites">
                    <li className="portfolio__site">
                        <a className="portfolio__link" href="#">Facebook</a>
                    </li>
                    <li className="portfolio__site">
                    <a className="portfolio__link" href="#">Github</a>
                        
                    </li>
                </ul>

                </div>
                <img src={portfolioPhoto} className="portfolio__photo"></img>
            </div>
     
            <h3 className="portfolio__subtitle">Портфолио</h3>
            <ul className="portfolio__projects">
                <li className="portfolio__project">
                    <p className="portfolio__project-name">Статичный сайт</p> 
                    <a className="portfolio__project-link" href="#">
                        <img src={porfolioLink} className="portfolio__project-link-img"></img>
                    </a>
                    </li>
                <li className="portfolio__project">
                <p className="portfolio__project-name">Адаптивный сайт</p> 
                <a className="portfolio__project-link" href="#">
                <img src={porfolioLink} className="portfolio__project-link-img"></img>
                </a>
                </li>
                
                <li className="portfolio__project">
                <p className="portfolio__project-name">Одностраничное приложение</p> 
                <a className="portfolio__project-link" href="#">
                <img src={porfolioLink} className="portfolio__project-link-img"></img>
                </a>
                </li>
            </ul>
         
        </section>
        

    ); 
  }

export default portfolio;

  
