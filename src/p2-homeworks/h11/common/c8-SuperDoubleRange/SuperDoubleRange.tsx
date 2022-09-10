import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";
import {Slider} from "@mui/material";

type OnChangeType = {
    value1: number;
    value2: number;
};
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: ({value1, value2}: OnChangeType) => void;
    value?: [number, number]
    min: number
    max: number
    value1: number;
    value2: number;

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, onChange, value,
        min, max, value1, value2,
        // min, max, step, disable, ...
        className,
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки
    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onChange(e) // сохраняем старую функциональность
    //
    //     onChangeRange && onChangeRange(+e.currentTarget.value)
    // }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`
    return (
        <>
            {/*<Slider*/}
            {/*    getAriaLabel={() => 'Minimum distance'}*/}
            {/*    value={min}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    valueLabelDisplay="auto"*/}
            {/*    getAriaValueText={valuetext}*/}
            {/*    disableSwap*/}
            {/*/>*/}
            {/*<Slider*/}
            {/*    getAriaLabel={() => 'Minimum distance shift'}*/}
            {/*    value={max}*/}
            {/*    onChange={handleChange2}*/}
            {/*    valueLabelDisplay="auto"*/}
            {/*    getAriaValueText={valuetext}*/}
            {/*    disableSwap*/}
            {/*/>*/}
            {/*<input*/}
            {/*    type={'range'}*/}
            {/*    min={min}*/}
            {/*    max={max}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    className={finalRangeClassName}*/}


            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}
        </>
    )
}

export default SuperDoubleRange
