import './App.css';
import { useState } from 'react';
import Home from './Home';
import About from './About';
import Cat from './Cat';
import Header from './Header';
import Footer from './Footer';
import GlobalNav from './GlobalNav';

function App() {
  const [page, setPage] = useState('Home');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme}></Header>
      <GlobalNav setPage={setPage}></GlobalNav>
      {/* Your page components */}
      {page === 'Home' && <Home setPage={setPage} />}
      {page === 'About' && <About />}
      {page === 'Cats' && <Cat />}
      <Footer></Footer>
    </div>
  );
}

export default App;