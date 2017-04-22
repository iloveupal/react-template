import React from 'react';
import style from './Messages.css';
import Message from './Message.jsx';

import ButtonController from './ButtonController.jsx';

export default class MessagesContainer extends React.Component {
    getMessages() {
        return [{
            id: 1,
            text: `Hello, i'm BrandZ Brian. Thanks for your interest, can I ask your name?`,
            out: false  ,
            type: 'message'
        },{
            id: 2,
            text: `Sure, I'm Jack`,
            out: true  ,
            type: 'message'
        },{
            id: 3,
            text: `Nice to talk to you Jack, would you like to know abound BrandZ?`,
            out: false  ,
            type: 'message'
        },{
            id: 4,
            text: `When was it started?`,
            out: true  ,
            type: 'message'
        },{
            id: 5,
            text: `I will have to get back to you on that. In the meantime I do have information on this year's BrandZ Top 100 brands. Maybe a particular brand?`,
            out: false ,
            type: 'message'
        },
        {
            id: 6,
            text: `When was it started?`,
            out: true,
            type: 'message'
        },{
            id: 7, 
            type: 'button', 
            buttons: [
                {
                    text: 'Yes',
                    color: 'green'
                },
                {
                    text: 'No',
                    color: 'gray'
                }
            ]
        }].map(_ => {
            if (_.type == 'message') {
                return (
                    <Message key={_.id} out={_.out} text={_.text}/>
                )
            } else if (_.type == 'button') {
                return (
                    <ButtonController key={_.id} buttons={_.buttons} />
                )
            }
            
        })
    }

    render() {
        return (
            <div className={style.container}>
                {this.getMessages()}
            </div>
        );
    }
}

