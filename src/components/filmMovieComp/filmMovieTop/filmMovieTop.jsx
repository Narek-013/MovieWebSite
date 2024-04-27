import './filmMovieTop.css';

const FilmMovieTop = ({state}) => {
    
    return (
      <div className="filmMovieTop">
        <img src={`https://image.tmdb.org/t/p/w500/${state.poster_path}`} alt="" />
        <p>{state.overview}</p>
      </div>
    );
}

export default FilmMovieTop;
