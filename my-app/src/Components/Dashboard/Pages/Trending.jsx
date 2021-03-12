import React from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchData } from '../../../Redux/News/Actions';
import { Loginin } from '../Loginin';
import { NewsCard } from './NewsCard';

const Trending = () => {
    const dispatch = useDispatch();
    const {news, loading, error}  = useSelector((state) => state.app, shallowEqual)
    
    const isAuth = useSelector((state) => state.auth.isAuth);

    React.useEffect(() => {
        dispatch(fetchData())
        
    }, [dispatch]);

    const filteredData = news?.filter((item) => item.trending === true)    
    return isAuth ? loading ? <div className="loader">...loading</div> : error ? <div>Something went Wrong!</div> : (
        <div>
            {
                filteredData.length !== 0 && filteredData.map((item) => <NewsCard key={item.id} {...item} />)
            }        
        </div>
    ) : <Loginin/>
}

export { Trending };
