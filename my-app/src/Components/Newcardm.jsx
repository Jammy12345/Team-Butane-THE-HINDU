import React from 'react'
import styled from 'styled-components'
import {Dot} from 'react-animated-dots'
import { FaRegDotCircle } from 'react-icons/fa';
import style from '../Styles/Newcardm.module.css'

const NewcardmContainer=styled.div`
    display:flex;
    // border:1px solid;
    width:55vh;
    height:130px;
    margin-bottom:11px;
    
`
export const Newcardm = ({props}) => {
    return (
        <NewcardmContainer>
            <img className={style.img} src="https://th.thgim.com/news/national/mcxu3y/article34025431.ece/ALTERNATES/FREE_660/RS-march-9-2021JPG" alt="news" />
            <div>
            <p className={style.heading} >NATIONAL</p>
               <p className={style.para} >
    
                    &nbsp; Delhi HC seeks response from Centre on petition against new IT Rules
                    Delhi HC seeks response from Centre on petition against new IT Rules
                    1hr 
                </p>
            </div>
        </NewcardmContainer>
    )
}
