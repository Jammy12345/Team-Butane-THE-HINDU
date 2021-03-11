import React from 'react'
import styles from '../Styles/LoginSignin.module.css'    

export const LoginSignin = ({handleClick}) => {
    
    return (
        <div>
            <p className={styles.forgotpass} >Forgot Password</p>
            <div onClick={handleClick} className={styles.signinButton} >Sign In</div>
            <p className={styles.freetrial} >Don't have an account <b><u>Sign up for free trial</u></b></p>
        </div>
    )
}
