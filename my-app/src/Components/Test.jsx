import React from "react";
import { Input } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import { LoginSignin } from "./LoginSignin";
import { useDispatch } from "react-redux";
import { auth } from "../Redux/News/Actions";


export const LoginInput = () => {

    const dispatch=useDispatch()

    const initlogin={
        email:"",
        password:""
    }

    const [loginInput,setLoginInput]=React.useState(initlogin)


    const handleChange=(e)=>{
        const {value,name}=e.target
        setLoginInput({
            ...loginInput,
            [name]:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        handleClick()
    }

    const handleClick=()=>{
        const {email,password}=loginInput
        const payload={
            
            email:email,
            password:password
        }

        dispatch(auth(payload))
    }
    

    return (
            <form onSubmit={handleSubmit} >
                <Input onChange={handleChange} value={loginInput.email} name="email" style={{width:"100%",height:"50px", border:"1px solid black", borderRadius:"4px",margin:"25px 0"}} icon='users' iconPosition='left' placeholder='Email or phone number' />
                <br/>
                <Input onChange={handleChange} value={loginInput.password} name="password" style={{width:"100%",height:"50px", border:"1px solid black", borderRadius:"4px",margin:"7px 0"}} icon='lock' iconPosition='left' placeholder='Password' />
                <LoginSignin handleClick={handleClick} />
            </form>

        
            )
}

    

 
