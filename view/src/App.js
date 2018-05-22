import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BasicGen from "./pages/BasicGen";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MyProjects from "./pages/MyProjects";


function setBackground () {
  console.log( window.location.pathname );
  if ( RegExp( "(?:\/signup|\/signin|\/$)", "g" ).test( window.location.pathname ) ) {
    return {
      background: "url('/images/main-generator-wheel-noblur.jpg') no-repeat center center fixed",
      backgroundSize: "cover",
    }
  }
}

const App = () => (

  <Router>
    <div style={setBackground()}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={BasicGen} />
        <Route exact path="/myprojects" component={MyProjects} />
      </Switch>
    </div>
  </Router>

);

export default App;
