import React from 'react'
import './Techs.css'
import { Link } from 'react-router-dom';

function techs(props) {
    return (
        <section className="tech">
            <h2 className="tech__title">Технологии</h2>
            <p className="tech__count">7 технологий</p>
            <p className="tech__descr">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="tech__list">
                <li className="tech__name">HTML</li>
                <li className="tech__name">CSS</li>
                <li className="tech__name">JS</li>
                <li className="tech__name">React</li>
                <li className="tech__name">Git</li>
                <li className="tech__name">Express.js</li>
                <li className="tech__name">mongoDB</li>
            </ul>
        </section>
        

    ); 
  }

export default techs;

  
