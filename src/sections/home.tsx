import model_original from "../assets/model_original.png";
import "./home.css";

function Home() {
  return (
    <div className="homeContainer">
      <img
        className="imgModelOriginal"
        src={model_original}
        alt="Model Original"
      />
      <svg
        className="mask"
        xmlns="http://www.w3.org/2000/svg"
        width="383"
        height="583"
        fill="none"
        viewBox="0 0 383 583"
      >
        <clipPath id="squircleClipPath">
          <rect width="300" height="90" x="1.5" y="10.5" rx="45" />
          <rect width="300" height="90" x="84.5" y="120.5" rx="45" />
          <rect width="300" height="90" x="84.5" y="230.5" rx="45" />
          <rect width="300" height="140" x="84.5" y="340.5" rx="48.5" />
          <rect width="300" height="90" x="1.5" y="500.5" rx="45" />
        </clipPath>
        <rect
          width="300"
          height="90"
          x="1.5"
          y="1.5"
          stroke="#000"
          strokeWidth="3"
          rx="45"
        />
        <rect
          width="300"
          height="90"
          x="84.5"
          y="111.5"
          stroke="#000"
          strokeWidth="3"
          rx="45"
        />
        <rect
          width="300"
          height="90"
          x="84.5"
          y="221.5"
          stroke="#000"
          strokeWidth="3"
          rx="45"
        />
        <rect
          width="300"
          height="140"
          x="84.5"
          y="331.5"
          stroke="#000"
          strokeWidth="3"
          rx="48.5"
        />
        <rect
          width="300"
          height="90"
          x="1.5"
          y="491.5"
          stroke="#000"
          strokeWidth="3"
          rx="45"
        />
      </svg>
      <div className="branding">
        <div
          className="brandingText"
          style={{
            top: "0px",
            left: "0",
            position: "absolute",
            fontSize: "8rem",
          }}
        >
          DRESS
        </div>
        <div
          className="brandingText"
          style={{
            top: "340px",
            right: "0",
            position: "absolute",
            fontSize: "8rem",
          }}
        >
          BASE
        </div>
      </div>
    </div>
  );
}

export default Home;
