import { useState, useRef, useEffect, useCallback } from "react";
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
import useIsTouchDevice from "../AnimatedCursor/hooks/useIsTouchdevice";

const usePreloadImages = (imageUrls: string[]) => {
  useEffect(() => {
    const images = imageUrls.map((url) => {
      const img = new Image();
      img.src = url;
      return img;
    });

    return () => {
      images.forEach((img) => {
        img.onload = null;
      });
    };
  }, [imageUrls]);
};

const ImageSlider = () => {
  const [modelDefault, setModelDefault] = useState([
    model_original_glasses,
    model_original_top,
    model_original_shorts,
    model_original_shoes,
  ]);

  const model_avilable = [
    model_original_glasses,
    model_original_top,
    model_original_shorts,
    model_original_shoes,
    model_modified_glasses,
    model_modified_top,
    model_modified_shorts,
    model_modified_shoes,
  ];

  const [model, setModel] = useState(modelDefault);
  const [skipAnimation, setSkipAnimation] = useState(false);

  const rectHead = useRef<HTMLDivElement | null>(null);
  const rectTop = useRef<HTMLDivElement | null>(null);
  const rectShorts = useRef<HTMLDivElement | null>(null);
  const rectShoes = useRef<HTMLDivElement | null>(null);

  const isTouchDevice = useIsTouchDevice();

  usePreloadImages(model_avilable);

  useEffect(() => {
    setModel(modelDefault);
  }, [modelDefault]);

  const handleMouseDown = useCallback(
    (
      ref: React.MutableRefObject<HTMLDivElement | null>,
      modelIndex: number,
      modelModified: string,
      modelOriginal: string
    ) => {
      if (isTouchDevice) {
        if (modelDefault[modelIndex] === modelOriginal) {
          ref.current?.classList.add("imgTransitionSlide");
          setTimeout(() => {
            ref.current?.classList.remove("imgTransitionSlide");
          }, 300);
        } else if (modelDefault[modelIndex] === modelModified) {
          ref.current?.classList.add("imgTransitionSlideBack");
          setTimeout(() => {
            ref.current?.classList.remove("imgTransitionSlideBack");
          }, 300);
        }
      } else {
        setSkipAnimation(true);
      }

      setModelDefault((prevModelDefault) => [
        ...prevModelDefault.slice(0, modelIndex),
        prevModelDefault[modelIndex] === modelModified
          ? modelOriginal
          : modelModified,
        ...prevModelDefault.slice(modelIndex + 1),
      ]);
    },
    [modelDefault]
  );

  const handleMouseOver = useCallback(
    (
      ref: React.MutableRefObject<HTMLDivElement | null>,
      modelIndex: number,
      newModel: string
    ) => {
      if (!skipAnimation || isTouchDevice) {
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
    },
    [skipAnimation]
  );

  const handleMouseOut = useCallback(
    (
      ref: React.MutableRefObject<HTMLDivElement | null>,
      modelIndex: number,
      newModel: string
    ) => {
      if (!skipAnimation || isTouchDevice) {
        setModel((prevModel) => [
          ...prevModel.slice(0, modelIndex),
          newModel,
          ...prevModel.slice(modelIndex + 1),
        ]);
        ref.current?.classList.add("imgTransitionSlideBack");
        setTimeout(() => {
          ref.current?.classList.remove("imgTransitionSlideBack");
        }, 300);
      }
      setSkipAnimation(false);
    },
    [skipAnimation]
  );

  const renderImageWrapper = (
    modelIndex: number,
    modelSrc: string,
    backgroundSrc: string,
    ref: React.RefObject<HTMLDivElement>,
    modelModified: string,
    modelOriginal: string
  ) => (
    <div className="imgWrapper">
      <img src={modelSrc} alt={`Model ${modelIndex}`} />
      <div
        style={
          modelIndex === 2 && navigator.userAgent.includes("Firefox")
            ? { height: "96%" }
            : {}
        }
        className="overlay"
        ref={ref}
        onMouseDown={() =>
          handleMouseDown(ref, modelIndex, modelModified, modelOriginal)
        }
        onMouseEnter={() =>
          !isTouchDevice
            ? modelDefault[modelIndex] === modelOriginal
              ? handleMouseOver(ref, modelIndex, modelModified)
              : handleMouseOut(ref, modelIndex, modelOriginal)
            : null
        }
        onMouseLeave={() =>
          !isTouchDevice
            ? modelDefault[modelIndex] === modelOriginal
              ? handleMouseOut(ref, modelIndex, modelOriginal)
              : handleMouseOver(ref, modelIndex, modelModified)
            : null
        }
      >
        <img src={backgroundSrc} alt={`Background ${modelIndex}`} />
      </div>
    </div>
  );

  return (
    <div className="imgContainer">
      {renderImageWrapper(
        0,
        model[0],
        model_background_glasses,
        rectHead,
        model_modified_glasses,
        model_original_glasses
      )}
      {renderImageWrapper(
        1,
        model[1],
        model_background_top,
        rectTop,
        model_modified_top,
        model_original_top
      )}
      {renderImageWrapper(
        2,
        model[2],
        model_background_shorts,
        rectShorts,
        model_modified_shorts,
        model_original_shorts
      )}
      {renderImageWrapper(
        3,
        model[3],
        model_background_shoes,
        rectShoes,
        model_modified_shoes,
        model_original_shoes
      )}
    </div>
  );
};

export default ImageSlider;
