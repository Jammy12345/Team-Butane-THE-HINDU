import React, { useState } from 'react'
import {Header} from "../Header/Header"
import {HomePage} from "../LandingPage/HomePage"
import {Footer} from"../Footer/Footer"

export const Home = () => {



    return (
        <div>
            <Header/>
            <HomePage/>
            <Footer /> 
        </div>
    )
}
