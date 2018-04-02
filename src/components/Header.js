import React from 'react';

const Header = () => (
  <header className="header">
    <img src="/img/logo.png" alt="bookflex logo" className="logo" />
    <form action="#0" className="search">
      <input type="text" className="search__input" placeholder="Search Hotels" />
      <button className="search__button">
        <svg className="search__icon">
          <use xlinkHref="/img/sprite.svg#icon-magnifying-glass" />
        </svg>
      </button>
    </form>
    <nav className="user-nav">
      <a href="#0" className="user-nav__link">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="/img/sprite.svg#icon-bookmark" />
          </svg>
          <span className="user-nav__notification">1</span>
        </div>
      </a>

      <a href="#0" className="user-nav__link">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="/img/sprite.svg#icon-chat" />
          </svg>
          <span className="user-nav__notification">13</span>
        </div>
      </a>
      <a href="#0" className="user-nav__link">
        <div className="user-nav__user">
          <img src="/img/user.jpg" alt="user" className="user-nav__user-photo" />
          <span className="user-nav__user-name">ssmi</span>
        </div>
      </a>
    </nav>
  </header>
);

export default Header;
