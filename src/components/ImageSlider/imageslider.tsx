import { useState, useRef, useEffect } from "react";

import model_original_glasses from "../../assets/model_original/glasses.webp";
import model_original_top from "../../assets/model_original/top.webp";
import model_original_shorts from "../../assets/model_original/shorts.webp";
import model_original_shoes from "../../assets/model_original/shoes.webp";

import model_modified_glasses from "../../assets/model_modified/glasses.webp";
import model_modified_top from "../../assets/model_modified/top.webp";
import model_modified_shorts from "../../assets/model_modified/shorts.webp";
import model_modified_shoes from "../../assets/model_modified/shoes.webp";

import "./imageslider.css";

function ImageSlider() {
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

  useEffect(() => {
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
  );
}

export default ImageSlider;
