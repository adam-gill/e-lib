import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./Footer";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import { books } from "./data";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/books" render={() => <Books books={books} />}/>
        <Route path="/books1" render={() => <BookInfo books={books}/>}/>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
