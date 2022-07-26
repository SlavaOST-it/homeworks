import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Pages.module.css"


export function Header() {
    return (
        <div className={s.header_links}>
            <NavLink
                to={PATH.PRE_JUNIOR}
                className={({isActive})=> isActive ? s.activeLink : s.link}>Pre-Junior</NavLink>
            <span className={s.ver_line}>|</span>
            <NavLink
                to={PATH.JUNIOR}
                className={({isActive})=> isActive ? s.activeLink : s.link}>Junior</NavLink>
            <span className={s.ver_line}>|</span>
            <NavLink
                to={PATH.JUNIOR_PLUS}
                className={({isActive})=> isActive ? s.activeLink : s.link}>Junior+ </NavLink>

                <img className={s.block} src={'https://www.vippng.com/png/full/78-788602_clipart-freeuse-menu-png-icon-free-download-file.png'} alt={'btn'}/>


        </div>
    )
}


