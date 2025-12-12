import React, { useState, useEffect } from "react";
import styles from "./TrackMouse.module.css";

interface Bubble {
  id: number;
  x: number;
  y: number;
}

const BubbleEffect: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newBubble: Bubble = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setBubbles((prev) => [...prev, newBubble]);

      // Remove the bubble after animation duration (1s)
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, 200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.bubbleContainer}>
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className={styles.bubble}
          style={{ left: bubble.x, top: bubble.y }}
        ></span>
      ))}
    </div>
  );
};

export default BubbleEffect;
