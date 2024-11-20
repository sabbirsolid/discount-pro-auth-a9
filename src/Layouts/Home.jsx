import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import BrandsInfo from '../components/BrandsInfo';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
                {/* <Banner></Banner>
                <BrandsInfo></BrandsInfo> */}
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;