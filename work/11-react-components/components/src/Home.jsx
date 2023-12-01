import './App.css';

// change <main>
function Home({setPage}) {
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
      {/* <Card 
        cardNumber="card1"
        title="Flowers"
        pic={"image/cat1.jpg"}
        alt="cat1"
        text="Smell flowers outside."
        onReadMore="more"
        onClick={(e) => go(e, "About")}
      ></Card> */}
    <div className="card card1">
      <h3 className="card__title">
        Flowers
      </h3>
      <img src="image/cat1.jpg" alt="cat1"/>
      <p>Smell flowers outside.</p>
      <a className="card__more" href="" onClick={(e) => go(e, "About")}>To About Page</a>
  
    </div>

    <div className="card card2">
      <h3 className="card__title">
        Sing
      </h3>
      <img src="image/cat2.jpg" alt="cat2"/>
      <p>Sing with your cat.</p>
      <a className="card__more" href="#">Read More</a>
    </div>

    <div className="card card3">
      <h3 className="card__title">
        Decoration
      </h3>
      <img src="image/cat3.jpg" alt="cat3"/>
      <p>Decorate your cat with ribbons.</p>
      <a className="card__more" href="#">Read More</a>
    </div>
  </div>
  </main>
  );
}

export default Home;