import React from 'react'
import styled from 'styled-components'

import styles from '../Styles/SideCard.module.css'

const BottomCard=styled.div`
    display:flex;
    flex-direction:column;
    align-items:space-between;
    
`
export const SideCard = () => {
    return (
        <div className={styles.container} >
          <u> <b><p className={styles.heading} >U.S. trade report flags challenges from ‘Make in India’ policy</p></b></u>
            <div className={styles.TriangleRight} ></div>
            <div className={styles.TriangleLeft} ></div>

        <BottomCard>
            <div className={styles.CardContent} >
                <p>The campaign epitomises the challenges facing bilateral trade ties, U.S. Congress told</p>
                <small>SRIRAM LAKSHMAN</small>
            </div>
            <div>
                <img className={styles.CardImg} src="https://th.thgim.com/news/national/other-states/fl7sru/article33861660.ece/ALTERNATES/FREE_660/664313-12-202020-36-5014CMUDDHAVTHACKERAYPRESSCONFERENCEJPG" alt="ok"/>
            </div>
        </BottomCard>
        </div>
    )
}
