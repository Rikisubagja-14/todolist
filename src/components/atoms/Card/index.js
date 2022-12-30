import React, { useState } from "react";
import ButtonIcon from "../ButtonIcon";
import IconsDelete from "../../../assets/Icons/IconsDelete";
import IconsEdit from "../../../assets/Icons/IconsEdit";
import IconDone from "../../../assets/Icons/IconDone";
import PopupModal from "../PopupModal";
import PopupModalEdit from "../PopupModalEdit";

const Card = ({ title, desc, index, HandleOnClick, OnClickEdit, TaskObj, onClickComplate, Style}) => {
    const [isOpen, setIsOpen] = useState(false);
  const HandleDelete = () => {
    HandleOnClick(index);
  }

  const HandleUpdatelist = (object) => {
    OnClickEdit(object,index);
  }

  const [isComplate,SetComplate] = useState(false);

  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 cursor-pointer">
      <div
        href="/"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className={isComplate ? "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white italic font-serif line-through" : "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white italic font-serif "}>
          {title}
        </h5>
        <p className={isComplate ? "font-normal text-gray-700 dark:text-gray-400 italic font-serif line-through" : "font-normal text-gray-700 dark:text-gray-400 italic font-serif"}>
          {desc}
        </p>
        <div className="pt-5 flex justify-between">
          <ButtonIcon
            ClassName={`"text-blue-700 border border-red-700-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800`}
            Icons={<IconsDelete ClassName={`w-6 h-6`} />}
            OnClick={HandleDelete}
          />
          <ButtonIcon
            ClassName={`"text-blue-700 border border-y-lime-700 hover:bg-lime-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-lime-500 dark:text-lime-500 dark:hover:text-white dark:focus:ring-lime-800`}
            Icons={<IconsEdit ClassName={`w-6 h-6`}  />}
            OnClick= {()=> setIsOpen(true)}

          />
          <ButtonIcon
            ClassName={`"text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800`}
            Icons={<IconDone ClassName={`w-6 h-6`} />}
            OnClick={()=>SetComplate(true)}
          />
        </div>
      </div>
      {isOpen && <PopupModalEdit onClickClose={() => setIsOpen(false)} OnClickUpdate={HandleUpdatelist} TaskObj={TaskObj} />}
    </div>
  );
};

export default Card;
