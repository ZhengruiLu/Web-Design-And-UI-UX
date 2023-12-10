import './App.css';
import {useRef} from 'react';
import Modal from './Modal';
import './skiplink.css';
import Card from './Card';

function Home() {
  const modalRef = useRef();
  
  return (
    <>
    <main>
    <h2 className="main__title">
      Birthday Choices
    </h2>
    <div className="card__area">

    <Card
      title="Ball Ball Battle"
      imageSrc="image/cat1.jpg"
      altText="Colorful Balls Catching"
      description="Help your adorable feline friend catch as many colorful balls as possible!"
      onClick={() => modalRef.current.showModal()}
    />
    <Modal modalRef={modalRef}></Modal>

    <Card
      title="Sing"
      imageSrc="image/cat2.jpg"
      altText="Enchanting Serenade and KTV"
      description="Enchanting experiences like a personalized serenade ('Sing') and a private feline karaoke session ('KTV')."
      onClick={() => modalRef.current.showModal()}
    />
    <Modal modalRef={modalRef}></Modal>


    <Card
      title="Catnip Party"
      imageSrc="image/cat3.jpg"
      altText="Unforgettable Catnip Party and Treat Buffet"
      description="Unforgettable moments, including a delightful 'Catnip Party' and a lavish 'Treat Buffet.'"
      onClick={() => modalRef.current.showModal()}
    />
    <Modal modalRef={modalRef}></Modal>


    <Card
      title="Ball Ball Battle"
      imageSrc="image/cat1.jpg"
      altText="Colorful Balls Catching"
      description="Help your adorable feline friend catch as many colorful balls as possible!"
      onClick={() => modalRef.current.showModal()}
    />
    <Modal modalRef={modalRef}></Modal>

    <Card
      title="Sing"
      imageSrc="image/cat2.jpg"
      altText="Enchanting Serenade and KTV"
      description="Enchanting experiences like a personalized serenade ('Sing') and a private feline karaoke session ('KTV')."
      onClick={() => modalRef.current.showModal()}
    />
    <Modal modalRef={modalRef}></Modal>

    <Card
      title="Catnip Party"
      imageSrc="image/cat3.jpg"
      altText="Unforgettable Catnip Party and Treat Buffet"
      description="Unforgettable moments, including a delightful 'Catnip Party' and a lavish 'Treat Buffet.'"
      onClick={() => modalRef.current.showModal()}
    />
    <Modal modalRef={modalRef}></Modal>

  </div>
  </main>
  </>
  );
}

export default Home;