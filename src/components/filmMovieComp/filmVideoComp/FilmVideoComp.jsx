
import YouTube from 'react-youtube';
import './videoComp.css';
import { useEffect, useState } from 'react';

const FilmVideoComp = ({state}) => {

    const [video,setVideos] = useState()

    const getVideos = async() => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${state.id}/videos?api_key=c93fc8cac5c8906e0c9dd4d851e440be&language=en-US`)
        const result = await res.json()
        setVideos(result.results[0].key)
    };

    useEffect(() => {
        getVideos()
    },[state])


    return (
      <div className="videoComp">
        <h4>
          {state && state.original_title} ( {state.release_date} ) смотреть онлайн
          бесплатно
        </h4>
        <div className='videoItem'>
          <YouTube videoId={video} />
        </div>
      </div>
    );
}

export default FilmVideoComp;
