function NavBar({ setPage }) {
    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }
    return (
        <nav>
            <ul>
                <li>
                    <a href="" onClick={ (e) => go(e, "Home") }>
                    Home
                    </a>
                </li>
                <li>
                    <a href="" onClick={ (e) => go(e, "About") }>
                    About
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;