import React from 'react'
import '../button/Button.css'

function Button({children, BtnStyle, BtnSize, onClick}) {
    return (
        <div>
            <button className={`btn ${BtnStyle} ${BtnSize}`} onClick={onClick} >{children}</button>
        </div>
    )
}

export default Button
