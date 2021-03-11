import React, { useState, useEffect } from "react";
import styles from "../Styles/NewsBox.module.css"

const AllNewsCard = ({data, category, handlePage}) => {
    const [newData, setNewData] = useState(data);
    useEffect(() => {
        const news = data.filter((e) => e.category === category)
        setNewData(news)
    }, []);
    return (
        <div className = {styles.all_news_div}>
            <div className = {styles.all_news_left} onClick = {() => handlePage(newData[0].id)}>
                <img src={newData[0].urlToImage} alt="main_image"/>
                <h1>{newData[0].title}</h1>
                <p>{newData[0].description}</p>
            </div>
            <div>
            {newData?.map(
                (e, i) =>
                    i < 5 &&
                    i > 0 && (
                        <div className={styles.all_news_right}>
                            <img src={e.urlToImage} alt="newsImage" />
                            <p onClick = {() => handlePage(e.id)}>{e.title}</p>
                        </div>
                    )
            )}
            </div>
        </div>
    )
}

export {AllNewsCard}
