import React from "react";
import { useSelector } from "react-redux";
import DropIndicators from "./DropIndicators";
import NewTaskButton from "../utils/NewTaskButton";
import TaskCard from "./TaskCard";
import handleEditAllTask from "../api/handleEditAll";
import handleEditTask from "../api/handleEditTask";

const Column = ({ column }) => {
  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators(column);
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.childNodes[0].style.opacity = "1";
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators(column);
    indicators.forEach((i) => {
      i.childNodes[0].style.opacity = "0";
    });
  };

  const handleDragLeave = (e) => {
    clearHighlights();
  };

  const handleDragEnd = (e) => {
    clearHighlights();

    const indicators = getIndicators();
    const el = getNearestIndicator(e, indicators);

    const before = el.element.dataset.before || "-1";
    const cardId = e.dataTransfer.getData("cardId");

    if (before !== cardId) {
      let copy = tasks;

      let cardToTransfer = copy.find((c) => c._id == cardId);
      cardToTransfer = { ...cardToTransfer, status: column };

      copy = copy.filter((task) => task._id != cardId);

      const moveToBack = before === "-1";

      if (!moveToBack) {
        let insertAt = copy.findIndex((c) => c._id == before);
        copy.splice(insertAt, 0, cardToTransfer);
        const finalArray = updateIndexes(copy);
        handleEditAllTask(finalArray);
      } else {
        const count = copy.reduce((count, task) => {
          if (task.status === cardToTransfer.status) {
            count++;
          }
          return count;
        }, 0);
        cardToTransfer = { ...cardToTransfer, idx: count };
        handleEditTask(cardToTransfer);
      }
    }
  };

  const getNearestIndicator = (e, indicators) => {
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + 50);
        if (offset < 0 && offset > closest.offset) {
          return {
            offset,
            element: child,
          };
        } else return closest;
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const updateIndexes = (tasks) => {
    let elements = {
      "To do": 0,
      "In progress": 0,
      "Under review": 0,
      Finished: 0,
    };
    const updatedTasks = tasks.map((task) => {
      console.log("tasks", tasks);
      task = { ...task, idx: elements[task.status] };
      elements[task.status] += 1;
      return task;
    });
    return updatedTasks;
  };

  const { tasks } = useSelector((state) => state.task);

  return (
    <div className="w-[25%]">
      <div className="flex justify-between ">
        <p>{column}</p>
        <img src="/assets/icons/view.svg" alt="" />
      </div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDragEnd}
        onDragLeave={handleDragLeave}
      >
        {tasks.length > 0 &&
          tasks.map(
            (item) =>
              item.status === column && (
                <TaskCard handleDragStart={handleDragStart} task={item} />
              )
          )}
        <DropIndicators before={"-1"} column={column} />
        <NewTaskButton status={column} />
      </div>
    </div>
  );
};

export default Column;
