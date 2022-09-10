import React from 'react'
import {AffairType} from "./HW2";
import ButtonMy from "../h4/common/c2-SuperButton/ButtonMy";



type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <span>{props.affair.name}</span>
            <span>{props.affair.priority}</span>

            <ButtonMy title={'x'} callBack={deleteCallback} disable={false} className={''}/>
            {/*<button onClick={deleteCallback}>X</button>*/}
        </div>
    )
}

export default Affair
