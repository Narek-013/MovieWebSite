import { useContext } from "react";
import { ItemCard } from "../../../../context/newContext";

const SectionLeftComp = ({ popularMovie }) => {
  

  return (
    <div className="fastMovie">
      <h3>Скоро в кино</h3>
      <div className="fastMovieCard">
        <div className="fastMIO">
          <img
            src={`https://image.tmdb.org/t/p/w500/${popularMovie[0]?.poster_path}`}
            alt="#"
          />
          <div className="item">
            <p className="popO">
              Title : <span>{popularMovie[0]?.original_title}</span>
            </p>
            <p className="pop">
              Popularity :<span>{popularMovie[0]?.popularity}</span>{" "}
            </p>
            <p>Date : {popularMovie[0]?.release_date}</p>
            <p className="pop">
              City : <span>{popularMovie[0]?.original_language}</span>
            </p>
          </div>
        </div>
        <div className="fastMIO">
          <img
            src={
              popularMovie &&
              `https://image.tmdb.org/t/p/w500/${popularMovie[1]?.poster_path}`
            }
            alt="#"
          />
          <div className="item">
            <p className="popO">
              Title : <span>{popularMovie[1]?.original_title}</span>
            </p>
            <p className="pop">
              Popularity :<span>{popularMovie[1]?.popularity}</span>{" "}
            </p>
            <p>Date : {popularMovie[1]?.release_date}</p>
            <p className="pop">
              City : <span>{popularMovie[1]?.original_language}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLeftComp;
