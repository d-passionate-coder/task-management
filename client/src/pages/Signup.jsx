import React, { useEffect, useState } from "react";
import CustomInput from "../utils/CustomInput";
import CustomButton from "../utils/CustomButton";
import { useNavigate } from "react-router-dom";
import CustomPassword from "../utils/CustomPassword";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/auth";

const Signup = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);

  const [formData, setformData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setformData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div className="login  h-screen w-screen relative">
      <div className="flex flex-col gap-[32px] p-[60px] items-center absolute left-1/2 transform -translate-x-1/2  top-[80px] border-[1px] border-[#CECECE] rounded-[16px] innerlogin ">
        <div className="font-barlow font-semibold text-[48px] text-center text-[#2D2D2D] ">
          Welcome to <span className="text-[#4534AC]">Workflo</span>!
        </div>
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col gap-[22px] w-full "
        >
          <div className="flex flex-col gap-[24px] ">
            <CustomInput
              type={"text"}
              name={"name"}
              id={"name"}
              value={name}
              onChange={handleChange}
              placeholder={"Full Name"}
            />
            <CustomInput
              type={"email"}
              id={"email"}
              name={"email"}
              value={email}
              onChange={handleChange}
              placeholder={"Your email"}
            />
            <CustomPassword
              id={"password"}
              value={password}
              onChange={handleChange}
              name={"password"}
            />
          </div>
          <CustomButton onClick={handleSubmit} text={"Sign up"} />
        </form>
        <div className="text-[20px] text-[#606060] ">
          ALready have an account?&nbsp;
          <span
            onClick={() => navigate("/login")}
            className="text-[#0054A1] cursor-pointer "
          >
            Log in
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Signup;
