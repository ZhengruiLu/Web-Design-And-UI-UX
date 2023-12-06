import './App.css';
import Button from './Button';
import {useRef, useState} from 'react';
import Modal from './Modal';

function Home({setPage}) {
  const modalRef = useRef();
  
//  pass a function as a prop to handle onClick for the generated button
  const [reminder, setReminder] = useState("");

  function showMessage(message) {
    setReminder(message);
  }


  function go(event, page) {
    event.preventDefault();
    setPage(page);
  }

  return (
    <main>
    <h2 className="main__title">
      Birthday Choices
    </h2>
    <div className="card__area">

    <div className="card card1">
      <h3 className="card__title">
        Flowers
      </h3>
      <img src="image/cat1.jpg" alt="cat1"/>
      <p>Smell flowers outside.</p>
      <Button type="button" visual="button" onClick={()=>showMessage("Button Clicked!")}>Read More</Button>

      {/* <a className="button-link" onClick={(e) => go(e, "About")}>Link to About Page</a> */}
    </div>

    <div className="card card2">
      <h3 className="card__title">
        Sing
      </h3>
      <img src="image/cat2.jpg" alt="cat2"/>
      <p>Sing with your cat.</p>
      <Button type="button" visual="button" onClick={()=>showMessage("Button Clicked!")}>Read More</Button>

      {/* <Button type="button" visual="link" onClick={() => modalRef.current.showModal()}>Register Form</Button> */}
      {/* <Modal onClick={() => modalRef.current.close()}></Modal> */}
    </div>

    <div className="card card3">
      <h3 className="card__title">
        Decoration
      </h3>
      <img src="image/cat3.jpg" alt="cat3"/>
      <p>Decorate your cat with ribbons.</p>
      <p>{reminder}</p>
      <Button type="button" visual="button" onClick={()=>showMessage("Button Clicked!")}>Read More</Button>
    </div>
  </div>
  </main>
  );
}

export default Home;