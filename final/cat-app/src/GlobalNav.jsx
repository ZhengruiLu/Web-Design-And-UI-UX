import {useState} from 'react';
import Button from "./Button";
import "./nav.css";

function GlobalNav({className="", setPage}) {
    const [showMenu, setShowMenu] = useState(false);
    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }
    const menu = [
        {
        name: "Home",
        path: "/",
        },
        {
        name: "About",
        path: "/about.html",
        },
        {
        name: "Charity",
        path: "/charity.html",
        },
        {
        name: "Community",
        path: "/community.html",
        }
    ];

    const list = menu.map( item => {
        return (
            <li  key={item.name} className="global-nav__item">
                <a 
                className="global-nav__link" 
                href="" 
                onClick={(e)=>go(e,`${item.name}`)}>
                    {item.name}
                </a>
            </li>
        );
    });
    // toggle the class
    // if showMenu is T, ul will display
    // else, ul class toggled to hidden
    // menu--hidden in mobile - display none, else - flex
    const showMenuClass = showMenu ? '':'menu--hidden';

    return (
        <nav className={`menu ${className}`}>
            <div className='menu'>
            <Button className="menu__toggle button" onClick={() => setShowMenu(!showMenu)}>
                Menu
            </Button>
            <ul className={`menu ${showMenuClass}` }>
            { list }
            </ul>
            </div>
        </nav>
    );
}

export default GlobalNav;