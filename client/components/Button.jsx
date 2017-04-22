import React from 'react';
import style from './Buttons.css';


export default class Button extends React.Component {

  
  get classes () {
      return [style.button, style[this.props.color]].join(' ');
  }

  render() {
    return (
      <div className={this.classes}>
         <p>{this.props.text}</p>
      </div>
    );
  }
}