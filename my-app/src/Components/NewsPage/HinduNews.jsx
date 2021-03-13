import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchData, fetchReport } from "../../Redux/News/Actions";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "../../Styles/HinduNews.module.css";
import { NewsData } from "./NewsData";
import { BoxCard } from "../BoxCard";
import { SliderCard } from "../SliderCard"
import Loader from "../Loader";

const HinduNews = () => {
    const [load, setLoad] = useState(true);
    const report = useSelector((state) => state.news.report, shallowEqual);
    const { loading, news, error } = useSelector((state) => state.app);
    const {isAuth, username } = useSelector(state => state.auth)
    const isLoading = useSelector(
        (state) => state.news.isLoading,
        shallowEqual
    );
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchReport(id));
        dispatch(fetchData());
        setLoad(false);
    }, [id]);
    const handlePage = (id) => {
        const payload = {
            ...report,
        };
        history.push(`/${id}`);
        
    };

    return (
        <>
            <Header />
            {loading && <Loader/>}
            {!loading && !isLoading && !load && news.length !== 0 && (
                <>
                    <div className={styles.container}>
                        <NewsData data={report} user = {username} auth = {isAuth}/>
                        <div className={styles.right_contain}>
                            <div>
                                <BoxCard data={news} handlePage={handlePage} />
                            </div>
                            <div>
                                <BoxCard data={news} handlePage={handlePage} />
                            </div>
                            <div>
                                <BoxCard data={news} handlePage={handlePage} />
                            </div>
                            <div>
                                <BoxCard data={news} handlePage={handlePage} />
                            </div>
                            <div>
                                <BoxCard data={news} handlePage={handlePage}/>
                            </div>
                            <div>
                                <BoxCard data={news} handlePage={handlePage} />
                            </div>
                            <div>
                                <BoxCard data={news} handlePage={handlePage} />
                            </div>
                        </div>
                    </div>
                </>
            )}
            {
            !loading && !isLoading && !load && news.length !== 0 && 
                <SliderCard data = {news} handlePage = {handlePage} />
            }
            <Footer />
        </>
    );
};

export { HinduNews };
