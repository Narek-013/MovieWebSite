import { Outlet } from 'react-router-dom';
import NavPanel from '../../components/NavigationPanel/NavPanel';
import './layout.css';
import Footer from '../../components/Footer/Footer';

const Layout = () => {

  
    return (
      <div className="layout">
        <NavPanel />
        <div className='top'></div>
        <div className='lefts'></div>
        <Outlet />
        <Footer/>
        <div className='right'></div>
      </div>
    );
}

export default Layout;
