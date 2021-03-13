import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { fetchSearchNews } from '../Redux/News/Actions'
import { GridcardSearch } from './GridcardSearch'
import { ListingcardSearch } from './ListingcardSearch'

import { Loadertest } from './Loadertest'

const GridConainer=styled.div`
    display:flex;
    width:45vw;
    border:1px solid;
    flex-wrap:wrap;
    justify-content:space-around;

`


export const Searchnews = () => {

    const {news,loading}=useSelector((state)=>state.app)


    const initView={
        grid:false,
        listing:true
    }

    const [view,setView]=React.useState(initView)
    

    
    const {searchInput} =useParams()
    const dispatch=useDispatch()
    React.useEffect(()=>{
        dispatch(fetchSearchNews(searchInput))

    },[])
    
   
    return (
            <GridConainer>
                {news && news.map((el,i)=><GridcardSearch key={i} data={el} />)}
            </GridConainer>

    )
}
