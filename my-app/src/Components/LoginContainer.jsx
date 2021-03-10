import React from 'react'
import { Loginwith } from './Loginwith'
import styles from '../Styles/LoginContainer.module.css'
import { LoginSignin } from './LoginSignin'
import { LoginInput } from './Test'

export const LoginContainer = () => {
    return (
        <>
        <div className={styles.imageContainer} >
            <img className={styles.image} src="https://th.thgim.com/static/theme/default/base/img/logo.png" alt="logo" />
        </div>
        <hr></hr>
        <div className={styles.container} >
            <h2>Sign In to your account</h2>
            <hr/>
            <Loginwith/>
            <LoginInput/>
            <LoginSignin/>
        </div>
        
        </>
    )
}
