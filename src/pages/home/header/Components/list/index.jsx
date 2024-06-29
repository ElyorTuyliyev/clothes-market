function List(props) {
  return (
    <li class="header__link-li">
      <a class="header__link-hidden" href="#">
        {props.title}
      </a>
    </li>
  );
}

export default List;
