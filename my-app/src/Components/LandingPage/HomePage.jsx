import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/News/Actions";
import styles from "../../Styles/NewsBox.module.css";
import { Select } from "../Select";
import { NewsBox } from "./NewsBox";
import { Region } from "./Region";

const HomePage = () => {
    const news = useSelector((state) => state.app.news);
    const loading = useSelector((state) => state.app.loading);
    const error = useSelector((state) => state.app.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    return loading ? (
        <div>...loading</div>
    ) : error ? (
        <div>Something went wrong</div>
    ) : (
        <div>
            {news.length !== 0 && (
                <div className={styles.news_div}>
                    <div>
                        <Select width = {"100%"} category={"Sports"}/>
                        <NewsBox data={news} category={"Sports"} />
                    </div>
                    <div>
                        <Select width = {"100%"} category={"Entertainment"} />  
                        <NewsBox data={news} category={"entertainment"} />
                    </div>
                    <div>
                        
                        <Region data={news} />
                    </div>
                </div>
            )}
            {news.length !== 0 && (
                <div className={styles.news_div}>
                    <div>
                        <Select width = {"100%"} category={"Politics"}/>
                        <NewsBox data={news} category={"politics"} />
                    </div>
                    <div>
                        <Select width = {"100%"} category={"Research"} />  
                        <NewsBox data={news} category={"research"} />
                    </div>
                    <div>
                        <Region data={news} />
                    </div>
                </div>
            )}
        </div>
    );
};

export { HomePage };
