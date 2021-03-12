import React from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchData } from '../../../Redux/News/Actions';
import { Loginin } from '../Loginin';
import { NewsCard } from './NewsCard';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Loader from "../../../Components/Loader";

const Bookmark = ({news}) => {
    const dispatch = useDispatch();
    const {loading, error}  = useSelector((state) => state.app, shallowEqual)
    
    const isAuth = useSelector((state) => state.auth.isAuth);
    
    React.useEffect(() => {
        dispatch(fetchData())
    }, [dispatch]);

    const filteredData = news?.filter((item) => item.bookmark === true)
    return isAuth ? loading ? <Loader/> : error ? <div>Something went Wrong!</div> : (
        <div>
            {
                filteredData.length !== 0 ? filteredData.map((item) => <NewsCard key={item.id} {...item} />)
                    : <div style={{marginLeft: "20%"}}>
                        <div style={{color: "rgb(94,180,217)", marginTop: "8%", marginLeft: "40%"}}><BookmarkBorderIcon style={{fontSize: "70px"}} /></div>
                        <h1 style={{color: "rgb(94,180,217)"}}>You haven't added any Bookmarks yet!</h1>
                    </div>
            }        
        </div>
    ) : <Loginin/>
}

export { Bookmark };
