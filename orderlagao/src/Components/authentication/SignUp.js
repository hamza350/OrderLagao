import React from 'react'
import '../../styles/authentication/SignUp.css'
function SignUp() {

    return (
    <div className="sign__up">
        <div className="sign_up_form">
            <h1>SignUp</h1>
            <div className="sign_up_input">
              <h3>Full Name</h3>  
              <input type="text" placeholder="Type your Full Name"/>
              <i className="far fa-user fa-lg"></i>
            </div>
            <div className="sign_up_input">
              <h3>Email</h3>
              <input type="email" placeholder="Type your Email"/>
              <i className="far fa-envelope fa-lg"></i>
            </div>
            <div className="sign_up_input">
              <h3>Phone No</h3>
              <input type="tel" placeholder="Type your Phone No"/>
              <i className="fas fa-mobile-alt fa-lg"></i>
            </div>
            <div className="sign_up_input">
              <h3>Password</h3>
              <input type="password" placeholder="Type your Password"/>
              <i className="far fa-keyboard fa-lg"></i>
            </div>
            <div className="sign_up_input">
              <h3>Confirm Password</h3>
              <input type="password" placeholder="Confirm your Password"/>
              <i className="far fa-keyboard fa-lg"></i>
            </div>
            <button className="sign_up_btn">Sign up</button>
            <h3 className="last">Or</h3>
            <div className="icons">
            <i class="fa fa-facebook-square fa-lg"></i>
            <i class="fa fa-twitter-square fa-lg"></i>
            <i class="fa fa-google-plus-square fa-lg"></i>
            </div>
            <p class="text-center text-muted small">Already an account? <a href="SignIn">Sign In here!</a></p>
        </div>
    </div>
    )
}

export default SignUp
