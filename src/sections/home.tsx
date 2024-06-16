import { useEffect, useRef, useState } from "react";

import "./home.css";

import model_original from "../assets/model_original.png";
import model_glasses from "../assets/model_glasses.png";
import model_top from "../assets/model_top.png";
import model_shorts from "../assets/model_shorts.png";
import model_shoes from "../assets/model_shoes2.png";

function Home() {
  const modelDefault = [
    model_original,
    model_original,
    model_original,
    model_original,
  ];

  const [model, setModel] = useState(modelDefault);

  const rectHead = useRef<HTMLDivElement | null>(null);
  const rectTop = useRef<HTMLDivElement | null>(null);
  const rectShorts = useRef<HTMLDivElement | null>(null);
  const rectShoes = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (rectHead.current) {
      rectHead.current.addEventListener("mouseover", (_event) => {
        rectHead.current?.classList.add("imgTransition");
        setTimeout(() => {
          if (rectHead.current) {
            rectHead.current.classList.remove("imgTransition");
          }
        }, 300);
        setModel((prevModel) => [model_glasses, ...prevModel.slice(1)]);
      });
      rectHead.current.addEventListener("mouseout", (_event) => {
        setModel(modelDefault);
      });
    }

    if (rectTop.current) {
      rectTop.current.addEventListener("mouseover", (_event) => {
        setModel((prevModel) => [
          prevModel[0],
          model_top,
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
          model_shorts,
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
        setModel((prevModel) => [...prevModel.slice(0, 3), model_shoes]);
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
        <div className="brandingContainer" style={{}}>
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

        <div className="brandingContainer" style={{}}>
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
