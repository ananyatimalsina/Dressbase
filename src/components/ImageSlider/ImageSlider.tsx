import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
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

const ImageSlider: React.FC = () => {
  const initialModel = useMemo(
    () => [
      model_original_glasses,
      model_original_top,
      model_original_shorts,
      model_original_shoes,
    ],
    []
  );

  const modelModified = useMemo(
    () => [
      model_modified_glasses,
      model_modified_top,
      model_modified_shorts,
      model_modified_shoes,
    ],
    []
  );

  const modelBackground = useMemo(
    () => [
      model_background_glasses,
      model_background_top,
      model_background_shorts,
      model_background_shoes,
    ],
    []
  );

  const [model, setModel] = useState<string[]>(initialModel);
  const [isClick, setIsClick] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [skipAnimation, setSkipAnimation] = useState<boolean>(false);
  const isTouchDevice = useIsTouchdevice();

  const refs = useRef<(HTMLDivElement | null)[]>(Array(4).fill(null));

  const preloadedImages = useMemo(
    () => [...initialModel, ...modelModified, ...modelBackground],
    [initialModel, modelModified, modelBackground]
  );

  useEffect(() => {
    console.log("preloadedImages", preloadedImages);
    preloadedImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [preloadedImages]);

  const handleMouseDown = useCallback(
    (index: number) => {
      setIsClick((prev) => {
        const newClick = [...prev];
        newClick[index] = !prev[index];
        return newClick;
      });

      setModel((prev) => {
        const newModel = [...prev];
        newModel[index] = isClick[index]
          ? initialModel[index]
          : modelModified[index];
        return newModel;
      });

      setSkipAnimation(true);
    },
    [isClick, initialModel, modelModified]
  );

  const handleMouseOver = useCallback(
    (index: number) => {
      if (!skipAnimation) {
        setModel((prev) => {
          const newModel = [...prev];
          newModel[index] = modelModified[index];
          return newModel;
        });

        refs.current[index]?.classList.add("imgTransitionSlide");
        setTimeout(() => {
          refs.current[index]?.classList.remove("imgTransitionSlide");
        }, 300);
      }
      setSkipAnimation(false);
    },
    [skipAnimation, modelModified]
  );

  const handleMouseOut = useCallback(
    (index: number) => {
      if (!skipAnimation) {
        setModel((prev) => {
          const newModel = [...prev];
          newModel[index] = initialModel[index];
          return newModel;
        });

        refs.current[index]?.classList.add("imgTransitionSlideBack");
        setTimeout(() => {
          refs.current[index]?.classList.remove("imgTransitionSlideBack");
        }, 300);
      }
      setSkipAnimation(false);
    },
    [skipAnimation, initialModel]
  );

  return (
    <div className="imgContainer">
      {model.map((src, index) => (
        <div key={index} className="imgWrapper">
          <img src={src} alt={`ModelPart${index}`} />
          <div
            style={
              index == 2 && navigator.userAgent.indexOf("Firefox") != -1
                ? { height: "96%" }
                : {}
            }
            className="overlay"
            ref={(el) => (refs.current[index] = el)}
            onMouseDown={() => handleMouseDown(index)}
            onMouseEnter={() => !isTouchDevice && handleMouseOver(index)}
            onMouseLeave={() => !isTouchDevice && handleMouseOut(index)}
          >
            <img src={modelBackground[index]} alt={`Background ${index}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
