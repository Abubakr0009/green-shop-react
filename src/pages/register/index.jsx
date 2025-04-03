import { useState } from "react";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
const RegisterForm = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmed_password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = async () => {
    if (
      !formData.name ||
      !formData.surname ||
      !formData.email ||
      !formData.password
    ) {
      console.error("Xatolik: Barcha maydonlarni to‘ldiring!");
      return;
    }
    try {
      const token = "64bebc1e2c6d3f056a8c85b7";
      const apiUrl = "https://green-shop-backend.onrender.com/api";
      const res = await axios.post(
        `${apiUrl}/user/sign-up?access_token=${token}`,
        formData
      );
      console.log("Ro‘yxatdan o‘tish muvaffaqiyatli:", res.data);
    } catch (error) {
      console.error(
        "Xatolik yuz berdi:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <div className="flex w-[472px] flex-col items-center">
      <h3 className="text-sm mr-[100px] mt-[10px] font-normal">
        Enter your email and password to register.
      </h3>
      <input
        type="text"
        name="name"
        placeholder="Ism"
        onChange={handleChange}
        id="name"
        className="pl-[15px] w-[377px]  h-[40px] mt-[14px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />
      <input
        type="text"
        name="surname"
        placeholder="Familiya"
        onChange={handleChange}
        id="username"
        className="pl-[15px] w-[377px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        id="email"
        className="pl-[15px] w-[377px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />
      <input
        type={isPassword ? "password" : "text"}
        name="password"
        onChange={handleChange}
        placeholder="*********"
        id="password"
        aria-required="true"
        className="pl-[15px] w-[377px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />
      <button
        type="button"
        className="absolute right-[87px] cursor-pointer top-[333px] transform -translate-y-1/2"
        onClick={() => setIsPassword(!isPassword)}
      >
        {isPassword ? <FaRegEye /> : <FaRegEyeSlash />}
      </button>
      <input
        type={isPassword ? "password" : "text"}
        name="confirmed_password"
        placeholder="Parolni tasdiqlang"
        onChange={handleChange}
        id="confirm your password"
        className="pl-[15px] w-[377px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358] hover:outline-[#3b82f680]"
      />
      <button
        type="button"
        className="absolute right-[88px] cursor-pointer top-[394px] transform -translate-y-1/2"
        onClick={() => setIsPassword(!isPassword)}
      >
        {/* {isPassword ? <FaRegEye /> : <FaRegEyeSlash />} */}
      </button>
      <button
        onClick={handleRegister}
        className="w-[377px]  mt-[25px] cursor-pointer hover:bg-green-600 bg-green-500 text-white p-2 rounded"
      >
        Register
      </button>
      <div className="flex  items-center">
        <span className="border-t-[1px] w-[130px] mt-[5px]"></span>
        <p className="my-[16px] mx-[10px] ">Or login with</p>
        <span className="border-t-[1px] w-[130px]  mt-[5px]"></span>
      </div>
      <div className="w-[377px]">
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
          <span
            role="img"
            aria-label="facebook"
            className="anticon anticon-facebook pl-[15px]"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="facebook"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
            </svg>
          </span>
          Login with Facebook
        </button>
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md">
          <span
            role="img"
            aria-label="google"
            className="anticon anticon-google pl-[15px]"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="google"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"></path>
            </svg>
          </span>
          Login with Google
        </button>
        <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mt-[15px]">
          <span
            role="img"
            aria-label="scan"
            className="anticon anticon-scan pl-[15px]"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="scan"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M136 384h56c4.4 0 8-3.6 8-8V200h176c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-37.6 0-68 30.4-68 68v180c0 4.4 3.6 8 8 8zm512-184h176v176c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V196c0-37.6-30.4-68-68-68H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zM376 824H200V648c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v180c0 37.6 30.4 68 68 68h180c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm512-184h-56c-4.4 0-8 3.6-8 8v176H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h180c37.6 0 68-30.4 68-68V648c0-4.4-3.6-8-8-8zm16-164H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </span>
          Login with Qr Code
        </button>
      </div>
    </div>
  );
};
export default RegisterForm;
