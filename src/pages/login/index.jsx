import axios from "axios";
import React, { useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const isSubmitting = useRef(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isSubmitting.current) return;
    isSubmitting.current = true;

    try {
      const token = "64bebc1e2c6d3f056a8c85b7";
      const apiUrl = "https://green-shop-backend.onrender.com/api";
      const res = await axios.post(
        `${apiUrl}/user/sign-in?access_token=${token}`,
        {
          email: formData.email.trim(),
          password: formData.password.trim(),
        }
      );
      setSuccessMessage("Login muvaffaqiyatli!");
      setErrorMessage("");
      navigate("/dashboard");
    } catch (error) {
      const errorMsg =
        error.response?.data?.extraMessage || "Xatolik yuz berdi!";
      setErrorMessage(errorMsg);
    } finally {
      isSubmitting.current = false;
    }
  };

  return (
    <div className="w-[472px] flex flex-col items-center">
      <h3 className="text-sm mr-[100px] mt-8 font-normal">
        Enter your username and password to login.
      </h3>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleLogin}>
        <input
          placeholder="name or surname number@outlook.com"
          name="email"
          type="email"
          id="email"
          aria-required="true"
          onChange={handleChange}
          className="pl-[15px] w-[377px] h-[40px] mt-[14px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
        />
        <div className="relative mt-[50px]">
          <input
            name="password"
            placeholder="*********"
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            aria-required="true"
            onChange={handleChange}
            className="pl-[15px] w-[377px] h-[40px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
          />
          <button
            type="button"
            className="absolute right-[15px] top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        <p className="ml-[250px] my-[25px] cursor-pointer text-green-600 font-[600]">
          Forgot Password?
        </p>
        <button
          type="submit"
          className="w-[377px] hover:bg-green-600 bg-green-500 cursor-pointer text-white p-2 rounded"
        >
          Login
        </button>
      </form>
      <div className="flex items-center">
        <span className="border-t-[1px] w-[130px] mt-[5px]"></span>
        <p className="my-[16px] mx-[10px]">Or login with</p>
        <span className="border-t-[1px] w-[130px] mt-[5px]"></span>
      </div>
      <div className="w-[377px]">
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
          <span
            role="img"
            aria-label="facebook"
            className="anticon anticon-facebook pl-[15px]"
          >
            {/* SVG for Facebook */}
          </span>
          Login with Facebook
        </button>
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md">
          <span
            role="img"
            aria-label="google"
            className="anticon anticon-google pl-[15px]"
          >
            {/* SVG for Google */}
          </span>
          Login with Google
        </button>
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mt-[15px]">
          <span
            role="img"
            aria-label="scan"
            className="anticon anticon-scan pl-[15px]"
          >
            {/* SVG for QR Scan */}
          </span>
          Login with QR Code
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
