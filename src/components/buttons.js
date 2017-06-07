import React from 'react';

const Buttons = (props) => {
  return (
    <div>
    <button className="btn-new"><i className="ion-ios-plus-outline"></i>New game</button>
    <button className="btn-roll"><i className="ion-ios-loop"></i>Roll dice</button>
    <button className="btn-hold"><i className="ion-ios-download-outline"></i>Hold</button>
    </div>
  );
};

export default Buttons;
