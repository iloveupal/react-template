import React from 'react';
import style from './Messages.css';

import tailIn from '../assets/tail-in.svg';
import tailOut from '../assets/tail-out.svg';

export default class Message extends React.Component {
  get classes () {
    return [style.message, this.props.out ? style.out : style.in].join(' ');
  }

  render() {
    return (
      <div className={style.line}>
        <div className={this.classes}>
          <p>{this.props.text}</p>
          <img src={this.props.out ? tailOut : tailIn} className={this.props.out ? style.tailOut : style.tailIn}></img>
        </div>
      </div>
    );
  }
}