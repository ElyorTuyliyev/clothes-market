import "./style.css";

function SmallCard(props) {
  return (
    <div class="shop__box-small">
      <img className="smallCard__img" src={props.img} alt={props.alt} />
      <div className="smallCard__text-wrapper">
        <h2 className="smallCard__title">{props.title}</h2>
        <p className="smallCard__text">{props.text}</p>
      </div>
    </div>
  );
}

export default SmallCard;
