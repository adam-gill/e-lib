import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./UI/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="blue">e-lib?</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ books"
              para="E-lib has books in all of your favorite categories."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Affordable"
              para="Access books online instantly for as little as $5!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
