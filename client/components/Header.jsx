import React from 'react';
import style from './Header.css';
import logo from '../assets/logo.png';

export default class Header extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <img src={logo} alt=""/>
      </div>
    );
  }
}