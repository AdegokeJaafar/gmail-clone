import React from 'react'
import './Login.css'
// import { auth } from "../firebase"
import { Button } from '@material-ui/core'


function Login() {

    const signIn = () => {
         
    }
    return (
        <div className="login">
            <div className="login-container">
                <img 
                className="image "
                src="https://www.theindianwire.com/wp-content/uploads/2020/12/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" 
                alt=""
            />
            <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}

export default Login
