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
        const [clicked, setClicked] = useState(false);

        const handleClick = (event) => {
            // use boolean handle reminder message
            setClicked(true);

            //invoke onClick action
            if (onClick) {
                onClick(); 
            }

            //Clicking/submitting with ANY of the above options should NOT navigate the page
            event.preventDefault(); 

            // Set a timeout to reset the clicked state after 3 seconds
            setTimeout(() => {
                setClicked(false);
            }, 3000);
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
            {children}{clicked ? ' Button Is Clicked! ' : ''}
        </button>
    );
}

export default Button;