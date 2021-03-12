import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { fetchSearchNews } from '../Redux/News/Actions'
import { GridcardSearch } from './GridcardSearch'
import { ListingcardSearch } from './ListingcardSearch'
import LoadingOverlay from 'react-loading-overlay';

import BounceLoader, { BarLoader } from 'react-spinners'
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
        <LoadingOverlay
        active="true"
        classNamePrefix="_loading_overlay_spinner"
        spinner
        styles={{
            
            spinner: {margin:"0px",padding:"0"}
          }}

          classNamePrefix='_loading_overlay_spinner'
        text='Loading...'
        >
            {/* {news&&news.map((el,i)=><ListingcardSearch key={i} data={el} />)} */}
            <GridConainer>
                {news&&news.map((el,i)=><GridcardSearch key={i} data={el} />)}
            </GridConainer>
        </LoadingOverlay>

    )
}
