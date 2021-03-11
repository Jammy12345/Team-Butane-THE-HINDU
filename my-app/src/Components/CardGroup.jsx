import React from 'react'
import { Newcardm } from './Newcardm'
import { Newcards } from './Newcards'
import styles from '../Styles/CardGroup.module.css'
import styled from 'styled-components'


<<<<<<< HEAD
// const Right = styled.div `
//     display:flex;
//     flex-direction:column;
// `
=======
const Right=styled.div `
    display:flex;
    flex-direction:column;
`
>>>>>>> 54d8d1be5e2c67851a1c2a5a8b055563b518976a

export const CardGroup = () => {
    return (
        <div className={styles.container} >
            <div>
                <Newcards/>
                <Newcardm/>
            </div>
            <div>
                <Newcardm>
<<<<<<< HEAD
=======
              
>>>>>>> 54d8d1be5e2c67851a1c2a5a8b055563b518976a
                </Newcardm>
                <Newcardm/>
                <Newcardm/>
                <Newcardm/>
            </div>
        </div>
    )
}
