import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/pages/Footer/Footer';
import Header from '../../Components/pages/Header/Header';



const Main = () => {
    return (
        <div className='mx'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          
        </div>
    );
};

export default Main;