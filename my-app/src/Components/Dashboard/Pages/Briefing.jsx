import React from 'react'
import { useSelector } from 'react-redux';
import { Loginin } from '../Loginin';

const Briefing = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    
    return isAuth ? (
        <div>
            <h1>Start Briefing...</h1>
            <textarea style={{width: "70%", height: "40vh"}} placeholder="write here..."></textarea>
        </div>
    ) : <Loginin/>
}

export { Briefing };
