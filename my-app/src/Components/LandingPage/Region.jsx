import React from 'react'
import styles from "../../Styles/NewsBox.module.css";

const Region = ({data, handlePage}) => {
    return (
        <div className = {styles.region_box}>
            <h5>From the Region</h5>
            {
                data?.map(
                    (e, i) =>
                        i < 6 &&
                        i > 0 && (
                            <div className={styles.box_flex}>
                                <img src={e.urlToImage} alt="newsImage" />
                                <p onClick = {() => handlePage(e.id)}>{e.title}</p>
                            </div>
                        )
            )}
        </div>
    )
}

export {Region}
