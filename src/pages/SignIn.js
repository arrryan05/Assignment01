import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignIn.scss";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import EmailAuth from "./EmailAuth"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        
        <div className="parent">
            <div className="left">
                <div className="text">
                    Board
                </div>

            </div>
            <div className="right">
                <div className="rightMain">
                    <div className="Signin">SignIn</div>
                    <div className="Signin2">SignIn to your account</div>
                    <div className="SignIn3">
                        <div className="GoogleSignIn">
                            <div>
                            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                            </div>
                        </div>
                        {/* <div className="AppleSignIn"><img src={apple_img}/></div> */}
                    </div>
                    <EmailAuth/>
                    <div className="bottom">
                        <div className="bottom1">Don’t have an account?</div>
                        <div className="bottom2">Register Here</div>
                    </div>
                    
                </div>


            </div>


        </div>
    );
}