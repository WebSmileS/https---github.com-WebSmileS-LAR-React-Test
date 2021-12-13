import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from "./board/Board";

ReactDOM.render(
  <React.StrictMode>
    <Board listNumber={50} cardNumber={10}/>
  </React.StrictMode>,
  document.getElementById('main-panel')
);
