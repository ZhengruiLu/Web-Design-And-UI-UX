import {useState} from 'react';

function GlobalNav({className, setPage}) {
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
        name: "Cats",
        path: "/cats.html",
        },
    ];

    const list = menu.map( item => {
        return (
            <li  key={item.id} className="global-nav__item">
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
            <button className="menu__toggle" onClick={() => setShowMenu(!showMenu)}>
                Menu
            </button>
            <ul className={`menu ${showMenuClass}`}>
            { list }
            </ul>
        </nav>
    );
}

export default GlobalNav;