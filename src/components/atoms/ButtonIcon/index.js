import React from "react";
import IconsDelete from "../../../assets/Icons/IconsDelete";

const ButtonIcon = ({Icons,ClassName,OnClick}) => {
  return (
    <button
      type="button"
      className={ClassName}
      onClick={OnClick}
    >
    {Icons}
    </button>
  );
};

export default ButtonIcon;
