import { useState } from 'react';

function Button({
    children,
    className,
    disabled=false,
    onClick,
    type="button",
    visual="button",
    }) 
    {

        const handleClick = (event) => {
        //     //invoke onClick action
            if (onClick) {
                onClick(); 
            }
        };

        let buttonClass = "button";
        if (visual === "link") {
            buttonClass = "button-link";
        }
        return (
        <button
            className={`${buttonClass} ${className}`}
            disabled={disabled} type={type}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;