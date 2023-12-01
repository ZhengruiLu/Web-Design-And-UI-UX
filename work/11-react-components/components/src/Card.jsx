function Card(
    cardNumber, title, pic, 
    alt, text, onReadMore, onClick) {
    return (
      <div className={`card__${cardNumber}`}>
        <h3 className="card__title">${title}</h3>
        <img src={pic} alt={alt} />
        <p>{text}</p>
        <button 
          className={`card__${onReadMore}`}
          onClick={onClick}
          aria-label={`Read More About ${title}`}
          >Read More</button>
      </div>
    )
  }

export default Card;