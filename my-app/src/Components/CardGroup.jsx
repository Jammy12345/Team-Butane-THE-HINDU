import React from 'react'
import { Newcardm } from './Newcardm'
import { Newcards } from './Newcards'
import styles from '../Styles/CardGroup.module.css'
import styled from 'styled-components'


const Right=styled.div `
    display:flex;
    flex-direction:column;
`

export const CardGroup = () => {
    return (
        <div className={styles.container} >
            <div>
                <Newcards/>
                <Newcardm/>
            </div>
            <div>
                <Newcardm>
              
                </Newcardm>
                <Newcardm/>
                <Newcardm/>
                <Newcardm/>
            </div>
        </div>
    )
}
