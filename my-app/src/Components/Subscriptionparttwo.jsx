import React from 'react'
import styled from 'styled-components'
import {FaCheckCircle,FaCheckSquare} from 'react-icons/fa'

const Subs=styled.div`
    margin:auto;                       //temp
    height:90vh;
    width:60vw;
    border-radius:10px;
    text-align-center;
    display:flex;
    flex-direction:column;
    padding:0 50px;
    box-shadow: 3px 3px 10px 6px #ccc; 

    >h1{
        font-weight:900;
        font-size:40px;
        margin:10px 0;
    }
    >.commitment{
        margin:0;

    }
    >p{
        text-align:left;
        font-weight:bolder;
        font-size:16px;
    }
    .button{
        background-color:rgb(34, 31, 31);
        font-weight:bold;
        border:1px solid;
        padding:15px 100px;
        color:white;
        border-radius:3px;
        
    }
    .button:hover{
        border:2px solid;
        background-color:white;
        color:black;
        cursor:pointer;
    }
    
`
const CardContainer=styled.div`
    // border:1px solid;

    height:240px;
    width:100%;
    display:flex;
    margin: 25px auto;
    justify-content:space-between;
    >div{
        width:46%;
        border-radius:7px;
        background: linear-gradient(to bottom, rgb(229,252,250),rgba(252, 151, 230,0.1));
        
        border:2px solid rgb(71,159,198);
        text-align:center;
    }
    .value{
        padding:5px 13px;
        width:fit-content;
        background-color:white;
        margin:25px auto;
    }
    h1{
        margin:0;
    }
    .eachmonth{
        margin-top:40px;
    }
`


export const Subscriptionparttwo = () => {
    return (
        <Subs>
            <h1 className="heading" >Choose a Plan</h1>
            <h5 className="commitment"> <FaCheckCircle  /> &nbsp; No Commitment, Cancel any time</h5>
            <CardContainer>
                <div className="card" >
                    <div className="value" >
                        Value Pack
                    </div>
                    <h1>&#8377; 1199 *</h1>
                    <p>that's just 99/Month</p>
                    <p>/Charged once every 1 Year</p>
                </div>
                <div className="card" >
                    <div className="value" >
                        Monthly
                    </div>
                    <h1>&#8377; 199 *</h1>
                    <p className="eachmonth">/Charged once every 1 Month</p>
                </div>
            </CardContainer>
            <p>* All prices are inclusive of GST. Available for all credit cards / debit cards of ICICI, PNB, CITI, KOTAK and UPI Payments</p>
            <p><FaCheckSquare/>After 1 Year , your chosen plan amount will be auto deducted on 25/02/2022. Auto renewal can be disabled anytime in your "My Plan" dashboard</p>
            <div className="button" >Subscribe Now</div> 
        </Subs>
    )
}
