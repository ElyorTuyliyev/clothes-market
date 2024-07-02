import "./style.css";
import Header__logo from "../images/header-logo.png";
import Icon__search from "../images/icon-search.png";
import Icon__bars from "../images/icon-bars.png";
import Icon__shop from "../images/icon-shop.png";
import List from "./Components/list";
import "./script";

function Header() {
  const home = [
    {
      title: "home 1",
    },
    {
      title: "home 2",
    },
    {
      title: "home 3",
    },
    {
      title: "home 4",
    },
    {
      title: "home 5",
    },
    {
      title: "home 6",
    },
    {
      title: "home 7",
    },
    {
      title: "home 8",
    },
    {
      title: "home 9",
    },
    {
      title: "home 10",
    },
  ];

  const blog = [
    {
      title: "BLOG details ",
    },
    {
      title: "BLOG FULLWIDTH",
    },
    {
      title: "BLOG SIDEBAR",
    },
  ];

  const pages = [
    {
      title: "About us",
    },
    {
      title: "servises",
    },
    {
      title: "frequently",
    },
    {
      title: "contact",
    },
    {
      title: "login",
    },
    {
      title: "error 404",
    },
  ];
  const shop = [
    {
      title: "SHOP LAYOUTES ",
    },
    {
      title: "FULL WIDTH ",
    },
    {
      title: "RIGHT SIDEBAR ",
    },
    {
      title: "RIGHT SIDEBAR LIST",
    },
    {
      title: "LIST VIEW ",
    },
    {
      title: "SHOP LAYOUTES ",
    },
  ];
  return (
    <header class="header">
      <nav class="nav">
        <div class="container">
          <div class="header__wrapper">
            <a href="#">
              <img
                class="header__logo-img"
                src={Header__logo}
                alt="shop-logo"
              />
            </a>

            <ul class="header__links-list-wrapper">
              <li class="header__links-list">
                <a class="header__links header__link-home-bc" href="#">
                  HOME <i class="fa fa-angle-down"></i>
                </a>
                <ul class="header__links-hidden-wrapper">
                  {home.map((item) => (
                    <List title={item.title} />
                  ))}
                </ul>
              </li>
              {/* ------------------------------------------------------------------------------- */}
              <li class="header__links-list">
                <a class="header__links" href="#">
                  SHOP <i class="fa fa-angle-down"></i>
                </a>
                <div class="header__links-hidden-wrapper header__links-hidden-shop-wrapper">
                  <div class="header__link-shop">
                    {shop?.map((item) => (
                      <List title={item.title} />
                    ))}
                  </div>
                  <div class="header__link-shop">
                    {shop?.map((item) => (
                      <List title={item.title} />
                    ))}
                  </div>
                  <div class="header__link-shop">
                    {shop.map((item) => (
                      <List title={item.title} />
                    ))}
                  </div>
                </div>
              </li>
              {/* ---------------------------------------------------------------------------------------- */}
              <li class="header__links-list">
                <a class="header__links" href="#">
                  BLOG <i class="fa fa-angle-down"></i>
                </a>
                <ul class="header__links-hidden-wrapper">
                  {blog.map((item) => (
                    <List title={item.title} />
                  ))}
                </ul>
              </li>
              <li class="header__links-list">
                <a class="header__links" href="#">
                  PAGES <i class="fa fa-angle-down"></i>
                </a>
                <ul class="header__links-hidden-wrapper">
                  {pages.map((item) => (
                    <List title={item.title} />
                  ))}
                </ul>
              </li>
              <li class="header__links-list">
                <a class="header__links" href="#">
                  ABOUT US
                </a>
              </li>
              <li class="header__links-list">
                <a class="header__links" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>

            <div class="header__line"></div>
            <div class="header__shops">
              <div class="header__search-link" onclick="searchOnclick()">
                <img src={Icon__search} alt="icon-search" />
                <div class="header__search-hidden-wrapper">
                  <div id="header__search-onclick" class="header__search-home">
                    <input
                      class="header__search-hidden-input"
                      type="text"
                      placeholder="Search entire store here . . ."
                    />
                    <button class="header__search-hidden-button">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="header__bars-link">
                <button id="header__bars-btn" onclick="hideBarsMenu()">
                  <img src={Icon__bars} alt="icon-bars" />
                </button>
                <div
                  id="header__bars-link-home"
                  class="header__bars-link-wrapper"
                >
                  <a href="#">MY ACCOUNT</a>
                  <a href="#">SHOPPING CART</a>
                  <a href="#">CHECKOUT</a>
                  <div class="bars__line"></div>
                  <h4 class="header__bars-title">CURRENCY</h4>
                  <a href="#">EURO</a>
                  <a href="#">POUND STERLING</a>
                  <a href="#">US DOLLAR </a>
                  <div class="bars__line"></div>
                  <h4 class="header__bars-title">LANGUAGE</h4>
                  <a href="#">
                    <img src="../../imgs/language-Eng.png" alt="language-Eng" />
                    ENGLISH
                  </a>
                  <a href="#">
                    <img
                      src="../../imgs/language-FRANCH.png"
                      alt="language-FRENCH"
                    />
                    FRENCH
                  </a>
                </div>
              </div>
              <div class="header__shop-link">
                <a href="#">
                  <img src={Icon__shop} alt="shop-mg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
