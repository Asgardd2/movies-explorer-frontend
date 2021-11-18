import Searchform from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import './SavedMovies.css';

function SavedMovies() {
  return (
    <main className="savedMovies">
    <Searchform/>
    <MoviesCardList
        type="saved"
        />
    </main>
  );
}

export default SavedMovies;
