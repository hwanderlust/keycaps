import React from "react";

import Breadcrumbs from "./breadcrumbs";
import SearchBar from "./search";
import "./Header.css";

function Header() {
  const [showMenu, changeMenuVisibility] = React.useState(false);

  function toggleMenu() {
    changeMenuVisibility(prev => !prev);
  }

  return (
    <>
      <div className="header">
        <Logo />
        <NavHorizontal />
        <Buttons
          showMenu={showMenu}
          toggleMenu={toggleMenu}
        />
      </div>
      <SearchBar search={noOp} />
      <Breadcrumbs history="keycaps/GMK-Amesthyst/" />
    </>
  );
}

const noOp = () => { };

function Logo() {
  return (
    <div className="header__logo">
      <img
        src="./logo.png"
        alt="Keycaps Inc logo featuring corporate colors in the form of boxes in the shape of the arrow keys on a keyboard created from FreeLogoDesign"
        className="header__logo__img" />
    </div>
  );
}

function NavHorizontal() {
  return <Navigation classNames="navigation--horizontal" />;
}
function NavVertical() {
  return <Navigation classNames="navigation--vertical" />;
}

interface NavigationProps {
  classNames: string;
}
function Navigation(props: NavigationProps) {
  return (
    <nav className={`header__navigation ${props.classNames}`}>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/keyboards">Keyboards</a></li>
        <li><a href="/keycaps">Keycaps</a></li>
        <li><a href="/cables">Cables</a></li>
        <li><a href="/desk-mats">Desk Mats</a></li>
        <li><a href="/mouse-pads">Mouse Pads</a></li>
      </ul>
    </nav>
  );
}

interface ButtonsProps {
  showMenu: boolean;
  toggleMenu: () => void;
}
function Buttons(props: ButtonsProps) {
  const { showMenu, toggleMenu } = props;

  return (
    <div className="header__buttons">
      <button
        className="buttons__account"
        onClick={noOp}>
        <img
          src="./icon-account.svg"
          alt="user icon provided by Jemis Mali via Unicorns on Figma's Community" />
      </button>

      <button
        className="buttons__cart"
        onClick={noOp}>
        <img
          src="./icon-cart.svg"
          alt="shopping cart icon provided by Jemis Mali via Unicorns on Figma's Community" />
      </button>

      <div className="buttons__mobile">
        {!showMenu && (
          <button
            className="mobile__hamburger"
            onClick={toggleMenu}>
            <img
              src="./icon-menu.svg"
              alt="hamburger menu icon provided by Jemis Mali via Unicorns on Figma's Community" />
          </button>
        )}

        {showMenu && (
          <div className="mobile__menu">
            <button
              className="buttons__account menu__account"
              onClick={noOp}>
              <img
                src="./icon-account.svg"
                alt="user icon provided by Jemis Mali via Unicorns on Figma's Community" />
            </button>
            <button
              className="menu__x"
              onClick={toggleMenu}>
              <img
                src="./icon-close.svg"
                alt="close/cancel icon provided by Jemis Mali via Unicorns on Figma's Community" />
            </button>

            <NavVertical />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;