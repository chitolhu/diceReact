import React, { Component } from 'react';

class Player extends Component {
constructor(props){
  super(props);

}

render(){
  return(
    <div className="player-0-panel active">
      <div className="player-name" id="name-0">{ this.props.playerName }</div>
      <div className="player-score player-score-left" id="score-0">43</div>
      <div className="player-current-box">
        <div className="player-current-label">Current</div>
        <div className="player-current-score" id="current-0">11</div>
      </div>
    </div>
  );
}
}

export default Player;
