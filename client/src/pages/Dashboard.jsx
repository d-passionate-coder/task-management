import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import AddNewTask from "../components/AddNewTask";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setLoginStatus } from "../redux/features/authSlice";
import getTasks from "../redux/actions/tasks";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      dispatch(setLoginStatus({ status: true, user }));
      dispatch(getTasks());
    }
  }, []);
  const { isLoggedIn } = useSelector((state) => state.auth);

  return !isLoggedIn ? (
    <Navigate to={"/"} />
  ) : (
    <div className="flex min-h-screen h-full w-full relative">
      <Sidebar />
      <Content />
      <AddNewTask />
    </div>
  );
};

export default Dashboard;
