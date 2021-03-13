import React from 'react';
import styles from "../Styles/ResultsPage.module.css";
import { Input } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

import { useDispatch, useSelector,} from 'react-redux'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import { fetchSearchNews } from '../Redux/News/Actions'
import { GridcardSearch } from './GridcardSearch'
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { ListingcardSearch } from './ListingcardSearch';


const GridConainer=styled.div`
    display:flex;
    // width:36vw;
    flex-wrap:wrap;
    justify-content:space-between;

`


const ResultsPage = () => {

    const {news}=useSelector((state)=>state.app)
    const history=useHistory()

    const initView={
        grid:false,
        listing:true
    }
    
    const [view,setView]=React.useState(initView)


    const handleGrid=()=>{
        setView({
            grid:true,
            listing:false
        })
    }
    
    const handleList=()=>{
        setView({
            grid:false,
            listing:true
        })
    }
    

    
    const {searchInput} =useParams()
    const dispatch=useDispatch()



    React.useEffect(()=>{
        dispatch(fetchSearchNews(searchInput))

    },[])


    const Eachnews=(id)=>{
        history.push(`/page/${id}`);
    }

   

    if(news.length>0){
        news.map(el=>(console.log(el.publishedAt.split("T")[0]) ))
    }
    return (
        <>
        <Header />

        <div className={styles.main} >
            <div>
                <div className={styles.wrapper}>
                    <header className={styles.head}>
                        <h2>Your Search</h2>
                        <Input  value={searchInput} action={{ icon: 'search' }} placeholder='Search...' />

                    </header>
                    <nav className={styles.nav}>
                        <ul>
                            <li><div>CATEGORY</div></li>
                            <li><div className={styles.line}></div></li>
                            <li><button className={styles.allCategory}>All Category</button></li>
                            <li><button>Business</button></li>
                            <li><button>Sports</button></li>
                            <li><button>Social</button></li>
                            <li><button>Politics</button></li>
                            <li><button>Entertainment</button></li>
                            <li><button>Research</button></li>
                            <li><button>Technology</button></li>
                        </ul>
                        <ul>
                            <li><div>TOPICS</div></li>
                            <li><div className={styles.line}></div></li>
                            <input className={styles.inputDesign} type="text" placeholder="Type Topic Name"/> 
                        </ul>
                        <ul>
                            <li><div>AUTHORS</div></li>
                            <li><div className={styles.line}></div></li>
                            <input className={styles.inputDesign} type="text" placeholder="Type Author Name"/> 
                        </ul>
                        <ul>
                            <li><div>DATA RANGE</div></li>
                            <li><div className={styles.line}></div></li>
                            <li><button className={styles.allCategory}>All</button></li>
                            <li><button>Past 24 hours</button></li>
                            <li><button>Past 7 days</button></li>
                            <li><button>Past 30 days</button></li>
                            <li><button>Past 12 months</button></li>
                        </ul>
                        <ul>
                            <li><div>CONTENT TYPES</div></li>
                            <li><div className={styles.line}></div></li>
                            <li><button className={styles.allCategory}>All</button></li>
                            <li><button>Text</button></li>
                            <li><button>Audio</button></li>
                            <li><button>Video</button></li>
                            <li><button>Photo</button></li>
                            <li><button>Cartoon</button></li>
                        </ul>
                    </nav>
                    <article className={styles.content}>
                        
                    
                        <div className={styles.sort} >
                            <div>
                                <div>Sort by</div>|
                                <div>Relevance</div>|
                                <div >Latest</div>|
                                <div >Oldest</div>|
                            </div>
                            <div>
                                <div onClick={handleGrid} >GRID</div>|
                                <div onClick={handleList}>LISTING</div>
                            </div>     
                        </div>
                        <div className={styles.mytextdiv}>
                        
                        <div className={styles.divider}></div>
                            <div className={styles.mytexttitle}>
                                My Text
                            </div>
                        </div>
                    {news.length>=1&&view.grid?(<GridConainer>
                        {news&&news.map((el,i)=><GridcardSearch Eachnews={Eachnews} key={i} data={el} />)}
                    </GridConainer>):news.length>=1&&view.listing?(news.map((el,i)=><ListingcardSearch Eachnews={Eachnews} onClick={()=>Eachnews(el.id)} key={i} data={el} />)):<h3 style={{color:"red"}} >No Result Found</h3>}

                    </article>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};


export default ResultsPage;