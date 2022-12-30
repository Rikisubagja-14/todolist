import React, {useEffect, useState } from "react";
import Button from "../../atoms/Button";
import PopupModal from "../../atoms/PopupModal";
import Card from "../../atoms/Card";
import Search from "../../atoms/Search";
import ClockTimer from "../../atoms/ClockTimer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskList,setTaskList] = useState([]);

  useEffect(()=>{
    let arr = localStorage.getItem("taskList");
    if(arr){
      let object = JSON.parse(arr);
      setTaskList(object)
    }
  },[taskList]);

  const HandleSaveTaskList = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setIsOpen(false)
    setTaskList(tempList);
  }
  return (
    <>
    <div className="text-center border-gray-200 px-2 sm:px-4 py-2.5 mr-11 ml-11 pb-3 rounded-t-lg bg-orange-200">
      <div className="p-10 container my-12 mx-auto px-4 md:px-12">
        {/* <div className="mb-16 flex justify-start">
        <ClockTimer/>
        </div> */}
        <Button
          ClassName={`h-32 w-full italic text-sm md:text-5xl font-serif text-white bg-gradient-to-br from-gray-900 to-blue-900 hover:bg-gradient-to-bl  focus:ring-blue-300 dark:focus:ring-gray-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2`}
          onClick={() => setIsOpen(true)}
          title={`PLEASE CLICK TO CREATE A NEW ASSIGNMENT`}
        />
        <Search />
        {isOpen && <PopupModal onClickClose={() => setIsOpen(false)} onClickCreate={HandleSaveTaskList}/>}
      </div>

      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {taskList.map((key)=>
           <Card
            title={key.title}
            desc={key.description}
         />
          )}
          
        </div>
      </div>
    </div>
    </>
  );
};

export default Layout;
