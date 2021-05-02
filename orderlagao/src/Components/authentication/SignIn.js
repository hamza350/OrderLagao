import React from 'react'
import '../../styles/authentication/SignIn.css'
import {Link } from "react-router-dom";
function SignIn() {

    return (
    <div className="sign__in">
        <div className="sign_in_form">
            <h1>SignIn</h1>

             <div className="sign_in_input">
              <h3>Email</h3>
              <input type="email" placeholder="Type your Email"/>
              <i className="far fa-envelope fa-lg"></i>
            </div>
            <div className="sign_in_input">
              <h3>Password</h3>
              <input type="password" placeholder="Type your Password"/>
              <i className="far fa-keyboard fa-lg"></i>
            </div>

            <div class="text-right p-t-8 p-b-31">
						<Link exact to="/Forgotpassword">
            <a href="">
							Forgot password?
						</a>
            </Link>
					</div>
            
            <button className="sign_in_btn">Sign in</button>
            <h3 className="last">Or</h3>
            <div className="icons">
            <i class="fa fa-facebook-square fa-lg"></i>
            <i class="fa fa-twitter-square fa-lg"></i>
            <i class="fa fa-google-plus-square fa-lg"></i>
            </div>
            <p class="text-center text-muted small">Don't have an account?
             <Link exact to="/SignUp"><a href="">Sign up here!</a></Link></p>
        </div>
    </div>
    )
}

export default SignIn