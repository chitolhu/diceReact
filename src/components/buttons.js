import React from 'react';

const Buttons = ({onRollDice, onNewGame, onHold}) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  return (
    <div>
    <button onClick={ () => onNewGame() }  className="btn-new"><i className="ion-ios-plus-outline"></i>New game</button>
    <button onClick={ () => onRollDice(diceValue) } className="btn-roll"><i className="ion-ios-loop"></i>Roll dice</button>
    <button className="btn-hold"><i className="ion-ios-download-outline"></i>Hold</button>
    </div>
  );
};

export default Buttons;
