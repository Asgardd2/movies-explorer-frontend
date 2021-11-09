import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function footer(props) {
    return (
        <section className="footer">
            <p className="footer__descr">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__main">
                <p className="footer__year">Ⓒ 2020</p>
                <ul className="footer__sites">
                    <li className="footer__site">
                        <a className="footer__link" href="#">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__site">
                        <a className="footer__link" href="#">Github</a>
                    </li>
                    <li className="footer__site">
                        <a className="footer__link" href="#">Facebook</a>
                    </li>
                </ul>
            </div>
        </section>
    ); 
  }

export default footer;

  