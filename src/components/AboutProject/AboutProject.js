import React from 'react'
import './AboutProject.css'
import { Link } from 'react-router-dom';

function aboutProject(props) {
    return (
      <section className="aboutProject">
      
        <h2 className="aboutProject__title">О проекте</h2>
        <ul className="aboutProject__table">
          <li className="aboutProject__descr_type_title">
            Дипломный проект включал 5 этапов
          </li>
          <li className="aboutProject__descr_type_title aboutProject__descr_mobile_second-title">
            На выполнение диплома ушло 5 недель
          </li>
          <li className="aboutProject__descr aboutProject__descr_mobile_second-row">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </li>
          <li className="aboutProject__descr">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </li>
        </ul>

        <ul className="aboutProject__time ">
          <li className="aboutProject__timeline aboutProject__timeline_type_backend aboutProject__timeline_color_black">1 неделя</li>
          <li className="aboutProject__timeline aboutProject__timeline_type_ui aboutProject__timeline_color_gray">4 недели</li>
          <li className="aboutProject__timeline aboutProject__timeline_type_backend ">Back-end</li>
          <li className="aboutProject__timeline aboutProject__timeline_type_ui">Front-end</li>
        </ul>

      </section>
    ); 
  }

export default aboutProject;

  
           

             /*
        /*
        
        */
             