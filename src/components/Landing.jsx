import React from "react";
import UndrawBooks from '../assets/reading2.svg';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>America's highest rated online library platform</h1>
                        <h2>Find your next book today with <span className="blue">e-lib</span>!</h2>
                        <a href="#features">
                            <button className="btn">Browse Books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing;