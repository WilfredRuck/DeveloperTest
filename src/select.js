import React from 'react';
import Data from './Data/data';


class Select extends React.Component {
  render() {
    const sub = this.props.match.params.subId;
    const subscription = Object.values(Data)[sub];
    return(
      <div className="selected-subscription">
        <h2>{subscription.name}</h2>
        <p> 12 Month Subscription</p>
        <p> {subscription.price} </p>
        <p> Inludes Certificate of Completion </p>

        <ul className="cme">
          <li> {subscription.credits["do"]} CME credits for DO </li>
          <li> {subscription.credits["pa"]} CME credits for PA </li>
          <li> {subscription.credits["nurse"]} CME credits for Nurses </li>
        </ul>
      </div>
    )
  }
}

export default Select;