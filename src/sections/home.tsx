import { useEffect, useRef, useState } from "react";

import "./home.css";

import model_original_glasses from "../assets/model_original/glasses.webp";
import model_original_top from "../assets/model_original/top.webp";
import model_original_shorts from "../assets/model_original/shorts.webp";
import model_original_shoes from "../assets/model_original/shoes.webp";

import model_modified_glasses from "../assets/model_modified/glasses.webp";
import model_modified_top from "../assets/model_modified/top.webp";
import model_modified_shorts from "../assets/model_modified/shorts.webp";
import model_modified_shoes from "../assets/model_modified/shoes.webp";

function Home() {
  const modelDefault = [
    model_original_glasses,
    model_original_top,
    model_original_shorts,
    model_original_shoes,
  ];

  const model_avilable = [
    ...modelDefault,
    model_modified_glasses,
    model_modified_top,
    model_modified_shorts,
    model_modified_shoes,
  ];

  const [model, setModel] = useState(modelDefault);

  const rectHead = useRef<HTMLDivElement | null>(null);
  const rectTop = useRef<HTMLDivElement | null>(null);
  const rectShorts = useRef<HTMLDivElement | null>(null);
  const rectShoes = useRef<HTMLDivElement | null>(null);

  const [margin, setMargin] = useState("20rem");

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const baseMargin = 20; // base margin in rem
      const decreasePer50px = 50 / 41; // decrease margin by 1rem every 50px

      if (viewportWidth <= 1920) {
        const decreasedMargin =
          baseMargin -
          Math.floor((1920 - viewportWidth) / 50) * decreasePer50px;
        setMargin(`${decreasedMargin}rem`);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Call the handleResize function initially to set the margin based on the initial window size
    handleResize();

    for (let i = 0; i < model_avilable.length; i++) {
      const img = new Image();
      img.src = model_avilable[i];
    }

    if (rectHead.current) {
      rectHead.current.addEventListener("mouseover", (_event) => {
        rectHead.current?.classList.add("imgTransition");
        setTimeout(() => {
          if (rectHead.current) {
            rectHead.current.classList.remove("imgTransition");
          }
        }, 300);
        setModel((prevModel) => [
          model_modified_glasses,
          ...prevModel.slice(1),
        ]);
      });
      rectHead.current.addEventListener("mouseout", (_event) => {
        setModel(modelDefault);
      });
    }

    if (rectTop.current) {
      rectTop.current.addEventListener("mouseover", (_event) => {
        setModel((prevModel) => [
          prevModel[0],
          model_modified_top,
          ...prevModel.slice(2),
        ]);
        rectTop.current?.classList.add("imgTransition");
        setTimeout(() => {
          if (rectTop.current) {
            rectTop.current.classList.remove("imgTransition");
          }
        }, 300);
      });
      rectTop.current.addEventListener("mouseout", (_event) => {
        setModel(modelDefault);
      });
    }

    if (rectShorts.current) {
      rectShorts.current.addEventListener("mouseover", (_event) => {
        setModel((prevModel) => [
          ...prevModel.slice(0, 2),
          model_modified_shorts,
          ...prevModel.slice(3),
        ]);
        rectShorts.current?.classList.add("imgTransition");
        setTimeout(() => {
          if (rectShorts.current) {
            rectShorts.current.classList.remove("imgTransition");
          }
        }, 300);
      });
      rectShorts.current.addEventListener("mouseout", (_event) => {
        setModel(modelDefault);
      });
    }

    if (rectShoes.current) {
      rectShoes.current.addEventListener("mouseover", (_event) => {
        setModel((prevModel) => [
          ...prevModel.slice(0, 3),
          model_modified_shoes,
        ]);
        rectShoes.current?.classList.add("imgTransition");
        setTimeout(() => {
          if (rectShoes.current) {
            rectShoes.current.classList.remove("imgTransition");
          }
        }, 300);
      });
      rectShoes.current.addEventListener("mouseout", (_event) => {
        setModel(modelDefault);
      });
    }
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

        <div className="imgContainer">
          <div className="imgWrapper">
            <img src={model[0]} alt="ModelHead" />
            <div className="overlay" ref={rectHead}></div>
          </div>
          <div className="imgWrapper">
            <img src={model[1]} alt="ModelTop" />
            <div className="overlay" ref={rectTop}></div>
          </div>
          <div className="imgWrapper">
            <img src={model[2]} alt="ModelShorts" />
            <div className="overlay" ref={rectShorts}></div>
          </div>
          <div className="imgWrapper">
            <img src={model[3]} alt="ModelShoes" />
            <div className="overlay" ref={rectShoes}></div>
          </div>
        </div>

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
