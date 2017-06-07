import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Player from './components/player'

const gameConf = {
  playerState: [
    {
      playerName: "Player 1",
      playerId: 1,
      globalScore: 0,
      currentScore: 0,
      active: true
    },
    {
      playerName: "Player 2",
      playerId: 2,
      globalScore: 0,
      currentScore: 0,
      active: false
    }
  ],
  diceValue: 1
};



class App extends Component {
  constructor(props){
    super(props);
    this.state = gameConf;

  }

  newGame(){

  }

  nextPlayer(){

  }

  rollDice(){

  }

  render(){
      let players = this.state.playerState;
      let dice = this.state.diceValue;
    return (
      <div className="wrapper clearfix">
        {
          players.map(player => {
            return <Player />
          })
        }
        <button className="btn-new"><i className="ion-ios-plus-outline"></i>New game</button>
        <button className="btn-roll"><i className="ion-ios-loop"></i>Roll dice</button>
        <button className="btn-hold"><i className="ion-ios-download-outline"></i>Hold</button>

        <img src="../images/huge-dice5.png" alt="Dice" className="dice" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
