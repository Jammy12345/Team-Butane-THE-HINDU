import React from 'react'
import { useSelector } from 'react-redux';
import { Loginin } from '../Loginin';

const Briefing = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    
    return isAuth ? (
        <div style={{marginLeft: "10%", marginTop: "5%"}}>
            <h1>Start Briefing...</h1>
            <textarea style={{ width: "100%", height: "40vh", fontSize: "28px", padding: "1%" }} placeholder="Write here..."></textarea>
            <button style={{backgroundColor: "rgb(94,180,217)",marginLeft: "18vw", color: "white", border: "none", width: "15vw", fontWeight: "400",borderRadius: "5px", fontSize: "30px",height: "10vh"}}>SUBMIT</button>
        </div>
    ) : <Loginin/>
}

export { Briefing };
