import React from "react";

const Button = ({ onClick, title, ClassName }) => {
  return (
    <button type="button" onClick={onClick} className={ClassName}>
      {title}
    </button>
  );
};

export default Button;
