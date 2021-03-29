import './Login.css'
import React from 'react'
import {auth, provider} from './firebase'
import { useStateValue } from './StateProvider'
import {actionTypes} from './reducer'

const Login = () => {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user
                })
            }).catch(err => {
                alert(err.message)
            })       
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" 
                    alt="" />
                <img 
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt="" />
            </div>
            <div>
                <button onClick={signIn}>Sign in</button>
            </div>
            </div>
    )
}

export default Login
