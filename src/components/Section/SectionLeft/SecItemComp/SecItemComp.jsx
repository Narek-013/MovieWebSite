import { useContext } from "react";
import { ItemCard } from "../../../../context/newContext";
import ComentComp from "../comentComp/ComentComp";

const SecItemComp = () => {

    const { popularMovie, handleClick } = useContext(ItemCard);
    

    return (
      <div className="movieCardBlock">
        {popularMovie?.map((el) => {
          return (
            <div key={el.id} className="movieCards">
              <img
                onClick={() => handleClick(el)}
                src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                alt="#"
              />
              <p onClick={() => handleClick(el)} className="clickName">{el.original_title}</p>
            </div>
          );
        })}
        <div className="hst"></div>
        <div className="hstt"></div>
      </div>
    );
}

export default SecItemComp;
