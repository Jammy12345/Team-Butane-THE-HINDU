import React from 'react'
import style from '../Styles/NewCards.module.css'
export const Newcards = () => {
    return (
        <div className={style.CardContainer} >
                <img src="https://th.thgim.com/news/national/mcxu3y/article34025431.ece/ALTERNATES/FREE_660/RS-march-9-2021JPG" alt="news" />
            <div>
                <h2>Delhi HC seeks response from Centre on petition against new IT Rules Delhi HC seeks response from Centre on petition against new IT Rules</h2>
                <h5 className={style.WriterHeading} >Soibh Roky Singh</h5>
                <p>Prime Minister Narendra Modi also inaugurated and laid the foundation stones of multiple infrastructure projects in Tripura during the online event.</p>
            </div>
        </div>
    )
}
