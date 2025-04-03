"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import LoginForm from "../Login";
import RegisterForm from "../Register";
const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="fixed inset-0  overlay flex bg-[#939191]   items-center justify-center z-50"
      >
        {/* <div className="absolute  modal bg-opacity-1" onClick={onClose}></div> */}
        <div className="bg-white modal p-6 rounded-2xl shadow-lg w-[520px]  relative z-10">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 cursor-pointer hover:bg-gray-200 text-gray-500"
          >
            <X size={20} />
          </button>

          <div className="flex justify-center cursor-pointer transform ease-in space-x-4 mb-4 border-b pb-2">
            <button
              className={`font-semibold cursor-pointer text-[20px] ${
                isLogin ? "text-green-600" : "text-gray-500"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <span className="text-gray-400  flex items-center">|</span>
            <button
              className={`font-semibold cursor-pointer text-[20px] ${
                !isLogin ? "text-green-600" : "text-gray-500"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </Dialog>
    </>
  );
};
export default AuthModal;
