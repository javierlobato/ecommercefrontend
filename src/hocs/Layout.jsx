import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from '../components/navigation/Navbar';
import  Footer  from '../components/navigation/Footer';
import PropTypes from 'prop-types';


const Layout = (props) => {
    return (
        <div>
            <Navbar />     
            <ToastContainer />            
            {props.children}
            <Footer />
        </div>
    );  
}

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
