import { useContext } from "react";
import { ItemCard } from "../../../context/newContext";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import reting from "../../../images/reting.png";
import date from "../../../images/date.png";
import "./sectionRight.css";

const SectionRight = () => {

  const { movie, handleClick, popularMovie ,serial } = useContext(ItemCard);


  const {pathname} = useLocation()
 
  const controlLocation = () => {
    if(pathname === '/') return movie
    if(pathname === '/newFilm') return popularMovie
    if(pathname === '/serial') return serial
  }

  return (
    <div className="sectionRight">
      <div className="kinoGO">
        <div className="kinoGoTop">
          <Link>Киного - kinogo.inc</Link>
        </div>
        <div className="kinoGoBottom">
          <label htmlFor="select">Сортировка:</label>
          <select id="select">
            <option value="по умолчанию" key="">
              по умолчанию
            </option>
            <option>das</option>
          </select>
          <select id="select">
            <option value="по умолчанию" key="">
              Все жанры
            </option>
            <option>das</option>
          </select>
          <select id="select">
            <option value="по умолчанию" key="">
              Все года
            </option>
            <option>das</option>
          </select>
          <select id="select">
            <option value="по умолчанию" key="">
              Все страны
            </option>
            <option>das</option>
          </select>
          <button>&#10060;</button>
        </div>
        {controlLocation()?.map((el) => {
          return (
            <div key={el.id} className="movieCard">
              <div className="topCard">
                <Link>
                  {el.original_title} (<span>{el.release_date}</span>)
                </Link>
                <img src={reting} alt="#" />
              </div>
              <div className="centerCard">
                <img onClick={() => handleClick(el)} src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="#"/>
                <div className="infoCard">
                 <p>Date : {el.release_date}</p>
                 <p>popoularity : <span>{el.popularity}</span></p>
                 <p>language : <span>{el.original_language}</span></p>
                 <p>{el.overview}</p>
                </div>
              </div>
              <div className="bottomCard">
                <button onClick={() => handleClick(el)}>смотреть онлайн</button>
                <img src={date} alt="#" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionRight;
