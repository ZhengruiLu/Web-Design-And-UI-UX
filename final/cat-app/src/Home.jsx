import './App.css';
import Button from './Button';
import {useRef, useState} from 'react';
import Modal from './Modal';
import './skiplink.css';

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
    <>
    <main>
    <h2 className="main__title">
      Birthday Choices
    </h2>
    <div className="card__area">

  <div className="card card1">
    <h3 className="card__title">Ball Ball Battle</h3>
    <div className="card__content">
      <img src="image/cat1.jpg" alt="cat1" className="card__image" />
      <p className="card__text">
        Help your adorable feline friend catch as many colorful balls as possible!
      </p>
    </div>
    <Button
    className="card__btn"
      type="button"
      visual="button"
      onClick={() => showMessage("Button Clicked!")}
    >
      Read More
    </Button>
  </div>

  <div className="card card2 common-card">
    <h3 className="card__title">Sing</h3>
    <div className="card__content">
      <img src="image/cat2.jpg" alt="cat2" className="card__image" />
      <p className="card__text">
        Enchanting experiences like a personalized serenade ("Sing") and a private
        feline karaoke session ("KTV").
      </p>
    </div>
    <Button
          className="card__btn"
        type="button"
        visual="button"
        onClick={() => showMessage("Button Clicked!")}
      >
        Read More
      </Button>
  </div>

  <div className="card card3 common-card">
    <h3 className="card__title">Catnip Party</h3>
    <div className="card__content">
      <img src="image/cat3.jpg" alt="cat3" className="card__image" />
      <p className="card__text">
        Unforgettable moments, including a delightful "Catnip Party" and a lavish
        "Treat Buffet."
      </p>
      <p>{reminder}</p>
      <Button
        className="card__btn" 
        type="button"
        visual="button"
        onClick={() => showMessage("Button Clicked!")}
      >
        Read More
      </Button>
    </div>
  </div>
  </div>
  </main>
  </>
  );
}

export default Home;