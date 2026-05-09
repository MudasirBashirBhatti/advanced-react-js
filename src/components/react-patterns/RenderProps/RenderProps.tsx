import { useState, type ReactNode, type MouseEvent } from "react";

interface mousePos {
  x: number;
  y: number;
}

const RenderProps = ({ render }: { render: (pos: mousePos) => ReactNode }) => {
  const [pos, setpos] = useState<mousePos>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement | MouseEvent>) => {
    const xPos = e.clientX;
    const yPos = e.clientY;

    setpos({ x: xPos, y: yPos });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: "100%", height: "200px", border: "1px solid black" }}
    >
      {render(pos)}
    </div>
  );
};

export default RenderProps;
