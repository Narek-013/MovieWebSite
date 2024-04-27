
import { useContext } from 'react';
import { ItemCard } from '../../../context/newContext';
import './bottomFilm.css';

const BottomFilm = () => {

    const {movie,handleClick} = useContext(ItemCard)

    return (
      <div className="bottomFilm">
        <p>Похожие материалы:</p>
        <div className="bottomFilms">
          {movie.map((el) => {
            return (
              <div key={el.id} className="movieItems">
                <img
                  onClick={() => handleClick(el)}
                  src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                  alt="#"
                />
                <p onClick={() => handleClick(el)} className="namess">{el.original_title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default BottomFilm;
