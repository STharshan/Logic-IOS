import { useMemo } from "react";
import "./TypeBackground.css";

const TypeBackground = ({
  typeBackgroundPosition,
  typeBackgroundBottom,
  typeBackgroundLeft,
}) => {
  const typeBackgroundStyle = useMemo(() => {
    return {
      position: typeBackgroundPosition,
      bottom: typeBackgroundBottom,
      left: typeBackgroundLeft,
    };
  }, [typeBackgroundPosition, typeBackgroundBottom, typeBackgroundLeft]);

  return (
    <div className="typebackground" style={typeBackgroundStyle}>
      <div className="home-indicator" />
    </div>
  );
};

export default TypeBackground;
