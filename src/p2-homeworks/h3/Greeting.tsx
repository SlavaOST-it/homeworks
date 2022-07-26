import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import ButtonMy from "../h4/common/c2-SuperButton/ButtonMy";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: (event: React.MouseEvent<HTMLButtonElement>) => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error ? s.error : s.someClass

    const callBackHandler = (event: React.MouseEvent<HTMLButtonElement>)=>{
        addUser(event)
    }

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <ButtonMy title={"Add"} callBack={callBackHandler} disable={!name} className={''}/>
            {/*<button disabled={!name} onClick={addUser}>add</button>*/}
            <span>{totalUsers}</span>
            <div className={s.spanError}>{error}</div>
        </div>
    )
}

export default Greeting
