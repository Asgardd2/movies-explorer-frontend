import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <div className="film">
        <img className="film__poster" src={props.poster} />
        <div className="film__block">
            <h2 className="film__name">{props.name}</h2>

            {props.type === 'saved' ? ( 
              <>
              <button
              aria-label="Like"
              type="button"
              className="film__cross"
              ></button>
              </>

            ) : (
            <> 
              <button
              aria-label="Like"
              type="button"
              className="film__heart"
              ></button>
            </>
            )
            }

          
        </div>
        <p className="film__duration">
            {props.duration}
        </p>
    </div>
  );
}

export default MoviesCard;
