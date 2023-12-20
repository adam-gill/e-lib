import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./Footer";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { books } from "./data";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function removeItemFromCart(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function numItems() {
    let count = 0;

    cart.forEach((item) => {
      count += item.quantity;
    })

    return count;
  }

  useEffect(() => {
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numItems={numItems()}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        {/* <Route path="/books:id" render={() => <BookInfo books={books} />}/>    */}
        <Route
          path="/cart"
          render={() => (
            <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItemFromCart={removeItemFromCart} />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
