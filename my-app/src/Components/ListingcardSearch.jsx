import React from 'react'
import styled from 'styled-components'


const ListingcardSearchContainer=styled.div`
    width:36.5vw;
    height:128px;
    display:flex;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color:#282828;
    margin:25px 0;
    
    >img{
        height:100%;
        width:30%;
    }
    >.cardcontent{
        // border:1px solid;
        padding:0 5px;
        text-align:left;
    }
    .category{
        margin:0px;
        color:#969696;
    }
    h4{
        margin:5px 0;
        width:320px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
        height:20px;
    }
    .para{
        color:#505050;
        line-height:1.2;
        font-size:13px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        width:330px;
        
    }
    small{
        font-weight:bold;
        font-size:12px;
        width:230px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
        height:20px;
        
    }
    span{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; 
        
    }
    
`

export const ListingcardSearch = ({data,Eachnews}) => {
    console.log(data)
    
    return (
        <ListingcardSearchContainer onClick={()=>Eachnews(data.id)} >
            <img src={data.urlToImage} alt=""/>
            <div className="cardcontent">
                <p className="category">{data.category}</p>
                <h4>{data.title}</h4>
                <p className="para">{data.description}</p>
                <small><span>{data.publishedAt.split("T")[0]}</span> | <span> {data.author?data.author:"unknow"}</span> </small>
            </div>
        </ListingcardSearchContainer>
    )
}
