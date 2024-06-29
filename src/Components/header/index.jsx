import "./style.css";
import Header__logo from "../images/header-logo.png";
import Icon__search from "../images/icon-search.png";
import Icon__bars from "../images/icon-bars.png";
import Icon__shop from "../images/icon-shop.png";
function Header() {
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
                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      home shop 1{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      home shop 2{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      home shop 3{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      home shop 4{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      home shop 5{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      home shop 6{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      home shop 7{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      home shop 8{" "}
                    </a>
                  </li>
                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      home shop 9{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li class="header__links-list">
                <a class="header__links" href="#">
                  SHOP <i class="fa fa-angle-down"></i>
                </a>
                <div class="header__links-hidden-wrapper header__links-hidden-shop-wrapper">
                  <div class="header__link-shop">
                    <a href="#" class="header__link-shop-title">
                      SHOP LAYOUTES
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      FULL WIDTH
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      FULL WIDTH LIST
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      RIGHT SIDEBAR
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      RIGHT SIDEBAR LIST
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      LIST VIEW
                    </a>
                  </div>
                  <div class="header__link-shop">
                    <a href="#" class="header__link-shop-title">
                      SHOP LAYOUTES
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      FULL WIDTH
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      FULL WIDTH LIST
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      RIGHT SIDEBAR
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      RIGHT SIDEBAR LIST
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      LIST VIEW
                    </a>
                  </div>
                  <div class="header__link-shop">
                    <a href="#" class="header__link-shop-title">
                      SHOP LAYOUTES
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      FULL WIDTH
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      FULL WIDTH LIST
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      RIGHT SIDEBAR
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      RIGHT SIDEBAR LIST
                    </a>
                    <a class="header__link-hidden-shop" href="#">
                      LIST VIEW
                    </a>
                  </div>
                </div>
              </li>
              <li class="header__links-list">
                <a class="header__links" href="#">
                  BLOG <i class="fa fa-angle-down"></i>
                </a>
                <ul class="header__links-hidden-wrapper">
                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      BLOG details 1{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      home shop 2{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      home shop 3{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li class="header__links-list">
                <a class="header__links" href="#">
                  PAGES <i class="fa fa-angle-down"></i>
                </a>
                <ul class="header__links-hidden-wrapper">
                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      {" "}
                      about us
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      servises{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      frequently{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      contact
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      login{" "}
                    </a>
                  </li>

                  <li class="header__link-li">
                    <a class="header__link-hidden" href="#">
                      error 404{" "}
                    </a>
                  </li>
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
