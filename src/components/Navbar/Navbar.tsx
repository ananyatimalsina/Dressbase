import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Squash as Hamburger } from "hamburger-react";
import CheeseburgerMenu from "cheeseburger-menu";

import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbarContainer">
      <svg
        id="Logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 279.22 407.82"
      >
        <path
          d="M192.67,202.59l-.02-.18c-.1-1.31-.23-2.6-.4-3.86-2.92-22.39-16.43-36.56-34.27-50.26-26.33-19.56-53.37-38.11-80.1-57.12-19.46-12.97-26.9-24.91-36.92-45.64-6.38-12.25-13.6-24.26-21.87-35.25C14.54,4.38,6.22-6.08,2.44,4.61-.33,11.74.28,23.14,3.06,31.06c1.65,4.97,4.48,10.01,7.23,14.69,17.43,29.77,28.31,63.16,33.01,97.43,2.64,19.11,3.57,38.37,3.66,57.65.23,46.28-6.22,92.37-23.82,135.32-4.09,10.07-8.78,19.86-14.24,29.23-3.33,5.75-6.34,11.83-7.71,18.2-1.56,7.6-2.62,20.08,3.72,24.02,7.67,2.95,23.75-24.18,27.79-30.35,10.36-17.18,17.9-36.84,34.39-49.13,28.67-21.09,59.24-39.51,87.94-60.54,21.86-16.05,38-31.76,37.91-59.03-.01-1.93-.1-3.91-.27-5.96ZM179.07,221.46l-.06.19c-5.49,19.42-21.87,32.82-37.55,44.31-21.4,15.63-43.32,30.62-65.09,45.75-4.7,2.95-15.91,11.31-16.09,1.63.36-7.35,5.39-14.79,11.18-19.34,7.42-5.81,17.17-7.85,26.7-10.88,8.33-2.59,16.59-5.5,24.52-9.13,1.63-.47,22.62-11.33,17.77-11.72-1.44-.03-9.68,2.78-14.2,4.58-11.94,4.51-23.97,8.18-36.25,11.43-3.83.99-8.16,1.96-11.95,1.75-9.84-.24-9.36-11.05-8.4-19.26,4.27-33.98,3.68-67.79,1.61-101.72-.19-5.14-.05-11.47,2.83-15.19,6.26-7.28,18.22-2.48,28.2-.35,3.18.82,6.34,1.67,9.5,2.57,7.17,2.04,14.28,4.32,21.31,6.85,5.58,2.03,10.65,3.89,13.26,4.45.76.06,1.59.47,2.14.01-.7-2.9-14.63-9.93-20.37-12.61-11.21-5.13-23.04-8.77-35-11.89-9.53-2.42-19.56-6.01-24.87-14.79-3.23-4.53-8.94-20.95-2.14-22.14,1.87-.19,4.61.97,7.91,2.98,23.09,15.94,45.82,32.88,68.6,49.36,8.01,6,15.96,12.25,22.62,19.74,7.82,8.46,13.28,19.22,15.17,30.51,1.27,7.58.94,15.39-1.35,22.91Z"
          fill="#000"
          strokeWidth="0"
        />
        <path
          d="M220.78,203.55c0,1.71.14,3.38.4,5h-40v-10h40c-.27,1.62-.4,3.29-.4,5Z"
          fill="#000"
          strokeWidth="0"
        />
        <path
          d="M224.68,198.55c.06,5.31.38,10.65,2.63,15.44,4.51,10.3,16.57,16.24,27.52,13.79,14.63-2.71,23.38-19.28,17.58-32.87-3.86-9.99-12.9-16.36-23.23-16.35"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="10"
        />
        <text
          className="brandingText"
          transform="translate(89.26 249.73)"
          fill="#000"
          fontSize="100"
        >
          <tspan x="0" y="0">
            B
          </tspan>
        </text>
      </svg>
      <div style={{ flex: 1, display: "flex", justifyContent: "space-evenly" }}>
        <a className="linkText" href="https://www.instagram.com">
          <FaInstagram /> Instagram
        </a>
        <a className="linkText" href="https://www.facebook.com">
          <FaFacebookF /> Facebook
        </a>
        <a className="linkText" href="https://www.twitter.com">
          <FaXTwitter /> Twitter
        </a>
      </div>
      <Hamburger toggled={isOpen} toggle={setIsOpen} label="showMenu" />
      <CheeseburgerMenu
        isOpen={isOpen}
        closeCallback={() => setIsOpen(false)}
        right={true}
        backgroundColor="#cdc1d9"
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} label="hideMenu" />
        <div className="my-menu-content">
          <a
            className="linkText"
            href="#home"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Home
          </a>
          <a
            className="linkText"
            href="#about"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            About
          </a>
        </div>
      </CheeseburgerMenu>
    </div>
  );
}

export default Navbar;
