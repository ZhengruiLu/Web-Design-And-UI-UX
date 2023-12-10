import './App.css';
import {useRef} from 'react';
import Modal from './Modal';
import './skiplink.css';

function Home() {
  const modalRef = useRef();
  
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
    <button
    className="card__btn"
      type="button"
      onClick={() => modalRef.current.showModal()}
    >
      Order Now
    </button>
    <Modal modalRef={modalRef}></Modal>
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
    <button
    className="card__btn"
      type="button"
      onClick={() => modalRef.current.showModal()}
    >
      Order Now
    </button>
    <Modal modalRef={modalRef}></Modal>
  </div>

  <div className="card card3 common-card">
    <h3 className="card__title">Catnip Party</h3>
    <div className="card__content">
      <img src="image/cat3.jpg" alt="cat3" className="card__image" />
      <p className="card__text">
        Unforgettable moments, including a delightful "Catnip Party" and a lavish
        "Treat Buffet."
      </p>

      <button
    className="card__btn"
      type="button"
      onClick={() => modalRef.current.showModal()}
    >
      Order Now
    </button>
    <Modal modalRef={modalRef}></Modal>
    </div>
  </div>
  </div>
  </main>
  </>
  );
}

export default Home;