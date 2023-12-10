/* eslint-disable react/prop-types */
// Card.jsx
import Modal from './Modal';
const Card = ({ title, imageSrc, altText, description, onClick }) => {
  return (
    <div className="card common-card">
      <h3 className="card__title">{title}</h3>
      <div className="card__content">
        <img src={imageSrc} alt={altText} className="card__image" />
        <p className="card__text">{description}</p>
      </div>
      <button className="card__btn" type="button" onClick={onClick}>
        Order Now
      </button>
      <Modal></Modal>
    </div>
  );
};

export default Card;
