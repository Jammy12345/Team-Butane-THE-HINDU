import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import styles from '../Styles/SideCard.module.css'

const BottomCard=styled.div`
    display:flex;
    flex-direction:column;
    align-items:space-between;
    
`
export const SideCard = ({data, category}) => {
    const [newData, setNewData] = useState(data);
    useEffect(() => {
        const news = data.filter((e) => e.category === category)
        setNewData(news)
    }, []);
    return (
        <div className={styles.container} >
          <u> <b><p className={styles.heading} >More from {category}</p></b></u>
            <div className={styles.TriangleRight} ></div>
            <div className={styles.TriangleLeft} ></div>

        <BottomCard>
            <div className={styles.CardContent} >
                <p>{newData[newData.length-2].title}</p>
            </div>
            <div>
                <img className={styles.CardImg} src={newData[newData.length-2].urlToImage} alt="ok"/>
            </div>
        </BottomCard>   
        </div>
    )
}
