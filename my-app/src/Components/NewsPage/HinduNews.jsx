import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchData, fetchReport } from "../../Redux/News/Actions";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "../../Styles/HinduNews.module.css";
import { NewsData } from "./NewsData";
import { BoxCard } from "../BoxCard"
import Loader from "../Loader";

const HinduNews = () => {
    const [load, setLoad] = useState(true);
    const report  = useSelector((state) => state.news.report);
    const news = useSelector((state) => state.app.news);
    const loading = useSelector((state) => state.app.loading);
    const isLoading = useSelector((state) => state.news.isLoading);
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        console.log(id, "here")
        dispatch(fetchReport(id));
        dispatch(fetchData());
        setLoad(false)
    }, [id, dispatch]);

    const handlePage = (id) => {
        history.push(`/page/${id}`);
        console.log(id);
    };

    return (
        <>
            <Header />
            {loading && <Loader/>}
            {
                !loading && !isLoading && !load &&
            <div className={styles.container}>
                <NewsData data = {report}/>
                <div className = {styles.right_contain}> 
                    <div>
                        {console.log(news, report, loading, isLoading)}
                        <BoxCard data = {news} handlePage={handlePage}/>
                    </div>
                    <div>
                        <BoxCard data = {news} handlePage={handlePage}/>
                    </div>
                    <div>
                        <BoxCard data = {news} handlePage={handlePage}/>
                    </div>
                </div>
            </div>}
            <Footer />
        </>
    );
};

export { HinduNews };
