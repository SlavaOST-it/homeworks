import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";



const themes: string[] = ['default', 'dark', 'red', 'green'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.isTheme);
    const dispatch = useDispatch()

    const onChangeOption = (themes: string)=>{
        dispatch(changeThemeAC(themes))
    }


    return (
        <div className={s[theme]}>
            <hr/>
            <div className={s[theme + '-text']}>
                homeworks 12
            </div>

            {/*should work (должно работать)*/}
            <SuperRadio
                name={'box'}
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}
            />

            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
