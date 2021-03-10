import React from "react";
import { Input } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'


export const LoginInput = () => (
    <>
    <Input style={{width:"100%",height:"50px", border:"1px solid black", borderRadius:"4px",margin:"25px 0"}} icon='users' iconPosition='left' placeholder='Email or phone number' />
    <br/>
    <Input style={{width:"100%",height:"50px", border:"1px solid black", borderRadius:"4px",margin:"7px 0"}} icon='lock' iconPosition='left' placeholder='Password' />

    </>
 
)