import React, { useState } from "react";
import Button from "../Button";

const PopupModal = ({ onClickClose, onClickCreate }) => {

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');

  const HandleOnChange = (e) => {
    const {name,value} = e.target

    if(name === "title"){
      setTitle(value)
    }else{
      setDescription(value);
    }

  }

  const HandleSave = () => {
    let taskObj = {}
    taskObj["title"] = title;
    taskObj["description"] = description;
    onClickCreate(taskObj);
  }
  
  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 ">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form>
            <div>
              <h1 className="text-2xl text-center italic font-serif">
                CREATE TODO LIST
              </h1>
              <div className="dark:bg-gray-900 px-4 pt-5 h-auto pb-4 sm:p-6 sm:pb-4">
                <label className="text-white italic font-serif">Title</label>
                <input
                  type="text"
                  className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg"
                  value={title}
                  onChange={HandleOnChange}
                  name="title"
                />
                <label className="text-white italic font-serif">
                  Description
                </label>
                <textarea
                  type="text"
                  className="w-full bg-gray-100 h-44 p-2 mt-2 mb-3 rounded-lg"
                  value={description}
                  onChange={HandleOnChange}
                  name="description"
                />
              </div>
            </div>
            <div>
              <div class="dark:bg-gray-900 px-5 py-5 pb-10 text-right flex justify-between">
                <Button
                  ClassName={`py-2 px-4 italic font-serif text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm`}
                  title={`CLOSE`}
                  onClick={onClickClose}
                />
                <Button
                  ClassName={`py-2 px-4 italic font-serif text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center`}
                  title={`CREATE`}
                  onClick={HandleSave}
                />
              </div>
              <div className="text-2xl text-center">
                -----------------------------
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
