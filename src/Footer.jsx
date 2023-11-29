import React from "react";
import LibraryLogo from "./assets/book2.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/" className="footer__logo--link">
            <div class="logo__holder--white">
                <img src={LibraryLogo} class="logo white" alt="" />
              <h5 class="logo__text--white">e-lib</h5>
            </div>
          </a>
          <div className="footer__list">
            <a href="/" className="footer__link">Home</a>
            <span className="footer__link no-cursor">About</span>
            <a href="/books" className="footer__link">Books</a>
            <a href="/cart" className="footer__link">Cart</a>
          </div>
          <div className="footer__copyright">Copyright &copy; 2023 e-lib</div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
