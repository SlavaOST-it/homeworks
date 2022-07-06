import React from 'react'
import style from './Message.module.css'

type MessageData = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageData) {
    return (
        <div className={style.message}>
            <img className={style.logo} alt="logo" src={props.avatar}/>
            <div className={style.hvost}></div>
            <div className={style.messageBlock}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
