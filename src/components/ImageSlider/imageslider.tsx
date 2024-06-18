import { useState, useRef, useEffect } from "react";

import model_original_glasses from "../../assets/model_original/glasses.webp";
import model_original_top from "../../assets/model_original/top.webp";
import model_original_shorts from "../../assets/model_original/shorts.webp";
import model_original_shoes from "../../assets/model_original/shoes.webp";

import model_modified_glasses from "../../assets/model_modified/glasses.webp";
import model_modified_top from "../../assets/model_modified/top.webp";
import model_modified_shorts from "../../assets/model_modified/shorts.webp";
import model_modified_shoes from "../../assets/model_modified/shoes.webp";

import model_background_glasses from "../../assets/background/glasses.webp";
import model_background_top from "../../assets/background/top.webp";
import model_background_shorts from "../../assets/background/shorts.webp";
import model_background_shoes from "../../assets/background/shoes.webp";

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

  const mouseOverEvent = (
    ref: React.MutableRefObject<HTMLDivElement | null>,
    modelIndex: number,
    newModel: string
  ) => {
    setModel((prevModel) => [
      ...prevModel.slice(0, modelIndex),
      newModel,
      ...prevModel.slice(modelIndex + 1),
    ]);
    ref.current?.classList.add("imgTransitionSlide");
    setTimeout(() => {
      ref.current?.classList.remove("imgTransitionSlide");
    }, 300);
  };

  const mouseOutEvent = (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    setModel(modelDefault);
    ref.current?.classList.add("imgTransitionSlideBack");
    setTimeout(() => {
      ref.current?.classList.remove("imgTransitionSlideBack");
    }, 300);
  };

  useEffect(() => {
    for (let i = 0; i < model_avilable.length; i++) {
      const img = new Image();
      img.src = model_avilable[i];
    }
  }, []);

  return (
    <div className="imgContainer">
      <div className="imgWrapper">
        <img src={model[0]} alt="ModelHead" />
        <div
          className="overlay"
          ref={rectHead}
          onMouseEnter={() =>
            mouseOverEvent(rectHead, 0, model_modified_glasses)
          }
          onMouseLeave={() => mouseOutEvent(rectHead)}
        >
          <img src={model_background_glasses} alt="Background Glasses" />
        </div>
      </div>
      <div className="imgWrapper">
        <img src={model[1]} alt="ModelTop" />
        <div
          className="overlay"
          ref={rectTop}
          onMouseEnter={() => mouseOverEvent(rectTop, 1, model_modified_top)}
          onMouseLeave={() => mouseOutEvent(rectTop)}
        >
          <img src={model_background_top} alt="Background Top" />
        </div>
      </div>
      <div className="imgWrapper">
        <img src={model[2]} alt="ModelShorts" />
        <div
          className="overlay"
          ref={rectShorts}
          onMouseEnter={() =>
            mouseOverEvent(rectShorts, 2, model_modified_shorts)
          }
          onMouseLeave={() => mouseOutEvent(rectShorts)}
        >
          <img src={model_background_shorts} alt="Background Shorts" />
        </div>
      </div>
      <div className="imgWrapper">
        <img src={model[3]} alt="ModelShoes" />
        <div
          className="overlay"
          ref={rectShoes}
          onMouseEnter={() =>
            mouseOverEvent(rectShoes, 3, model_modified_shoes)
          }
          onMouseLeave={() => mouseOutEvent(rectShoes)}
        >
          <img src={model_background_shoes} alt="Background Shoes" />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
