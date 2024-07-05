function Card(props) {
  return (
    <div class="shop__box-wrapper">
      <img src={props.img} alt="person" />
      <div class="shop__box-text-wrapper">
        <h3 class="shop__box-title">{props.title}</h3>
        <p class="shop__box-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
