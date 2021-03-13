import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from "../Dashboard/Loginin.module.css";

const Loginin = () => {
    const history = useHistory();
    const handleSignup = () => {
        history.push("/signup")
    }
    const handleSubscribe = () => {
        history.push("/subscribe")
    }
    return (
        <div className={styles.LogininWrapper}>
            <div style={{marginLeft: "10%"}}><img src="https://www.thehindu.com/brandhub/d8b8gc/article26139666.ece/binary/dashboard-icon" alt="newspaper-logo" /></div>
            <div className={styles.logoText}><p>Sign Up or Subscribe to set up <br /> your personalised Dashboard</p></div>
            <div className={styles.btn}>
                <button onClick={handleSubscribe}>
                    SUBSCRIBE
                </button>
                <button onClick={handleSignup}>
                    SIGN UP FOR FREE
                </button>
            </div>
            <div style={{marginLeft: "15%", marginTop: "1%"}}>
                <p>Already have an account ? <Link to="/signin" style={{color: "rgb(94,180,217)", paddingLeft: "5px", textDecoration: "none"}}>Sign in</Link></p>
            </div>
        </div>
    )
}
export { Loginin };