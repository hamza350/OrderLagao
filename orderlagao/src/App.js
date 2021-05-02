import React from 'react'
import SignUp from './Components/authentication/SignUp';
import SignIn from './Components/authentication/SignIn';
import Forgotpassword from './Components/authentication/Forgotpassword';
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";

export default function App() {
 
  return (
    <Router>
    
     
   <Switch>
   <Route exact path= "/" component ={SignIn}  />
     <Route exact path= "/SignUp" component ={SignUp} />
     <Route exact path= "/Forgotpassword" component ={Forgotpassword} />
     
   </Switch>
   </Router>
  

  )

}
