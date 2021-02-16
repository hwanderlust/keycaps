import React from "react";
import { useSwipeable } from "react-swipeable";

import "./Slides.css";

interface SlidesProps {
  imgs: Imgs;
}
interface Imgs {
  0: string;
  1?: string;
  2?: string;
  3?: string;
  4?: string;
  5?: string;
  6?: string;
  7?: string;
  8?: string;
  9?: string;
}

function Slides(props: SlidesProps) {
  const { imgs } = props;
  const [activeImgIndex, setActiveImgIndex] = React.useState<keyof Imgs>(0);
  const lastIndex = React.useRef<number>(Object.keys(imgs).length - 1);
  const slidesRef = React.useRef<HTMLDivElement>(null);

  function showNextImg() {
    if (activeImgIndex === lastIndex.current) {
      return;
    }

    const width = slidesRef.current?.getClientRects()[0].width;

    slidesRef.current?.animate([
      { transform: `translateX(-${(width || 0) * (activeImgIndex + 1)}px)` }
    ], { duration: 250, fill: "forwards" });

    setActiveImgIndex(prev => {
      return ++prev as keyof Imgs;
    })
  }
  function showPrevImg() {
    if (activeImgIndex <= 0) {
      return;
    }

    const width = slidesRef.current?.getClientRects()[0].width;

    slidesRef.current?.animate([
      { transform: `translateX(-${(width || 0) * (activeImgIndex - 1)}px)` }
    ], { duration: 250, fill: "forwards" });

    setActiveImgIndex(prev => {
      return --prev as keyof Imgs;
    })
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: _ => showNextImg(),
    onSwipedRight: _ => showPrevImg(),
    trackMouse: true,
  });

  return (
    <div className="slides">
      <div className="slides__drag-window" {...swipeHandlers} />
      <div className="slides__imgs" ref={slidesRef}>
        {Object.values(imgs).map(imgSrc => (
          <img
            className="slides__img"
            src={imgSrc}
            alt={imgSrc}
            key={imgSrc} />
        ))}
      </div>
      <div className="slides__button-pair">
        <SlideButton
          className="slide__prev-btn"
          disabled={activeImgIndex === 0}
          onPress={showPrevImg} />
        <SlideButton
          disabled={activeImgIndex === lastIndex.current}
          onPress={showNextImg} />
      </div>
    </div>
  );
}

function SlideButton({ className, disabled, onPress }: { className?: string, disabled: boolean, onPress: () => void }) {
  return (
    <button
      className={`slide-button ${className} ${!!disabled ? "slide-button--disabled" : ""}`}
      disabled={!!disabled}
      onClick={onPress}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4479 11.7604L11.0313 7.34375C10.9344 7.24612 10.8192 7.16862 10.6923 7.11574C10.5653 7.06286 10.4292 7.03563 10.2917 7.03563C10.1542 7.03563 10.018 7.06286 9.89107 7.11574C9.76413 7.16862 9.64892 7.24612 9.55208 7.34375C9.35807 7.53892 9.24918 7.80293 9.24918 8.07813C9.24918 8.35332 9.35807 8.61733 9.55208 8.8125L13.2396 12.5L9.55208 16.1875C9.35807 16.3827 9.24918 16.6467 9.24918 16.9219C9.24918 17.1971 9.35807 17.4611 9.55208 17.6563C9.64942 17.7528 9.76485 17.8292 9.89177 17.881C10.0187 17.9329 10.1546 17.9591 10.2917 17.9583C10.4288 17.9591 10.5647 17.9329 10.6916 17.881C10.8185 17.8292 10.9339 17.7528 11.0313 17.6563L15.4479 13.2396C15.5456 13.1427 15.623 13.0275 15.6759 12.9006C15.7288 12.7737 15.756 12.6375 15.756 12.5C15.756 12.3625 15.7288 12.2263 15.6759 12.0994C15.623 11.9725 15.5456 11.8573 15.4479 11.7604Z" fill="white" />
      </svg>
    </button>
  );
}

export default Slides;