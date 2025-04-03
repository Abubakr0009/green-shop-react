import axios from "axios";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isPassword, setIsPassword] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      setErrorMessage("Email and password are required!");
      setSuccessMessage("");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      const token = "64bebc1e2c6d3f056a8c85b7"; 
      const api = import.meta.env.VITE_API;

      const res = await axios.post(
        `${api}/user/sign-in?access_token=${token}`,
        {
          email: formData.email.trim(),
          password: formData.password.trim(),
        }
      );

      if (res.data?.data?.user) {
        const userData = res.data.data.user;
        localStorage.setItem("user", JSON.stringify(userData));
        setSuccessMessage("Muvaffaqiyatli kirdingiz!");
        setErrorMessage("");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setErrorMessage("Foydalanuvchi topilmadi!");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Login xatosi! Email yoki parol noto‘g‘ri.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="w-[472px] h-[500px] flex flex-col items-center">
      <div className="absolute">
        <h3 className="text-sm mr-[100px] mt-8 font-normal">
          Enter your username and password to login.
        </h3>
        {errorMessage && (
          <p className="text-red-600 relative text-center top-[-50px]">
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="text-green-600 text-center relative top-[-50px]">
            {successMessage}
          </p>
        )}
      </div>

      <input
        placeholder="name or surname number@gmail.com"
        name="email"
        type="email"
        onChange={handleChange}
        className="pl-[15px] w-[377px] h-[40px] relative top-[50px] mt-[14px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />
      <div className="relative top-[50px]">
        <input
          name="password"
          placeholder="*********"
          type={isPassword ? "password" : "text"}
          onChange={handleChange}
          className="pl-[15px] w-[377px] mt-[14px] h-[40px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
        />
        <button
          type="button"
          className="absolute right-[86px] top-[50px] transform -translate-y-1/2"
          onClick={() => setIsPassword(!isPassword)}
        >
          {isPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>

      <p className="ml-[250px] my-[25px] relative top-[50px] cursor-pointer text-green-600 font-[600]">
        Forgot Password?
      </p>

      <button
        onClick={handleLogin}
        className="w-[377px] hover:bg-green-600 relative top-[40px] bg-green-500 cursor-pointer text-white p-2 rounded"
      >
        Login
      </button>

      <div className="flex items-center relative top-[50px]">
        <span className="border-t-[1px] w-[130px] mt-[5px]"></span>
        <p className="my-[16px] mx-[10px]">Or login with</p>
        <span className="border-t-[1px] w-[130px] mt-[5px]"></span>
      </div>

      <div className="w-[377px] relative top-[50px]">
        {/* Social login buttons (Facebook, Google, etc.) */}
        {/* Your other login options */}
      </div>
    </div>
  );
};

export default LoginForm;
