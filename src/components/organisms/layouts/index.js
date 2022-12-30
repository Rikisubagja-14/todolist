import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import PopupModal from "../../atoms/PopupModal";
import Card from "../../atoms/Card";
import Search from "../../atoms/Search";
import ClockTimer from "../../atoms/ClockTimer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const storedItems = localStorage.getItem("taskList");
    if (storedItems) {
      setTaskList(JSON.parse(storedItems));
    }
  }, []);

  const handleFilter = (event) => {
    let keybord = event.target.value;
    if (keybord !== "") {
      const filteredItems = taskList.filter((item) => {
        return item.title.includes(keybord);
      });
      setTaskList(filteredItems);
    } else {
      setTaskList(taskList);
      window.location.reload();
    }
    setName(keybord);
  };

  const HandleSaveTaskList = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setIsOpen(false);
    setTaskList(tempList);
  };
  const HandleUpdatelist = (object, index) => {
    let tempList = taskList;
    tempList[index] = object;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };
  const HandleDeleteTaskList = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };
  return (
    <>
      <div className="text-center border-gray-200 px-2 sm:px-4 py-2.5 mr-11 ml-11 pb-3 rounded-t-lg bg-orange-200">
        <div className="p-10 container my-12 mx-auto px-4 md:px-12">
          <Button
            ClassName={`h-32 w-full italic text-sm md:text-5xl font-serif text-white bg-gradient-to-br from-gray-900 to-blue-900 hover:bg-gradient-to-bl  focus:ring-blue-300 dark:focus:ring-gray-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2`}
            onClick={() => setIsOpen(true)}
            title={`PLEASE CLICK TO CREATE A NEW ASSIGNMENT`}
          />
          <Search OnChange={handleFilter} />
          {isOpen && (
            <PopupModal
              onClickClose={() => setIsOpen(false)}
              onClickCreate={HandleSaveTaskList}
            />
          )}
        </div>

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {taskList && taskList.length > 0 ? (
              taskList.map((key, index) => (
                <Card
                  title={key.title}
                  desc={key.description}
                  index={index}
                  HandleOnClick={HandleDeleteTaskList}
                  OnClickEdit={HandleUpdatelist}
                  TaskObj={key}
                />
              ))
            ) : (
              <p className="container my-12 mx-auto px-4 md:px-12 text-4xl italic font-bold">
                {" "}
                Opsss .... DATA NOT YET AVAILABLE
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
