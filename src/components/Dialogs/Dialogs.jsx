import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogData = [
        {id: 1, name:'Dimych'},
        {id: 2, name:'Andrey'},
        {id: 3, name:'Sveta'},
        {id: 4, name:'Sasha'},
        {id: 5, name:'Viktor'},
        {id: 6, name:'Valera'},
        {id: 777, name:'SEMKA'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogData[0].name} id ={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id ={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id ={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id ={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id ={dialogData[4].id}/>
                <DialogItem name = {dialogData[5].name} id = {dialogData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message = {messagesData[0].message} id={messagesData[0].id}/>
                <Message message = {messagesData[1].message} id={messagesData[1].id}/>
                <Message message = {messagesData[2].message} id={messagesData[2].id}/>
                <Message message = {messagesData[3].message} id={messagesData[3].id}/>
                <Message message = {messagesData[4].message} id={messagesData[4].id}/>
                <Message message = {messagesData[5].message} id={messagesData[5].id}/>
            </div>
        </div>
    );
}

export default Dialogs;

