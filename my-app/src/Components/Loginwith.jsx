import React from 'react'
import { FcGoogle} from 'react-icons/fc';
import {FaFacebookSquare,FaTwitter} from 'react-icons/fa'
import styled from 'styled-components';

const LogoContainer=styled.div`
    border:2px solid;
    border-radius:3px;
    display:flex;
    align-items:center;    
    padding:15px 100px;
    margin:17px 0;
    width:fit-content;
    >span{
        font-size:13px;
    }
`

export const Loginwith = () =>
 {
    return (
        <>
        <LogoContainer>
            <FcGoogle style={{fontSize:"25px",verticalAlign:"center"}} />
            &nbsp; <span>Continue with Google</span>
         </LogoContainer>
         <LogoContainer>
            <FaFacebookSquare style={{color:"rgb(60,90,153)",fontSize:"25px",verticalAlign:"center"}} />
            &nbsp;<span>Continue with Google</span>
         </LogoContainer>
         <LogoContainer>
            <FaTwitter style={{color:"rgb(8,160,233)",fontSize:"25px",verticalAlign:"center"}} />
            &nbsp;<span>Continue with Google</span>
         </LogoContainer>
        </>
    )
}
