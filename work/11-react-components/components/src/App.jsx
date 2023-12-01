import './App.css';
import { useState } from 'react';
import Home from './Home';
import About from './About';
import Cat from './Cat';
import Header from './Header';
import Footer from './Footer';
import GlobalNav from './GlobalNav';
/*
app
useState: page, setPage(home)
  header
    globalNav setPage
      link: 
        home 
        about 
        cats
  mainArea
  footer
*/
function App() {
  const [page, setPage] = useState('Home');

  return (
    <div className='app'>
      <Header></Header>
        <GlobalNav setPage={setPage}></GlobalNav>
        {page === 'Home' && <Home setPage={setPage}/>}
        {page === 'About' && <About/>}
        {page === 'Cats' && <Cat/>}
      <Footer></Footer>
    </div>
  );
}

export default App;
