import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import NewFilmPage from "../Pages/newFilmPage/NewFilmPage";
import SerialPage from "../Pages/SerialPage/SerialPage";
import { ItemCard } from "../context/newContext"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UseRequest } from "../Hook/UseRequest";


const AppRouter = () => {

     const { getMovie } = UseRequest();
     const [movie, setMovie] = useState([]);
     const [popularMovie, setPopular] = useState([]);
     const [serial, setSerial] = useState([]);

     useEffect(() => {
       const get = async () => {
         const res = await getMovie(
           "https://api.themoviedb.org/3/discover/movie?api_key=c93fc8cac5c8906e0c9dd4d851e440be&language=en-US&page=1&sort_by=popularity.desc"
         );
         setMovie(res);
       };
       get();
       const getPopular = async () => {
         const res = await getMovie(
           "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
         );
         setPopular(res);
       };
       getPopular();
       const getSerial = async () => {
         const res = await getMovie(
           "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
           // "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
         );
         setSerial(res);
       };
       getSerial();
     }, []);

     const navigate = useNavigate();
     const handleClick = (el) => {
       navigate("/aboutPage", { state: el });
     };


    return (
      <div>
        <ItemCard.Provider value={{ movie, popularMovie, serial, handleClick }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="aboutPage" element={<AboutPage />} />
              <Route path="/newFilm" element={<NewFilmPage />} />
              <Route path="/serial" element={<SerialPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </ItemCard.Provider>
      </div>
    );
}

export default AppRouter;
