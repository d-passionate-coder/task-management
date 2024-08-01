import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAction, setTask } from "../redux/features/newTaskSlice";
import AddTaskForm from "./AddTaskForm";
import handleEditTask from "../api/handleEditTask";
import handleAddTask from "../api/handleAddTask";
import { infoToast } from "../utils/CustomToast";

const AddNewTask = () => {
  const { isOpen, task, type, id } = useSelector((state) => state.newTask);
  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(handleAction());
    try {
      if (!task.title) {
        infoToast("Title is mandatory!");
      } else if (!task.priority) {
        infoToast("Priority must be set!");
      } else if (!task.status) {
        infoToast("A task should have a valid status!");
      } else {
        let flag = 1;
        let count = tasks.reduce(
          (count, { status: statusNow, _id: taskId }) => {
            if (type == "edit" && taskId === id) flag = 0;
            if (flag && statusNow === task.status) {
              count++;
            }
            return count;
          },
          0
        );
        dispatch(setTask({ idx: count }));
        if (type === "new") {
          await handleAddTask({ ...task, idx: count });
        } else {
          await handleEditTask({ ...task, idx: count, _id: id });
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(
        setTask({
          title: "",
          status: "",
          deadline: "",
          priority: "",
          description: "",
          idx: null,
        })
      );
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`${
          isOpen ? "popup" : "hidden"
        } h-full w-full z-[10] absolute top-0 left-0`}
      ></div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-[670px] fixed z-[11] ease-in-out right-0 bg-white h-screen overflow-y-auto top-0 transition duration-500 pt-[16px] font-inter `}
      >
        <div className="flex px-[24px] gap-[32px] flex-col ">
          <div className="flex gap-[27px] flex-col">
            <div className="flex justify-between">
              <div className="flex gap-[16px] p-[8px] ">
                <img
                  onClick={handleClick}
                  src="/assets/icons/close.svg"
                  alt=""
                  className="cursor-pointer hover:drop-shadow rounded-full"
                />
                <img src="/assets/icons/resize.svg" alt="" />
              </div>
              <div className="flex gap-[16px] text-[#797979] ">
                <div className="flex p-[8px] gap-[14px] rounded-[4px] bg-[#F4F4F4] ">
                  <p>Share</p>
                  <img src="/assets/icons/share.svg" alt="" />
                </div>
                <div className="flex p-[8px] gap-[14px] rounded-[4px] bg-[#F4F4F4] ">
                  <p>Favorite</p>
                  <img src="/assets/icons/fav.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[38px] ">
              <AddTaskForm />
              <div className="flex gap-[23px] ">
                <img src="/assets/icons/plus3.svg" alt="" />
                <p>Add custom property</p>
              </div>
            </div>
          </div>
          <hr className="h-[1px] bg-[#DEDEDE] w-full " />
          <div className="text-[#C0BDBD] text-[16px] ">
            Start writing, or drag your own files here.
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewTask;
