import Searchform from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import './Movies.css';

function Movies() {
  return (
    <main className="movies">
    <Searchform/>
    <MoviesCardList/>
    </main>
  );
}

export default Movies;
