import React from 'react'
import './AboutMe.css'
import aboutMePhoto from "../../images/portfolio-photo.png";

import { Link } from 'react-router-dom';

function aboutMe(props) {
    return (
        <section className="aboutMe">
            
            <h2 className="aboutMe__title">Студент</h2>
            <div className="aboutMe__main">
                <div className="aboutMe__descr">
                <p className="aboutMe__name">Виталий</p>
                <p className="aboutMe__profession">Фронтенд-разработчик, 30 лет</p>
                <p className="aboutMe__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <ul className="aboutMe__sites">
                    <li className="aboutMe__site">
                        <a className="aboutMe__link" href="https://www.facebook.com/">Facebook</a>
                    </li>
                    <li className="aboutMe__site">
                    <a className="aboutMe__link" href="https://github.com/">Github</a>
                        
                    </li>
                </ul>

                </div>
                <img alt="Портрет" src={aboutMePhoto} className="aboutMe__photo"></img>
            </div>
        </section>
        

    ); 
  }

export default aboutMe;

  



