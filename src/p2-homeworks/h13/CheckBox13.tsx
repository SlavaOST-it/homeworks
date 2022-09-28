import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from "../h4/common/c3-SuperCheckbox/SuperCheckbox.module.css";



// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const CheckBox13: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)// сделайте так чтоб работал onChange и onChangeChecked
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }
// export const CheckBox13 = () => {





    const finalInputClassName = `${s.checkbox} ${className ? className : ''}`
    return (
        <label>
            <input
                type={'checkbox'}
                // value={}
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label> // благодаря label нажатие на спан передастся в инпут
    );
};


export default CheckBox13