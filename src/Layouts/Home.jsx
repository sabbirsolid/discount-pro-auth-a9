import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import BrandsInfo from '../components/BrandsInfo';

const Home = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Banner></Banner>
                <BrandsInfo></BrandsInfo>
            </main>
        </div>
    );
};

export default Home;