import { useContext, useRef } from 'react';
import { ItemCard } from '../../context/newContext';
import { Link, NavLink } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './main.css';

const Main = () => {

  const { movie, handleClick } = useContext(ItemCard);
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };



    return (
      <div className="main container">
        <div className="bcImg"></div>
        <div className="filmTypeBlocks">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/newFilm">Новинки</NavLink>
          <NavLink to="/serial">Сериалы</NavLink>
          <NavLink to="*">Стол заказов</NavLink>
        </div>
          <Carousel className="movieSlider" responsive={responsive}>
            {movie.map((el) => {
              return (
                <div key={el.id} className="movieItem">
                  <img
                    onClick={() => handleClick(el)}
                    src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                    alt="#"
                  />
                </div>
              );
            })}
          </Carousel>
      </div>
    );
}

export default Main;
