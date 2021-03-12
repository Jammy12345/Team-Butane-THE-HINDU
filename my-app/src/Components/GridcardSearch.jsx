import React from 'react'
import styled from 'styled-components'


const GridcardSearchContainer =styled.div`
    width:17vw;
    height:55vh;
    // border:1px solid;
    diplay:flex;
    flex-direction:column;
    text-align:left;
    margin:10px 0 20px 0;
    >img{
        height:42%;
        width:100%;
    }

    >.content{
        height:55%;
        padding:0 7px;
    }

    .category{
        margin:3px 0px;
        color:#969696;
    }

    h4{
        margin:5px 0;
    }

    .para{
        color:#505050;
        font-size:13px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    small{
        font-weight:bold;
        font-size:12px;
    }

`
export const GridcardSearch = ({data,Eachnews}) => {
    return (
        <GridcardSearchContainer onClick={()=>Eachnews(data.id)}>
                <img src={data.urlToImage} alt=""/>
            <div className="content" >
            <p className="category">{data.category}</p>
                <h4>{data.title}</h4>
                <small>{data.author?data.author:"unknow"}</small>
                <p className="para"> {data.description}</p>
            </div>
        </GridcardSearchContainer>
    )
}
