import MoviesCard from "../MoviesCard/MoviesCard";
import Film1 from "../../images/film-1.png";
import Film2 from "../../images/film-2.png";
import Film3 from "../../images/film-3.png";
import Film4 from "../../images/film-4.png";
import Film5 from "../../images/film-5.png";
import Film6 from "../../images/film-6.png";
import Film7 from "../../images/film-7.png";
import Film8 from "../../images/film-8.png";
import Film9 from "../../images/film-9.png";
import Film10 from "../../images/film-10.png";
import Film11 from "../../images/film-11.png";
import Film12 from "../../images/film-12.png";


import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className="moviesCardList">
     
      {props.type === 'saved' ? (
         <div className="moviesCardList__films">
           <MoviesCard
           poster={Film1}
           name="33 слова о дизайне"
           duration="1ч 47м"
           type={props.type}
           />
          
           <MoviesCard
           poster={Film2}
           name="Киноальманах «100 лет дизайна»"
           duration="1ч 47м"
           type={props.type}
           />
           
             <MoviesCard
           poster={Film3}
           name="В погоне за Бенкси"
           duration="1ч 42м"
           type={props.type}
           />   
           </div>
            ) : (
              <div className="moviesCardList__films">
        <MoviesCard
           poster={Film1}
           name="33 слова о дизайне"
           duration="1ч 47м"/>

        <MoviesCard
           poster={Film2}
           name="Киноальманах «100 лет дизайна»"
           duration="1ч 47м"/>
           
             <MoviesCard
           poster={Film3}
           name="В погоне за Бенкси"
           duration="1ч 42м"/>

             <MoviesCard
           poster={Film4}
           name="Баския: Взрыв реальности"
           duration="1ч 21м"/>

             <MoviesCard
           poster={Film5}
           name="Бег это свобода"
           duration="1ч 44м"/>

             <MoviesCard
           poster={Film6}
           name="Книготорговцы"
           duration="1ч 37м"/>

             <MoviesCard
           poster={Film7}
           name="Когда я думаю о Германии ночью"
           duration="1ч 56м"/>

             <MoviesCard
           poster={Film8}
           name="Gimme Danger: История Игги и The Stooge..."
           duration="1ч 59м"/>

<MoviesCard
           poster={Film9}
           name="Дженис: Маленькая девочка грустит"
           duration="1ч 42м"/>

             <MoviesCard
           poster={Film10}
           name="Соберись перед прыжком"
           duration="1ч 10м"/>

<MoviesCard
           poster={Film11}
           name="Пи Джей Харви: A dog called money"
           duration="1ч 4м"/>

             <MoviesCard
           poster={Film12}
           name="По волнам: Искусство звука в кино"
           duration="1ч 7м"/>
            </div>
            )}
          <div className="moviesCardList__more">
           <button className="moviesCardList__button">Ещё</button>
           </div>

    </section>
    
  );
}

export default MoviesCardList;
