import React from 'react';

const Spinner = ({ loadingMessage }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{loadingMessage}</div>
    </div>
  );
};

Spinner.defaultProps = {
  loadingMessage: 'Please allow location access',
};

export default Spinner;
