import React, { Component } from 'react';

class Player extends Component {
constructor(props){
  super(props);

}

render(){
  return(
    <div className={`player-0-panel ${this.props.isActive ? 'active' : ''}`}>
      <div className="player-name" >{ this.props.playerName }</div>
      <div className={`player-score ${this.props.pId === 1 ? 'player-score-right' : 'player-score-left'}`} >{ this.props.globalScore }</div>
      <div className="player-current-box">
        <div className="player-current-label">Current</div>
        <div className="player-current-score" id="current-0">{ this.props.roundScore }</div>
      </div>
    </div>
  );
}
}

export default Player;
