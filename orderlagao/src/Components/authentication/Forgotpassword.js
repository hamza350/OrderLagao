import React from 'react'
import '../../styles/authentication/Forgotpassword.css'
function Forgotpassword() {

    return (
    <div className="forgot__password">
        <div className="forgot__form">
            <h1>Forgotpassword</h1>

             <div className="forgot__input">
              <h3>Email</h3>
              <input type="email" placeholder="Type your Email"/>
              <i className="far fa-envelope fa-lg"></i>
            </div>
           
            
            <button className="sign_in_btn">Submit</button>
           
        </div>
    </div>
    )
}

export default Forgotpassword