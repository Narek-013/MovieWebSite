
import { Link, useLocation } from "react-router-dom";
import FilmMovieTop from "./filmMovieTop/filmMovieTop";
import FilmMovieBottom from "./fimMovieBottom/FilmMovieBottom";
import FilmVideoComp from "./filmVideoComp/FilmVideoComp";

import "./filmMovieComp.css";
import BottomFilm from "./bottomFilm/BottomFilm";
import ComComp from "./CommentComp/ComComp";

const FilmMovieComp = () => {

    const {state} =  useLocation()

  
    return (
      <div  className="filmMovieComp">
        <div className="kinoGoTop">
          <p>
            Киного - kinogo.inc: {state.original_title} смотреть онлайн
            бесплатно
          </p>
        </div>
        <div className="kinoGoBottom">
          <p>
            {state.original_title} ({state.release_date})
          </p>
        </div>
        <FilmMovieTop state={state}/>
        <FilmMovieBottom state={state}/>
        <FilmVideoComp state={state}/>
        <BottomFilm/>
        <ComComp/>
      </div>
    );
}

export default FilmMovieComp;
