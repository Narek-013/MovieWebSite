import Main from "../../components/Main/Main";
import SectionLeft from "../../components/Section/SectionLeft/SectionLeft";
import FilmMovieComp from "../../components/filmMovieComp/FilmMovieComp";

import './aboutPage.css'

const AboutPage = () => {
    return (
        <div className="about container">
            <Main/>
            <div className="centerMovie">
              <SectionLeft/>
              <FilmMovieComp/>
            </div>
        </div>
    );
}

export default AboutPage;
