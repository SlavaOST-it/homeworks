import React from 'react'
import s from "./Error.module.css"

function Error404() {

    return (
        <div className={s.error_page}>
            <div className={s.error_404}>Ooops... Error 404</div>
            <div className={s.error_text}>Sorry, but the page you are looking for doesn't exist.</div>
            <div>
                <img className={s.error_img} src={'https://cdn.wallpapersafari.com/84/92/kiyMfq.jpg'} alt={"error-img"}/>
            </div>
        </div>
    )
}

export default Error404
