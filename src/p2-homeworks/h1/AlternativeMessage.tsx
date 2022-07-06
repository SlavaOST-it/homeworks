import React from 'react'
import style from "./Alternativ.module.css";


type AlternativeMessageType ={
    avatar: string,
    name: string,
    message: string,
    time: string
}

function AlternativeMessage(props: AlternativeMessageType) {
    return (
        <div><div className={style.message}>


            <div className={style.messageBlock}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
            <div className={style.hvost}></div>
            <img className={style.logo} alt="logo" src={props.avatar}/>
        </div>

        </div>
    )
}

export default AlternativeMessage
