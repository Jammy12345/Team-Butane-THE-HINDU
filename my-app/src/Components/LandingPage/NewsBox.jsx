import React, { useState, useEffect } from "react";
import styles from "../../Styles/NewsBox.module.css";

const NewsBox = ({ data, category, handlePage }) => {
    const [newData, setNewData] = useState(data);
    // fetching news of particular category
    useEffect(() => {
        const news = data.filter((e) => e.category === category)
        setNewData(news)
    }, []);

    // component with 3 different news and ma main news with image
    return (
        <div className={styles.nbox}>
            <img className = {styles.main_img} src={newData[0].urlToImage} alt="newsImage" />
            <h4 onClick = {() => handlePage(newData[0].id)}>{newData[0].title}</h4>
            {newData?.map(
                (e, i) =>
                    i < 4 &&
                    i > 0 && (
                        <div key = {i} className={styles.box_flex}>
                            <img src={e.urlToImage} alt="newsImage" />
                            <p onClick = {() => handlePage(e.id)}>{e.title}</p>
                        </div>
                    )
            )}
        </div>
    );
};

export { NewsBox };
