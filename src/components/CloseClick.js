import React, { Component } from 'react';
 import './Tickers.css';

class CloseClick extends React.Component{
   
    closeClick() {
        const overlay2 = document.querySelector('.overlay');
            overlay2.style.display = "none";
    }    
    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <button onClick={(e) => this.closeClick(e)} className={"confirm-btn yes-btn"}>
            Sure
            </button>
        );
      }
}


export default CloseClick;
