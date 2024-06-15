import { useEffect, useRef, useState } from "react";

import "./home.css";

import model_original from "../assets/model_original.png";
import model_glasses from "../assets/model_glasses.png";
import model_top from "../assets/model_top.png";
import model_shorts from "../assets/model_shorts.png";

function Home() {
  const [showAnimatedCursor, setShowAnimatedCursor] = useState(false);

  const modelDefault = [
    model_original,
    model_original,
    model_original,
    model_original,
  ];

  const [model, setModel] = useState([
    model_original,
    model_original,
    model_original,
    model_original,
  ]);

  const rectHead = useRef<HTMLDivElement | null>(null);
  const rectTop = useRef<HTMLDivElement | null>(null);
  const rectShorts = useRef<HTMLDivElement | null>(null);

  const cursor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      if (cursor.current) {
        cursor.current.style.left = event.clientX + "px";
        cursor.current.style.top = event.clientY + "px";
      }
    });

    if (rectHead.current) {
      rectHead.current.addEventListener("mouseover", (_event) => {
        setModel((prevModel) => [model_glasses, ...prevModel.slice(1)]);
        setShowAnimatedCursor(true);
      });
      rectHead.current.addEventListener("mouseout", (_event) => {
        setModel(modelDefault);
        setShowAnimatedCursor(false);
      });
    }

    if (rectTop.current) {
      rectTop.current.addEventListener("mouseover", (_event) => {
        setModel((prevModel) => [
          prevModel[0],
          model_top,
          ...prevModel.slice(2),
        ]);
        setShowAnimatedCursor(true);
      });
      rectTop.current.addEventListener("mouseout", (_event) => {
        setModel(modelDefault);
        setShowAnimatedCursor(false);
      });
    }

    if (rectShorts.current) {
      rectShorts.current.addEventListener("mouseover", (_event) => {
        setModel((prevModel) => [
          ...prevModel.slice(0, 2),
          model_shorts,
          ...prevModel.slice(3),
        ]);
        setShowAnimatedCursor(true);
      });
      rectShorts.current.addEventListener("mouseout", (_event) => {
        setModel(modelDefault);
        setShowAnimatedCursor(false);
      });
    }
  }, []);

  return (
    <>
      {showAnimatedCursor && <div className="cursor" ref={cursor}></div>}
      <div className="homeContainer">
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
            <div className="overlay"></div>
          </div>
        </div>
        <div className="branding">
          <div
            className="brandingText"
            style={{
              top: "200px",
              left: "400px",
              position: "absolute",
              fontSize: "8rem",
            }}
          >
            DRESS
          </div>
          <div
            className="brandingText"
            style={{
              top: "480px",
              right: "400px",
              position: "absolute",
              fontSize: "8rem",
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
