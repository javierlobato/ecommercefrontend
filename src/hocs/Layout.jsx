import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "../components/navigation/navbar";
import { Footer } from "../components/navigation/Footer";


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

export default Layout;