import React from 'react';
import Sidebar from './Sidebar';
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Route, Switch } from 'react-router-dom';
import Bookmark from './Pages/Bookmark';

const Dashboard = () => {
    return (
        <>
            <Header/>
            <Sidebar />
            <Footer />
            
        </>
    )
}
export { Dashboard };