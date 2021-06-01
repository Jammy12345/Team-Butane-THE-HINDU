import React from 'react'
import {Header} from "../Header/Header"
import {HomePage} from "../LandingPage/HomePage"
import {Footer} from"../Footer/Footer"
import { Ads } from '../Ads'

export const Home = () => {

    return (
        <div>
            <Header/>
            <Ads />
            <HomePage/>
            <Footer /> 
        </div>
    )
}
