import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

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
    const inputClass = name ? s.someClass : s.error

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.spanError}>{error}</span>
            <button disabled={!name} onClick={addUser}>add</button>
            <span>{totalUsers}</span>

        </div>
    )
}

export default Greeting
