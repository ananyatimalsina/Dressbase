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

import "./ImageSlider.css";

function ImageSlider() {
  const [modelDefault, setModelDefault] = useState([
    model_original_glasses,
    model_original_top,
    model_original_shorts,
    model_original_shoes,
  ]);

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

  const [skipAnimation, setSkipAnimation] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const mouseDownEvent = (modelIndex: number, newModel: string) => {
    if (!isClick) return;
    setIsClick(false);
    setModelDefault((prevModelDefault) => [
      ...prevModelDefault.slice(0, modelIndex),
      newModel,
      ...prevModelDefault.slice(modelIndex + 1),
    ]);
    setSkipAnimation(true);
  };

  const mouseOverEvent = (
    ref: React.MutableRefObject<HTMLDivElement | null>,
    modelIndex: number,
    newModel: string
  ) => {
    setIsClick(true);
    if (!skipAnimation) {
      setModel((prevModel) => [
        ...prevModel.slice(0, modelIndex),
        newModel,
        ...prevModel.slice(modelIndex + 1),
      ]);
      ref.current?.classList.add("imgTransitionSlide");
      setTimeout(() => {
        ref.current?.classList.remove("imgTransitionSlide");
      }, 300);
    }
    setSkipAnimation(false);
  };

  const mouseOutEvent = (
    ref: React.MutableRefObject<HTMLDivElement | null>,
    modelIndex: number | null = null,
    newModel: string | null = null
  ) => {
    if (!skipAnimation) {
      if (modelIndex != null && newModel != null) {
        setModel((prevModel) => [
          ...prevModel.slice(0, modelIndex),
          newModel,
          ...prevModel.slice(modelIndex + 1),
        ]);
      } else {
        setModel(modelDefault);
      }

      ref.current?.classList.add("imgTransitionSlideBack");
      setTimeout(() => {
        ref.current?.classList.remove("imgTransitionSlideBack");
      }, 300);
    }
    setSkipAnimation(false);
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
          onMouseDown={() => {
            modelDefault[0] === model_original_glasses
              ? mouseDownEvent(0, model_modified_glasses)
              : mouseDownEvent(0, model_original_glasses);
          }}
          onMouseEnter={() =>
            modelDefault[0] === model_original_glasses
              ? mouseOverEvent(rectHead, 0, model_modified_glasses)
              : mouseOutEvent(rectHead, 0, model_original_glasses)
          }
          onMouseLeave={() =>
            modelDefault[0] === model_original_glasses
              ? mouseOutEvent(rectHead)
              : mouseOverEvent(rectHead, 0, model_modified_glasses)
          }
        >
          <img src={model_background_glasses} alt="Background Glasses" />
        </div>
      </div>
      <div className="imgWrapper">
        <img src={model[1]} alt="ModelTop" />
        <div
          className="overlay"
          ref={rectTop}
          onMouseDown={() => {
            modelDefault[1] === model_original_top
              ? mouseDownEvent(1, model_modified_top)
              : mouseDownEvent(1, model_original_top);
          }}
          onMouseEnter={() =>
            modelDefault[1] === model_original_top
              ? mouseOverEvent(rectTop, 1, model_modified_top)
              : mouseOutEvent(rectTop, 1, model_original_top)
          }
          onMouseLeave={() =>
            modelDefault[1] === model_original_top
              ? mouseOutEvent(rectTop)
              : mouseOverEvent(rectTop, 1, model_modified_top)
          }
        >
          <img src={model_background_top} alt="Background Top" />
        </div>
      </div>
      <div className="imgWrapper">
        <img src={model[2]} alt="ModelShorts" />
        <div
          className="overlay"
          ref={rectShorts}
          onMouseDown={() => {
            modelDefault[2] === model_original_shorts
              ? mouseDownEvent(2, model_modified_shorts)
              : mouseDownEvent(2, model_original_shorts);
          }}
          onMouseEnter={() =>
            modelDefault[2] === model_original_shorts
              ? mouseOverEvent(rectShorts, 2, model_modified_shorts)
              : mouseOutEvent(rectShorts, 2, model_original_shorts)
          }
          onMouseLeave={() =>
            modelDefault[2] === model_original_shorts
              ? mouseOutEvent(rectShorts)
              : mouseOverEvent(rectShorts, 2, model_modified_shorts)
          }
        >
          <img src={model_background_shorts} alt="Background Shorts" />
        </div>
      </div>
      <div className="imgWrapper">
        <img src={model[3]} alt="ModelShoes" />
        <div
          className="overlay"
          ref={rectShoes}
          onMouseDown={() => {
            modelDefault[3] === model_original_shoes
              ? mouseDownEvent(3, model_modified_shoes)
              : mouseDownEvent(3, model_original_shoes);
          }}
          onMouseEnter={() =>
            modelDefault[3] === model_original_shoes
              ? mouseOverEvent(rectShoes, 3, model_modified_shoes)
              : mouseOutEvent(rectShoes, 3, model_original_shoes)
          }
          onMouseLeave={() =>
            modelDefault[3] === model_original_shoes
              ? mouseOutEvent(rectShoes)
              : mouseOverEvent(rectShoes, 3, model_modified_shoes)
          }
        >
          <img src={model_background_shoes} alt="Background Shoes" />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
