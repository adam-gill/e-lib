import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/book.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Nav = () => {
    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }
    return (
        <>
            <div className="nav__container">
                <Link to="/" className='logo__link'>
                    <div class="logo__holder">
                            <img src={LibraryLogo} class="logo" alt=""/>
                            <h5 class="logo__text">e-lib</h5>
                    </div>
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link">
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/books" className="nav__link">
                            Books
                        </Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <Link to="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        <span className="cart__length">2</span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times"></FontAwesomeIcon>
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/" className="menu__link" onClick={closeMenu}>Home</Link>
                            <Link to="/books" className="menu__link" onClick={closeMenu}>Books</Link>
                            <Link to="/cart" className="menu__link" onClick={closeMenu}>Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav;