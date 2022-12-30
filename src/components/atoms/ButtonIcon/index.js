import React from "react";
import IconsDelete from "../../../assets/Icons/IconsDelete";

const ButtonIcon = ({Icons,ClassName}) => {
  return (
    <button
      type="button"
      className={ClassName}
    >
    {Icons}
    </button>
  );
};

export default ButtonIcon;
