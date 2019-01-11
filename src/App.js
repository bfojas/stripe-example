import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {amount:100}
    this.onToken = this.onToken.bind(this)
  }
  onToken(token){
    console.log(token)
    const {amount} = this.state
    axios.post('/stripe', {token, amount})
    .then(res=>alert('payment successful')
    )
  }

  render() {
  const {amount} = this.state
    return (
      <div className="App">
        <input type="text" value={amount} 
                        onChange={e=>this.setState({amount:e.target.value})} />
        <StripeCheckout
                    ComponentClass = "stripe"
                    email = "test@test.com"
                    amount={amount}
                    description=""
                    token = {this.onToken}
                    allowRememberMe={false}
                    //Publishable key
                    stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                />
      </div>
    );
  }
}

export default App;
