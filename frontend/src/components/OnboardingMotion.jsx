import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import previewAnimation from "../assets/lottie/preview.json";
import "./OnboardingMotion.css";

export default function OnboardingMotion({ onFinish }) {
  const containerRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: previewAnimation,
    });

    animation.addEventListener("complete", () => {
      setTimeout(() => {
        setIsClosing(true);

        setTimeout(() => {
          if (onFinish) onFinish();
        }, 600);
      }, 1000);
    });

    return () => {
      animation.destroy();
    };
  }, [onFinish]);

  return (
    <div className={`onboarding-motion ${isClosing ? "fade-out" : ""}`}>
      <div ref={containerRef} className="onboarding-lottie" />
    </div>
  );
}