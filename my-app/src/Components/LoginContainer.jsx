import React from 'react'
import { Loginwith } from './Loginwith'
import styles from '../Styles/LoginContainer.module.css'
import { LoginInput } from './Test'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

export const LoginContainer = () => {

    const {authEmail,loading}=useSelector((state)=>state.app)

    

    return authEmail?<Redirect path="/"/>:(
        <>
        <div className={styles.imageContainer} >
            <img className={styles.image} src="https://th.thgim.com/static/theme/default/base/img/logo.png" alt="logo" />
        </div>
        <hr></hr>
        <div className={styles.container} >
            <h2>Sign In to your account</h2>
            <hr/>
            <Loginwith/>
            <div className={styles.hrText} ></div>
            <LoginInput/>
            
        </div>
        
        </>
    )
}
