import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import lottery from './lottery';
import web3 from './web3';

class Apps extends Component {

  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.listEntries().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    console.log('players returned are ', players);
    this.setState({
      manager,
      players,
      balance
    });

  }

  enterLottery = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({
      message: 'Transaction being processed, please be patient'
    });
    await lottery.methods.enterDraw().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });
    this.setState({
      message: 'Transaction successfull'
    });
  };


  render() {
    return ( <
      div >
      <
      h2 > Lottery contract < /h2> <
      p > The contract is managed by {
        this.state.manager
      } < /p> <
      p > There are currently {
        this.state.players.length
      }
      competing to win {
        web3.utils.fromWei(this.state.balance, 'ether')
      }
      ether! < /p> <
      form onSubmit = {
        this.enterLottery
      } >
      <
      h1 > Wanna
      try your luck ? < /h1> <
      label > Amount of Ether to Enter < /label> <
      input value = {
        this.state.value
      }
      onChange = {
        (event) => this.setState({
          value: event.target.value
        })
      } > < /input> <
      button > Enter < /button> <
      /form> <
      p > {
        this.state.message
      } < /p> <
      /div>

    );
  }
}

export default Apps;
