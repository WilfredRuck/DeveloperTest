import React from 'react';
import Data from './Data/data';
import './App.css';
import logo from './Assets/logo.png'
import {Link} from "react-router-dom";

class App extends React.Component {

  render() {
    const subscriptions = Object.values(Data).map((sub, idx) => {
      return <li key={idx}>         
        <div className="subscription">
          <h2>{sub.name}</h2>
          <p> 12 Month Subscription</p>
          <p> {sub.price} </p>
          <p> Inludes Certificate of Completion </p>

          <ul className="cme">
            <li> {sub.credits["do"]} CME credits for DO </li>
            <li> {sub.credits["pa"]} CME credits for PA </li>
            <li> {sub.credits["nurse"]} CME credits for Nurses </li>
          </ul>
        </div>
        <Link to={`/select/${idx}`}><button> Select </button></Link>
      </li>
    });
    return (
      <div className="App">
        <div className="navbar">
          <img src={logo} height="30px" width="50px" alt="logo"></img>
        </div>

        <div className="main-content">
          <h1> Subscribe to Canopy Learn</h1>

          <ul className="subscriptions">
            {subscriptions}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
