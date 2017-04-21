import React from 'react';

import style from './App.css';

console.log(style);

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}} className={style.title}>
        <h1>Hello World</h1>
      </div>);
  }
}