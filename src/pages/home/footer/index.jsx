import "./style.css";
import LogoFooter from "../images/footer-logo.png";
import Pay from "../images/paypal.jpg";
import Pay1 from "../images/paypal1.jpg";
import Pay2 from "../images/paypal2.jpg";
import Pay3 from "../images/paypal3.jpg";
import Pay4 from "../images/paypal.jpg";
import Pay5 from "../images/paypal5.jpg";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer__wrapper">
          <ul class="footer__list-wrapper footer__list-logo-wrapper">
            <li>
              <img src={LogoFooter} alt="logo" />
            </li>
            <li class="footer__text">
              We are a team of designers and developers that create high quality
              HTML Template, Woocommerce, Shopify Theme.
            </li>
            <li class="footer__text">
              Address: 49 Park Avenue, East 58st Street, Apt. 50 New York NY
              10025
              <span>
                Email: <a href="#">https://hasthemes.com/contact-us/</a>
              </span>
              <span>
                Phone: <a href="#">+1 250 3678 64587</a>
              </span>
            </li>
          </ul>
          <ul class="footer__list-wrapper">
            <li>
              <h3 class="footer__list-title">CUSTOMER SERVICE</h3>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Delivery Information</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
          <ul class="footer__list-wrapper">
            <li>
              <h3 class="footer__list-title">MY ACCOUNT</h3>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Wish List </a>
            </li>
            <li>
              <a href="#">Gift Certificates </a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
          <ul class="footer__list-wrapper">
            <li>
              <h3 class="footer__list-title">NEWSLETTER</h3>
            </li>
            <li class="footer__inp-wrapper">
              <input
                class="footer__inp-email"
                type="email"
                placeholder="Enter you email address"
              />
              <a href="#">
                <i class="fa-solid fa-envelope email__icon"></i>
              </a>
            </li>
            <li>
              <h3 class="">FOLLOW US ON</h3>
            </li>
            <li>
              <div class="footer__link-wrapper">
                <a class="footer__link" href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a class="footer__link" href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a class="footer__link" href="#">
                  <i class="fa-solid fa-wifi"></i>
                </a>
                <a class="footer__link" href="#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a class="footer__link" href="#">
                  <i class="fa-brands fa-google"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer__line"></div>
        <div class="footer__map-wrapper">
          <div class="footer__map">
            <a href="#">CONTACT US </a>
            <a href="#">SITE MAP</a>
            <a href="#">SPECIALS</a>
            <a href="#">RETURNS</a>
          </div>
        </div>
        <p class="footer__copyright">
          Copyright © 2023 <a href="#">Presiden</a> All Right Reserved.
        </p>
        <div class="footer__brand-wrapper">
          <a href="#">
            <img src={Pay} alt="money" />{" "}
          </a>
          <a href="#">
            <img src={Pay1} alt="money" />{" "}
          </a>
          <a href="#">
            <img src={Pay2} alt="money" />{" "}
          </a>
          <a href="#">
            <img src={Pay3} alt="money" />{" "}
          </a>
          <a href="#">
            <img src={Pay4} alt="money" />{" "}
          </a>
          <a href="#">
            <img src={Pay5} alt="money" />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
