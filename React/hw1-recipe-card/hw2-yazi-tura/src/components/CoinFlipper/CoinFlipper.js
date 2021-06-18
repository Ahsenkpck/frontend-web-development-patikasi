import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "tura",
      flipping: false,
      total : {
        totalSide : 0,
        turaSide : 0,
        yaziSide : 0
      }
    };
  }
  handleClick = () => {
    this.state.total.totalSide++;
    let randomSide = Math.floor(Math.random() * 2);

    setTimeout(() =>{
      if(randomSide > 0){
        this.setState({side : "yazi"})
        this.state.total.yaziSide++;
      }else{
        this.setState({side : "tura"})
        this.state.total.turaSide++;
      }
    },500)

    this.setState({ flipping: true });
   
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.total.totalSide} </strong>
          atıştan
          <strong> {this.state.total.turaSide} </strong>ü tura
          <strong> {this.state.total.yaziSide} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
