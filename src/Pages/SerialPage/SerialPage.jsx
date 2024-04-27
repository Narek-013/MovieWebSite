import Main from "../../components/Main/Main";
import SectionLeft from "../../components/Section/SectionLeft/SectionLeft";
import SectionRight from "../../components/Section/SectionRight/SectionRight";

const SerialPage = () => {
    return (
      <div className="about container">
        <Main />
        <div className="centerMovie">
          <SectionLeft />
          <SectionRight />
        </div>
      </div>
    );
}

export default SerialPage;
