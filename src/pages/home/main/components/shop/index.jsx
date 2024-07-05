import Button from "../../../../../components/buttons";
import Card from "./components/cart";
import ImgModel1 from "../../../images/shop-img1.jpg";
import ImgModel2 from "../../../images/shop-img2.jpg";
import Backpacks from "../../../images/shop-img3.jpg";
import Glasses from "../../../images/shop-img4.jpg";

import "./style.css";
import SmallCard from "./components/smallCard";
function Shop() {
  return (
    <main>
      <section class="home">
        <div class="container">
          <div class="home__wrapper">
            <div class="home__title-wrapper">
              <h2 class="home__title">perfect fitting custom</h2>
              <p class="home__text">men's suits & shirts</p>
              <Button text="READ MORE" />
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
            <Card img={ImgModel1} title="MEN SALE" text="Up to 50% OFF" />
            <Card img={ImgModel2} title="WOMEN'S" text="New collection" />
            <div class="shop__box-wrapper">
              <SmallCard
                img={Backpacks}
                title="MEN'S Backpacks"
                text="View Collection "
              />
              <SmallCard img={Glasses} title="MEN'Sunglasses" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Shop;
