import React from 'react'
import styles from "../Styles/NewsBox.module.css";

const BoxCard = ({data, handlePage}) => {
    const max = data.length-1
    const newData = data[Math.floor(Math.random() * 50 % max)]
    return (
        <div className = {styles.box_card} onClick = {() => handlePage(newData.id)}>
            <img src={newData.urlToImage} alt=""/>
            <p>{newData.title}</p>
            <span>RECOMMENDED BY THE HINDU</span>
        </div>
    )
}
export {BoxCard}
