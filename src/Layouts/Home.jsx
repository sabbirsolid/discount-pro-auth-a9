
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Discount Pro</title>
               
            </Helmet>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;