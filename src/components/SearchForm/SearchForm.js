import React from 'react'
import './SearchForm.css'
import { Link } from 'react-router-dom';

function searchform(props) {
    return (
        <section className="searchform">
            <form
                name="search-movies"
                className="searchform__form"
             >
            <input id="search-text" minlength="2" maxlength="30" placeholder="Фильм" required="" type="text" class="searchform__input"></input>
            <button type="submit" className="search__button"></button>     
            </form>
            <div className="searchform__tumbler-area">
                <button className="searchform__tumbler searchform__tumbler_type_on"></button>
                <p className="searchform__tumbler-text">Короткометражки</p>

            </div>
        </section>


    ); 
  }

export default searchform;

  