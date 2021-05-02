import React from 'react'
import './SignUp.css'
function SignUp() {

    return (
    <div className="sign__up">
        <div className="form">
            <h1>SignUp</h1>
            <div className="input">
              <h3>Full Name</h3>
              <i className="far fa-user fa-lg change_color"></i>
              <input type="text" placeholder="Type your Full Name"/>
            </div>
            <div className="input">
              <h3>Email</h3>
              <i className="far fa-envelope fa-lg"></i>
              <input type="email" placeholder="Type your Email"/>
            </div>
            <div className="input">
              <h3>Password</h3>
              <i className="far fa-keyboard fa-lg"></i>
              <input type="password" placeholder="Type your Password"/>
            </div>
            <div className="input">
              <h3>Confirm Password</h3>
              <i className="far fa-keyboard fa-lg"></i>
              <input type="password" placeholder="Confirm your Password"/>
            </div>
            <button className="sign_up_btn">Sign up</button>
            <h3 className="last">Or</h3>
            <div className="icons">
            <i class="fa fa-facebook-square fa-lg"></i>
            <i class="fa fa-twitter-square fa-lg"></i>
            <i class="fa fa-google-plus-square fa-lg"></i>
            </div>
            <h3 className="last">Have an Account <span>Sign in</span></h3>
        </div>
    </div>
    )
}

export default SignUp
