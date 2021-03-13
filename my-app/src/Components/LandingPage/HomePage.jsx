import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/News/Actions";
import styles from "../../Styles/NewsBox.module.css";
import { AllNewsCard } from "../AllNewsCard";
import { Heading } from "../Heading";
import { Select } from "../Select";
import { SideCard } from "../SideCard";
import { NewsBox } from "./NewsBox";
import { Region } from "./Region";
import { BoxCard } from "../BoxCard";
import { useHistory } from "react-router-dom"
import { SliderCard } from "../SliderCard"
import Loader from "../Loader";

const HomePage = () => {
    const news = useSelector((state) => state.app.news);
    const loading = useSelector((state) => state.app.loading);
    const error = useSelector((state) => state.app.error);
    const dispatch = useDispatch();
    const [category, setCategory] = useState("research");
    const history = useHistory();

    const handleNews = (category) => {
        setCategory(category);
    };

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch, category]);

    const handlePage = (id) => {
        history.push(`/news/${id}`);
        console.log(id);
    };

    return loading ? (
        <Loader/>
    ) : error ? (
        <div>Something went wrong</div>
    ) : (
        <div>
            {news.length !== 0 && (
                <div className={styles.news_div}>
                    <div>
                        <Heading width={"100%"} category={"Sports"} />
                        <hr />
                        <NewsBox
                            data={news}
                            category={"Sports"}
                            handlePage={handlePage}
                        />
                    </div>
                    <div>
                        <Heading width={"100%"} category={"Entertainment"} />
                        <hr />
                        <NewsBox
                            data={news}
                            category={"entertainment"}
                            handlePage={handlePage}
                        />
                    </div>
                    <div>
                        <Region data={news} handlePage={handlePage} />
                    </div>
                </div>
            )}
            {news.length !== 0 && (
                <div className={styles.hr}>
                    <Select category={category} handleNews={handleNews} />
                    <hr />
                    <div className={styles.news_div}>
                        <div>
                            <AllNewsCard
                                data={news}
                                category={category}
                                handlePage={handlePage}
                            />
                        </div>
                        <div>
                            <SideCard
                                data={news}
                                category={category}
                                handlePage={handlePage}
                            />
                        </div>
                    </div>
                </div>
            )}
            {news.length !== 0 && (
                <div className={styles.news_div}>
                    <div>
                        <Heading width={"100%"} category={"Politics"} />
                        <hr />
                        <NewsBox
                            data={news}
                            category={"politics"}
                            handlePage={handlePage}
                        />
                    </div>
                    <div>
                        <Heading width={"100%"} category={"Research"} />
                        <hr />
                        <NewsBox
                            data={news}
                            category={"technology"}
                            handlePage={handlePage}
                        />
                    </div>
                    <div>
                        <Region data={news} handlePage={handlePage} />
                    </div>
                </div>
            )}
            {news.length !== 0 && (
                <div className={styles.hr}>
                    <Select category={category} handleNews={handleNews} />
                    <hr />
                    <div className={styles.news_div}>
                        <div>
                            <AllNewsCard
                                data={news}
                                category={category}
                                handlePage={handlePage}
                            />
                        </div>
                        <div>
                            <SideCard
                                data={news}
                                category={category}
                                handlePage={handlePage}
                            />
                        </div>
                    </div>
                </div>
            )}
            {news.length !== 0 && (
                <div className={styles.hr}>
                    <Heading
                        style={{ width: "80%" }}
                        category={"Recommended by The Hindu"}
                    />
                    <hr />
                    <div className={styles.news_div}>
                        <BoxCard data={news} handlePage={handlePage} />
                        <BoxCard data={news} handlePage={handlePage} />
                        <BoxCard data={news} handlePage={handlePage} />
                        <BoxCard data={news} handlePage={handlePage} />
                    </div>
                </div>
            )}
            <SliderCard data = {news} handlePage={handlePage} />
        </div>
    );
};

export { HomePage };
