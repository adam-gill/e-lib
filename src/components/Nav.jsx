import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/book.svg';

const Nav = () => {
    return (
        <>
            <div className="nav__container">
                <a href="/" className='logo__link'>
                    <div class="logo__holder">
                            <img src={LibraryLogo} class="logo" alt=""/>
                            <h5 class="logo__text">e-lib</h5>
                    </div>
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Books
                        </a>
                    </li>
                    <button className="btn__menu">
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <a href="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </a>
                        <span className="cart__length">2</span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close">
                        <FontAwesomeIcon icon="times"></FontAwesomeIcon>
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/" className="menu__link">Home</a>
                            <a href="/books" className="menu__link">Books</a>
                            <a href="/cart" className="menu__link">Carts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav;