import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./cursor.scss";

export const Cursor = ({ pointerPosition }) => {
  const [pointerTrailPosition, setPointerTrailPosition] = useState(null);
  const [combined, setCombined] = useState(true);
  
  useEffect(() => {
    if ((pointerPosition.x, pointerPosition.y)) {
      setTimeout(() => {
        setPointerTrailPosition({
          x: pointerPosition?.x + 10 ?? 10,
          y: pointerPosition?.y + 10 ?? 10,
        });
      }, 100);
    }
  }, [pointerPosition]);

  useEffect(() => {
    if (pointerTrailPosition && pointerPosition && pointerTrailPosition.x === pointerPosition.x + 10 && pointerTrailPosition.y === pointerPosition.y + 10) {
      setCombined(true);
    } else {
      setCombined(false);
    }
  }, [pointerTrailPosition]);

  const getCursorStyle = () => {
    if (combined) {
      return {
        width: "40px",
        height: "40px",
        top: pointerPosition?.y ?? 0,
        left: pointerPosition?.x ?? 0,
      };
    } else {
      return {
        top: pointerPosition?.y ?? 0,
        left: pointerPosition?.x ?? 0,
      };
    }
  };

  return (
    <div className="Cursor" style={getCursorStyle()}>
      <div className="cursor-trail" style={{ top: pointerTrailPosition?.y ?? 0, left: pointerTrailPosition?.x ?? 0 }}></div>
    </div>
  );
};
