import React from 'react'
import styles from "../Pages/NewsCard.module.css";

const NewsCard = ({ id, urlToImage, title }) => {
    // console.log(data);
    return (
        <>
            <div className={styles.newsCardWrapper} key={id}>
            <div className={styles.newsCardTitle}>{title}</div>
            <div><img className={styles.newsCardImg} src={urlToImage} alt="news-img" /></div>
            </div>
        </>
    )
}

export { NewsCard };
