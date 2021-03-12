import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchData, fetchReport, postData } from "../../Redux/News/Actions";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "../../Styles/HinduNews.module.css";
import { NewsData } from "./NewsData";
import { BoxCard } from "../BoxCard";
import { SliderCard } from "../SliderCard"

const HinduNews = () => {
    const [load, setLoad] = useState(true);
    const report = useSelector((state) => state.news.report, shallowEqual);
    const { loading, news, error } = useSelector((state) => state.app);
    const isLoading = useSelector(
        (state) => state.news.isLoading,
        shallowEqual
    );
    const [likes, setLikes] = useState("");
    console.log("HERE3", report);
    console.log("HERE4", news);
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchReport(id));
        dispatch(fetchData());
        setLoad(false);
    }, [id]);

    const handleLike = () => {
        setLikes(report.likes + 1);
    };

    const handleDislike = () => {
        // setDislikes(report.dislikes + 1);
    };

    const handlePage = (id) => {
        console.log("HERE1");
        const payload = {
            ...report,
        };
        history.push(`/${id}`);
        dispatch(postData(report.id, payload));
    };

    return (
        <>
            <Header />
            {!loading && !isLoading && !load && news.length !== 0 && (
                <>
                    <div className={styles.container}>
                        <NewsData data={report} />
                        {/* <SideCard data = {news} /> */}
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
                                <BoxCard data={news} handlePage={handlePage} />
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
