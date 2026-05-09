import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./SingleBubbleMouseTrack.module.css";
import Logo from "../../../assets/react.svg";

interface Bubble {
  x: number;
  y: number;
}

const SingleBubbleMouseTrack = () => {
  const mouseRef = useRef<Bubble>({ x: 0, y: 0 });
  const bubbleRef = useRef<HTMLDivElement>(null);
  const bubblePos = useRef<Bubble>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const animate = () => {
      if (bubbleRef.current) {
        const dx = mouseRef.current.x - bubblePos.current.x; //horizontal distance
        const dy = mouseRef.current.y - bubblePos.current.y; //vertical distance
        const easing = 0.04; // smaller = slower

        bubblePos.current.x += dx * easing;
        bubblePos.current.y += dy * easing;

        // Use transform for smoother GPU animation
        bubbleRef.current.style.transform = `translate(${bubblePos.current.x}px, ${bubblePos.current.y}px) translate(-50%, -40%)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Render bubble into body using a portal
  return ReactDOM.createPortal(
    <div ref={bubbleRef} className={styles.bubble}>
      <img src={Logo} alt="" width={20} height={20} className={styles.image} />
    </div>,
    document.body
  );
};

export default SingleBubbleMouseTrack;
