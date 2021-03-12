import React from "react";
import styles from "../../Styles/HinduNews.module.css";
import { Comment } from "./Comment";

const NewsData = ({ data }) => {
    return (
        <div className={styles.report_main_div}>
            <div className={styles.report_top}>
                <h4>{data.title}</h4>
            </div>
            <div className={styles.abs_report}>
                <div>
                    <h1>{data.title}</h1>
                </div>
                <div>
                    <img src={data.urlToImage} alt="iage" />
                </div>
                <h2>{data.description}</h2>
                <div className={styles.height_limit}>
                    <p>{data.content}</p>
                </div>
            </div>
            <div>
                <Comment data={data} />
            </div>
        </div>
    );
};

export { NewsData };
