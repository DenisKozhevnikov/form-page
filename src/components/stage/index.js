import React from "react";
import "./Stage.scss";

function Stage({
  title,
  part,
  stageState = { isOpen: true, isChecked: true },
  onClick = () => {},
  children,
  ...props
}) {
  return (
    <article
      className={`stage ${
        stageState.isChecked && !stageState.isOpen ? "stage_cursor_pointer" : ""
      }`}
      onClick={onClick}
    >
      <div className="stage__row">
        {stageState.isChecked ? (
          <div className="stage__part stage__part_checked"></div>
        ) : (
          <div
            className={`stage__part ${
              stageState.isOpen ? "" : "stage__part_grey"
            }`}
          >
            {part}
          </div>
        )}
        <h2
          className={`stage__title ${
            !stageState.isOpen && !stageState.isChecked
              ? "stage__title_grey"
              : ""
          }`}
        >
          {title}
        </h2>
      </div>
      <div
        className={`stage__content ${
          props.contentStyle ? props.contentStyle : ""
        } ${stageState.isOpen ? "" : "stage__content_hidden"}`}
      >
        {children}
      </div>
    </article>
  );
}

export default Stage;
