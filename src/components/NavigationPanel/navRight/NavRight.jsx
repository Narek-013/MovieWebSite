import { Link } from "react-router-dom";

const NavRight = () => {
    return (
      <div className="navRight">
        <Link className="refresh">Вход</Link>
        <p>/</p>
        <Link className="reg">Регистрация</Link>
        <form className="searchForm">
            <input type="text" name="" id="" placeholder="Поиск..."/>
            <button>Ok</button>
        </form>
        
      </div>
    );
}

export default NavRight;
