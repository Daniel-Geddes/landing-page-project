import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
        <Redirect to="/home" />
        </Route>
        <Route path = "/home" exact component={Home}/>
        <Route path = "/products" exact component={Products} />
        <Route path = "/services" exact component={Services} />
        <Route path = "/sign-up" exact component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
