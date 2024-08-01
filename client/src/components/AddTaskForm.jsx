import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTask } from "../redux/features/newTaskSlice";

const AddTaskForm = () => {
  const { task } = useSelector((state) => state.newTask);
  const dispatch = useDispatch();

  const { title, status, priority, deadline, description } = task;

  const handleChange = (e) => {
    dispatch(setTask({ [e.target.name]: e.target.value }));
  };

  return (
    <form className="flex flex-col gap-[32px] text-[16px] " action="">
      <input
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title"
        className="text-[48px] font-barlow font-semibold placeholder:text-[#CCCCCC] focus:outline-none focus:border-b "
        type="text"
      />
      <div className="flex gap-[60px] ">
        <div className="flex flex-col gap-[32px] text-[#666666] ">
          <label htmlFor="status" className="flex gap-[24px] ">
            <img src="/assets/icons/status.svg" alt="" />
            <p>Status</p>
          </label>
          <label htmlFor="priority" className="flex gap-[22px] ">
            <img src="/assets/icons/priority.svg" alt="" />
            <p>Priority</p>
          </label>
          <label htmlFor="deadline" className="flex gap-[25px] ">
            <img src="/assets/icons/deadline.svg" alt="" />
            <p>Deadline</p>
          </label>
          <label htmlFor="description" className="flex gap-[25px] ">
            <img src="/assets/icons/desc.svg" alt="" />
            <p>Description</p>
          </label>
        </div>
        <div className="flex flex-col align-center gap-[32px] ">
          <div className="selectdiv">
            <select
              onChange={handleChange}
              name="status"
              value={status}
              id="status"
              className="focus:outline-none"
            >
              <option className="text-[#C1BDBD] " value="" selected>
                Not selected
              </option>
              <option value="To do">To do</option>
              <option value="In progress">In progress</option>
              <option value="Under review">Under review</option>
              <option value="Finished">Finished</option>
            </select>
          </div>
          <div className="selectdiv">
            <select
              onChange={handleChange}
              name="priority"
              value={priority}
              id="priority"
              className="focus:outline-none"
            >
              <option className="text-[#C1BDBD] " value="" selected>
                Not selected
              </option>
              <option value="Urgent">Urgent</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <input
            type="date"
            name="deadline"
            value={deadline}
            onChange={handleChange}
            id="deadline"
            placeholder="Not selected"
            className="focus:outline-none"
          />
          <input
            type="text"
            onChange={handleChange}
            name="description"
            value={description}
            id="description"
            placeholder="Not selected"
            className="focus:outline-none placeholder:text-[#C1BDBD] "
          />
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;
