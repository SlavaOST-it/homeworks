import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import ButtonMy from "../h4/common/c2-SuperButton/ButtonMy";

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (name: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))


    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>
            {mappedAffairs}
            <ButtonMy title={'All'} callBack={setAll} disable={false} className={''}/>
            <ButtonMy title={'High'} callBack={setHigh} disable={false} className={''}/>
            <ButtonMy title={'Middle'} callBack={setMiddle} disable={false} className={''}/>
            <ButtonMy title={'Low'} callBack={setLow} disable={false} className={''}/>
            {/*<button onClick={setAll}>All</button>*/}
            {/*<button onClick={setHigh}>High</button>*/}
            {/*<button onClick={setMiddle}>Middle</button>*/}
            {/*<button onClick={setLow}>Low</button>*/}
        </div>
    )
}

export default Affairs
