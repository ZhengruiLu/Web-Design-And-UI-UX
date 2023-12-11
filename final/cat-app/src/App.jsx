import './App.css';
import { useState } from 'react';
import Home from './Home';
import About from './About';
import Charity from './Charity';
import Header from './Header';
import Footer from './Footer';
import GlobalNav from './GlobalNav';
import Community from './Community';
function App() {
  const [page, setPage] = useState('Home');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
    <a href="#main-content" className="skiplink">
        Skip to main content
      </a>
    <div className={`app ${theme}`}>

      <Header toggleTheme={toggleTheme}></Header>
      <GlobalNav setPage={setPage}></GlobalNav>
      {/* Your page components */}
      <div  id="main-content">
      {page === 'Home' && <Home setPage={setPage} />}
      {page === 'About' && <About />}
      {page === 'Charity' && <Charity />}
      {page === 'Community' && <Community/>}
      </div>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;