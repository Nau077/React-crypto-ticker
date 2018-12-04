import React, { Component } from 'react';
import './Tickers.css';

class HandleClick extends React.Component {
          
    handleClick() {
        const overlay = document.querySelector('.overlay');
        overlay.style.display = "flex";    
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={(e) => this.handleClick(e) } className={"confirm-btn yes-btn"}>
          Click me!
        </button>
      );
    }
}



export default HandleClick;

 