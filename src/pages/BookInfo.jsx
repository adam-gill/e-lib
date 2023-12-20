import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Rating from "../components/UI/Rating";
import Price from "../components/UI/Price";
import Book from "../components/UI/Book";

const BookInfo = ({ books, addToCart, cart }) => {
  console.log(cart);

  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart() {
    return cart.find((book) => book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <div className="book__and--description">
                <figure className="book__selected--figure">
                  <img src={book.url} alt="" className="book__selected--img" />
                </figure>
                <div className="book__selected--description">
                  <h2 className="book__selected--title">{book.title}</h2>
                  <Rating rating={book.rating} />
                  <Price
                    salePrice={book.salePrice}
                    originalPrice={book.originalPrice}
                  />

                  <div className="book__summary">
                    <h3 className="book__summary--title">Summary</h3>
                    <p className="book__summary--para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus ipsum excepturi velit exercitationem aperiam
                      cumque sit ab minus, pariatur a, maiores ipsam sapiente
                      nulla odit facilis natus quaerat, laudantium quasi.
                    </p>
                  </div>
                  {bookExistsOnCart() ? (
                    <Link to={`/cart`} className="book__link">
                      <button className="btn">Checkout</button>
                    </Link>
                  ) : (
                    <button className="btn" onClick={() => addBookToCart(book)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;

// 1:37:44 - fix BookInfo: book is not rendering
