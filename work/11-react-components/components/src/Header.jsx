import GlobalNav from './GlobalNav';

function Header() {
    return (
        <header className="header"> 
            <div className="header-logo">
                  <img src="public/image/logo.jpg" alt="logo"/>
                  <h1>How to Throw a Birthday Party? ...For Your Cat</h1>
            </div>
            <GlobalNav></GlobalNav>
        </header>
    )
}

export default Header;