"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import LoginForm from "../Login";
import RegisterForm from "../Register";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);

  // Ro'yxatdan o'tgandan keyin modalni yopish
  useEffect(() => {
    if (isRegistered) {
      onClose();
      setIsRegistered(false); // Modal qayta ochilganda ro‘yxatdan o‘tish flagi to‘g‘ri ishlashi uchun
    }
  }, [isRegistered, onClose]);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 flex items-center justify-center bg-[#939191] bg-opacity-50 z-50"
    >
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[520px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer hover:bg-gray-200 text-gray-500 p-1 rounded-full"
        >
          <X size={20} />
        </button>

        <div className="flex justify-center space-x-4 mb-4 border-b pb-2">
          <button
            className={`font-semibold text-[20px] ${isLogin ? "text-green-600" : "text-gray-500"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <span className="text-gray-400 flex items-center">|</span>
          <button
            className={`font-semibold text-[20px] ${!isLogin ? "text-green-600" : "text-gray-500"}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? <LoginForm /> : <RegisterForm onRegisterSuccess={() => setIsRegistered(true)} />}
      </div>
    </Dialog>
  );
};

export default AuthModal;
