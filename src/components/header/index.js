import React from "react";
import "./Header.scss";
import coatOfArms from "../../images/coat-of-arms.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="./">
          <img
            className="header__coat-of-arms"
            alt="Герб Перми"
            src={coatOfArms}
          />
          <p className="header__title">Услуги и сервисы Пермского края</p>
        </a>
        <a className="profile" href="./">
          <svg
            className="profile__icon"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1451 15.3064C16.7104 15.6284 17.1787 16.0861 17.5039 16.6344C17.8291 17.1827 18.0001 17.8027 18 18.4336V20H8.13541e-10V18.4327C-1.36153e-05 17.8021 0.170892 17.1823 0.495935 16.6342C0.820978 16.086 1.28898 15.6285 1.854 15.3064L5.45495 13.2555C5.73744 13.0943 5.97139 12.8654 6.13383 12.5913C6.29627 12.3171 6.38161 12.0072 6.38147 11.6918V11.5464C7.182 12.0055 8.06968 12.2736 9 12.2736C9.93032 12.2736 10.8171 12.0055 11.6176 11.5464V11.6918C11.6174 12.0072 11.7028 12.3171 11.8652 12.5913C12.0277 12.8654 12.2616 13.0943 12.5441 13.2555L16.1451 15.3064ZM13.7368 4.98818C13.7368 8 11.6166 10.91 9 10.91C6.38337 10.91 4.26316 8 4.26316 4.98909C4.26316 1.97545 6.38337 0 9 0C11.6166 0 13.7368 1.97727 13.7368 4.98818Z"
              fill="white"
            />
          </svg>
          <span className="profile__user-name">Константинопольский К.К</span>
        </a>
        <button className="header__auth">Выйти</button>
      </div>
    </header>
  );
}

export default Header;
