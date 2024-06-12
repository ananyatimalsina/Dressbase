import "./navbar.css";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div style={{ flex: 1 }}>
        <p className="brandingText" style={{ fontSize: "1.25rem" }}>
          Dressbase
        </p>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "space-evenly" }}>
        <a className="linkText" href="https://www.instagram.com">
          Instagram
        </a>
        <a className="linkText" href="https://www.facebook.com">
          Facebook
        </a>
        <a className="linkText" href="https://www.twitter.com">
          Twitter
        </a>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <svg
          className="hamburgerMenuButton"
          onClick={() => {
            console.log("Hamburger menu clicked");
            document
              .getElementsByClassName("hamburgerMenuButton")[0]
              .classList.toggle("animate");
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="23"
          fill="none"
          viewBox="0 0 30 23"
        >
          <path
            id="hamburgerLineTop"
            stroke="#000"
            strokeWidth="3"
            d="M0 2.5h30"
          />
          <path
            id="hamburgerLineMiddle"
            stroke="#000"
            strokeWidth="3"
            d="M0 10.9h30"
          />
          <path
            id="hamburgerLineBottom"
            stroke="#000"
            strokeWidth="3"
            d="M0 20.5h30"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
