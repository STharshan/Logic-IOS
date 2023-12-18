import { useMemo } from "react";
import "./DarkModeFalseTypingNo.css";

const DarkModeFalseTypingNo = ({
  typeline,
  search = "Search",
  darkModeFalseTypingNoPosition,
  darkModeFalseTypingNoTop,
  darkModeFalseTypingNoLeft,
  searchFieldBackgroundColor,
  textGap,
  queryFontFamily,
  cancelFontFamily,
  cancelColor,
  cancelCursor,
  onCancelTextClick,
  icon
}) => {
  const darkModeFalseTypingNoStyle = useMemo(() => {
    return {
      position: darkModeFalseTypingNoPosition,
      top: darkModeFalseTypingNoTop,
      left: darkModeFalseTypingNoLeft,
    };
  }, [
    darkModeFalseTypingNoPosition,
    darkModeFalseTypingNoTop,
    darkModeFalseTypingNoLeft,
  ]);

  const searchFieldStyle = useMemo(() => {
    return {
      backgroundColor: searchFieldBackgroundColor,
    };
  }, [searchFieldBackgroundColor]);

  const textStyle = useMemo(() => {
    return {
      gap: textGap,
    };
  }, [textGap]);

  const queryStyle = useMemo(() => {
    return {
      fontFamily: queryFontFamily,
    };
  }, [queryFontFamily]);

  const cancelStyle = useMemo(() => {
    return {
      fontFamily: cancelFontFamily,
      color: cancelColor,
      cursor: cancelCursor,
    };
  }, [cancelFontFamily, cancelColor, cancelCursor]);

  return (
    <div className="dark-modefalse-typingno" style={darkModeFalseTypingNoStyle}>
      <div className="searchfield" style={searchFieldStyle}>
        <img
          className="icon-magnifyingglass"
          alt=""
          src={icon}
        />
        <div className="text" style={textStyle}>
            <img className="typeline-icon" alt="" src={typeline} />
          <div className="query" style={queryStyle}>
            {search}
          </div>
        </div>
      </div>
        <div className="cancel" style={cancelStyle} onClick={onCancelTextClick}>
          Cancel
        </div>
    </div>
  );
};

export default DarkModeFalseTypingNo;
