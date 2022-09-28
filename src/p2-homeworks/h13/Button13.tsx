import React from 'react';
import s from "../h4/common/c2-SuperButton/ButtonMy.module.css";

type ButtonType = {
    title: string,
    callBack: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disable?: boolean,
    className: string

}

export const Button13 = (props: ButtonType) => {

    const finalClassName = `${s.button} ${'' ? s.button : s.default} ${props.className}`
    return (
        <div>
            <button
                className={finalClassName}
                onClick={props.callBack}
                disabled={props.disable}
            >{props.title}</button>
        </div>
    )
};



