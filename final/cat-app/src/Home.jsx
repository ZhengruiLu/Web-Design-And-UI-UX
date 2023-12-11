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
      title="Feline Photoshoot"
      imageSrc="image/cat4.jpg"
      altText="Adorable Cat Photoshoot"
      description="Capture the purr-fect moments with a professional feline photoshoot. Dress your cat in cute costumes and create lasting memories."
      onClick={() => modalRef.current.showModal()}
    />
    <Modal modalRef={modalRef}></Modal>

    <Card
      title="Paw-some Playground"
      imageSrc="image/cat5.jpg"
      altText="Interactive Playground for Cats"
      description="Give your cat the gift of an interactive playground. Watch them play and explore different toys, tunnels, and climbing structures designed for feline fun."
      onClick={() => modalRef.current.showModal()}
    />
    <Modal modalRef={modalRef}></Modal>

    <Card
      title="Gourmet Cat Cake"
      imageSrc="image/cat6.jpg"
      altText="Delicious Cat-friendly Cake"
      description="Celebrate your cat's birthday with a gourmet cat cake. Made with cat-friendly ingredients, it's a tasty treat your feline friend will love. Add a special candle for the birthday purr-son!"
      onClick={() => modalRef.current.showModal()}
    />
    <Modal modalRef={modalRef}></Modal>
  </div>
  </main>
  </>
  );
}

export default Home;