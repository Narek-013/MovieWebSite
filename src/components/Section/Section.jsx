import SectionLeft from "./SectionLeft/SectionLeft";
import SectionRight from "./SectionRight/SectionRight";
import './section.css';

const Section = () => {
    
    return (
        <div className="container section">
            <SectionLeft/>
            <SectionRight/>
        </div>
    );
}

export default Section;
