import React from 'react';
import style from './App.css';
import Header from './Header.jsx';
import MessagesContainer from './MessagesContainer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        <MessagesContainer />
      </div>
    );
  }
}