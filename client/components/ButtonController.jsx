import React from 'react';
import style from './Buttons.css';
import Button from './Button.jsx';

export default class Message extends React.Component {

  get buttons() {
    return this.props.buttons.map((_, i) => {
        return (
            <Button key={i} text={_.text} color={_.color}/>
        )
    })
  }


  render() {

    console.log(this.buttons);

    return (
      <div className={style.line}>
            <div className={style.controller}>
                {this.buttons}
            </div>
      </div>
    );
  }
}