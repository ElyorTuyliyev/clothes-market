import Person from "../images/icon-search.png";

import "./style.css";
function Main() {
  return (
    <main>
      <section class="home">
        <div class="container">
          <div class="home__wrapper">
            <div class="home__title-wrapper">
              <h2 class="home__title">perfect fitting custom</h2>
              <p class="home__text">men's suits & shirts</p>
              <button class="home__btn">read more</button>
            </div>
          </div>
          <div class="home__layout-btns-wrapper">
            <button class="home__layout-btn"></button>
            <button class="home__layout-btn"></button>
          </div>
        </div>
      </section>
      <section class="shop">
        <div class="container">
          <div class="shop__wrapper">
            <div class="shop__box-wrapper">
              <img src={Person} alt="person" />
              <div class="shop__box-text-wrapper">
                <h3 class="shop__box-title">MEN SALE</h3>
                <p class="shop__box-text">
                  Up to <span> 50%</span> OFF
                </p>
              </div>
            </div>
            <div class="shop__box-wrapper">
              <img src="./imgs/shop-img1.jpg" alt="person" />
              <div class="shop__box-text-wrapper">
                <h3 class="shop__box-title">MEN SALE</h3>
                <p class="shop__box-text">
                  Up to <span> 50%</span> OFF
                </p>
              </div>
            </div>
            <div class="shop__box-wrapper">
              <div class="shop__box-small"></div>
              <div class="shop__box-small"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
