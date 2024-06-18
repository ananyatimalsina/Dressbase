import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider/imageslider";

import "./home.css";

function Home() {
  const [margin, setMargin] = useState("20rem");

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const baseMargin = 20;
      const decreasePer50px = 50 / 41;

      if (viewportWidth <= 1920) {
        const decreasedMargin =
          baseMargin -
          Math.floor((1920 - viewportWidth) / 50) * decreasePer50px;
        setMargin(`${decreasedMargin}rem`);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();
  }, []);

  return (
    <>
      <div className="homeContainer">
        <div className="brandingContainer" style={{ marginLeft: margin }}>
          <div
            className="brandingText"
            style={{
              marginBottom: "20rem",
              fontSize: "800%",
            }}
          >
            DRESS
          </div>
          <div
            className="marketingText"
            style={{ fontSize: "250%", textDecoration: "underline" }}
          >
            Fit's Perfect!
          </div>
        </div>
        <ImageSlider />
        <div className="brandingContainer" style={{ marginRight: margin }}>
          <div
            className="marketingText"
            style={{ fontSize: "250%", textDecoration: "overline" }}
          >
            Bringing fashion closer to you
          </div>
          <div
            className="brandingText"
            style={{
              marginTop: "10rem",
              fontSize: "800%",
            }}
          >
            BASE
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
