import React from 'react'
import { useSelector } from 'react-redux';
import { Loginin } from '../Loginin';

const Personalise = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    
    return isAuth ? (
        <div>
        </div>
    ) : <Loginin/>
}

export { Personalise };
