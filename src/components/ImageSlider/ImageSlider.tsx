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
import useIsTouchdevice from "../AnimatedCursor/hooks/useIsTouchdevice";

// TODO: Clean up logic handeling for the mouse over and mouse out events

function ImageSlider() {
  const [modelDefault, setModelDefault] = useState([
    model_original_glasses,
    model_original_top,
    model_original_shorts,
    model_original_shoes,
  ]);

  const [isClick, setIsClick] = useState([false, false, false, false]);

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

  const isTouchDevice = useIsTouchdevice();

  const mouseDownEvent = (
    modelIndex: number,
    modelModified: string,
    modelOriginal: string,
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    if (isTouchDevice) {
      console.log("touchDevice");
      modelDefault[modelIndex] === modelModified
        ? mouseOutEvent(ref, modelIndex, modelOriginal)
        : mouseOverEvent(ref, modelIndex, modelModified);
    } else {
      if (!isClick[modelIndex]) return;
      setIsClick((prevIsClick) => [
        ...prevIsClick.slice(0, modelIndex),
        false,
        ...prevIsClick.slice(modelIndex + 1),
      ]);
    }
    setModelDefault((prevModelDefault) => [
      ...prevModelDefault.slice(0, modelIndex),
      modelDefault[modelIndex] === modelModified
        ? modelOriginal
        : modelModified,
      ...prevModelDefault.slice(modelIndex + 1),
    ]);
    if (!isTouchDevice) setSkipAnimation(true);
  };

  const mouseOverEvent = (
    ref: React.MutableRefObject<HTMLDivElement | null>,
    modelIndex: number,
    newModel: string
  ) => {
    setIsClick((prevIsClick) => [
      ...prevIsClick.slice(0, modelIndex),
      true,
      ...prevIsClick.slice(modelIndex + 1),
    ]);
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
            console.log("mouseDownEvent");
            mouseDownEvent(
              0,
              model_modified_glasses,
              model_original_glasses,
              rectHead
            );
          }}
          onMouseEnter={() =>
            !isTouchDevice
              ? modelDefault[0] === model_original_glasses
                ? mouseOverEvent(rectHead, 0, model_modified_glasses)
                : mouseOutEvent(rectHead, 0, model_original_glasses)
              : null
          }
          onMouseLeave={() =>
            !isTouchDevice
              ? modelDefault[0] === model_original_glasses
                ? mouseOutEvent(rectHead)
                : mouseOverEvent(rectHead, 0, model_modified_glasses)
              : null
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
            mouseDownEvent(1, model_modified_top, model_original_top, rectTop);
          }}
          onMouseEnter={() =>
            !isTouchDevice
              ? modelDefault[1] === model_original_top
                ? mouseOverEvent(rectTop, 1, model_modified_top)
                : mouseOutEvent(rectTop, 1, model_original_top)
              : null
          }
          onMouseLeave={() =>
            !isTouchDevice
              ? modelDefault[1] === model_original_top
                ? mouseOutEvent(rectTop)
                : mouseOverEvent(rectTop, 1, model_modified_top)
              : null
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
            mouseDownEvent(
              2,
              model_modified_shorts,
              model_original_shorts,
              rectShorts
            );
          }}
          onMouseEnter={() =>
            !isTouchDevice
              ? modelDefault[2] === model_original_shorts
                ? mouseOverEvent(rectShorts, 2, model_modified_shorts)
                : mouseOutEvent(rectShorts, 2, model_original_shorts)
              : null
          }
          onMouseLeave={() =>
            !isTouchDevice
              ? modelDefault[2] === model_original_shorts
                ? mouseOutEvent(rectShorts)
                : mouseOverEvent(rectShorts, 2, model_modified_shorts)
              : null
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
            mouseDownEvent(
              3,
              model_modified_shoes,
              model_original_shoes,
              rectShoes
            );
          }}
          onMouseEnter={() =>
            !isTouchDevice
              ? modelDefault[3] === model_original_shoes
                ? mouseOverEvent(rectShoes, 3, model_modified_shoes)
                : mouseOutEvent(rectShoes, 3, model_original_shoes)
              : null
          }
          onMouseLeave={() =>
            !isTouchDevice
              ? modelDefault[3] === model_original_shoes
                ? mouseOutEvent(rectShoes)
                : mouseOverEvent(rectShoes, 3, model_modified_shoes)
              : null
          }
        >
          <img src={model_background_shoes} alt="Background Shoes" />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
