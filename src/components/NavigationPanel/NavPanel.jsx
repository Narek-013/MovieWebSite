import { Link } from "react-router-dom";
import './navPanel.css'
import NavRight from "./navRight/NavRight";

const NavPanel = () => {
    return (
      <div className="nav">
        <Link className="refresh" to="/">KINOGO</Link>       
        <NavRight />
      </div>
    );
}

export default NavPanel;
