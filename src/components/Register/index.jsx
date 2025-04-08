// import axios from "axios";
// import React, { useState } from "react";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

// const RegisterForm = ({ onRegisterSuccess }) => {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     surname: "",
//     email: "",
//     password: "",
//     confirmedPassword: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleRegister = async () => {
//     if (
//       !formData.name ||
//       !formData.surname ||
//       !formData.email ||
//       !formData.password ||
//       formData.password !== formData.confirmedPassword
//     ) {
//       setErrorMessage("Xatolik: Barcha maydonlarni to‘ldiring va parollarni tekshirib ko‘ring!");
//       return;
//     }

//     try {
//       const token = "64bebc1e2c6d3f056a8c85b7";
//       const api = import.meta.env.VITE_API;

//       const res = await axios.post(
//         `${api}/user/sign-up?access_token=${token}`,
//         formData
//       );

//       setSuccessMessage("Ro‘yxatdan o‘tish muvaffaqiyatli!");
//       setErrorMessage("");
//       onRegisterSuccess();
//     } catch (error) {
//       const errorMsg = error.response?.data?.message || "Xatolik yuz berdi!";
//       setErrorMessage(errorMsg);
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="flex w-[472px] h-[630px] flex-col items-center">
//       <div className="absolute text-center">
//         <h3 className="text-sm mr-[100px] mt-8 font-normal">
//           Enter your details to create an account.
//         </h3>
//         {errorMessage && (
//           <p className="text-red-600 relative text-center top-[-50px]">{errorMessage}</p>
//         )}
//         {successMessage && (
//           <p className="text-green-600 text-center relative top-[-50px]">{successMessage}</p>
//         )}
//       </div>

//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         onChange={handleChange}
//         className="pl-[15px] w-[377px] relative top-[50px] h-[40px] mt-[14px] border rounded-[10px] border-[#46A358]"
//       />
//       <input
//         type="text"
//         name="surname"
//         placeholder="Surname"
//         onChange={handleChange}
//         className="pl-[15px] w-[377px] relative top-[50px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358]"
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//         className="pl-[15px] w-[377px] relative top-[50px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358]"
//       />
//       <div className="relative w-[377px] top-[50px]">
//         <input
//           type={isPasswordVisible ? "text" : "password"}
//           name="password"
//           placeholder="*********"
//           onChange={handleChange}
//           className="pl-[15px] w-full h-[40px] mt-[25px] border rounded-[10px] border-[#46A358]"
//         />
//         <button
//           type="button"
//           className="absolute right-4 top-[34px] cursor-pointer"
//           onClick={() => setIsPasswordVisible(!isPasswordVisible)}
//         >
//           {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
//         </button>
//       </div>
//       <input
//         type={isPasswordVisible ? "text" : "password"}
//         name="confirmedPassword"
//         placeholder="Confirm Password"
//         onChange={handleChange}
//         className="pl-[15px] w-[377px] relative top-[50px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358]"
//       />
//       <button
//         onClick={handleRegister}
//         className="w-[377px] relative top-[50px] mt-[25px] bg-green-500 hover:bg-green-600 text-white p-2 rounded"
//       >
//         Register
//       </button>
//     </div>
//   );
// };

// export default RegisterForm;











import axios from "axios";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../../firebase";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const token = "64bebc1e2c6d3f056a8c85b7";
  const api = import.meta.env.VITE_API;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { name, surname, email, password, confirmedPassword } = formData;
    if (!name || !surname || !email || !password || password !== confirmedPassword) {
      setErrorMessage("Barcha maydonlar to‘ldirilishi va parollar mos bo‘lishi kerak!");
      setSuccessMessage("");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      const res = await axios.post(
        `${api}/user/sign-up?access_token=${token}`,
        formData
      );

      setSuccessMessage("Ro‘yxatdan o‘tish muvaffaqiyatli!");
      setErrorMessage("");
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (error) {
      const msg = error.response?.data?.message || "Xatolik yuz berdi!";
      setErrorMessage(msg);
      setSuccessMessage("");
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const result = await signInWithGoogle();
      const googleEmail = result.user.email;
      const displayName = result.user.displayName || "";
      const [name, surname] = displayName.split(" ");

      const res = await axios.post(
        `${api}/user/sign-up/google?access_token=${token}`,
        {
          email: googleEmail,
          name: name || "",
          surname: surname || "",
        }
      );

      if (res.data?.data?.user) {
        setSuccessMessage("Google orqali ro‘yxatdan o‘tildi!");
        setErrorMessage("");
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        setErrorMessage("Google foydalanuvchisi bilan ro‘yxatdan o‘tolmadingiz.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Google orqali register xatosi:", error);
      setErrorMessage("Google orqali ro‘yxatdan o‘tishda xatolik yuz berdi.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex w-[472px] h-[680px] flex-col items-center">
      <div className="absolute text-center">
        <h3 className="text-sm mr-[100px] mt-8 font-normal">
          Enter your details to create an account.
        </h3>
        {errorMessage && (
          <p className="text-red-600 relative text-center top-[-50px]">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-600 text-center relative top-[-50px]">{successMessage}</p>
        )}
      </div>

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="pl-[15px] w-[377px] relative top-[50px] h-[40px] mt-[14px] border rounded-[10px] border-[#46A358]"
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        onChange={handleChange}
        className="pl-[15px] w-[377px] relative top-[50px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358]"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="pl-[15px] w-[377px] relative top-[50px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358]"
      />
      <div className="relative w-[377px] top-[50px]">
        <input
          type={isPasswordVisible ? "text" : "password"}
          name="password"
          placeholder="*********"
          onChange={handleChange}
          className="pl-[15px] w-full h-[40px] mt-[25px] border rounded-[10px] border-[#46A358]"
        />
        <button
          type="button"
          className="absolute right-4 top-[34px] cursor-pointer"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>
      <input
        type={isPasswordVisible ? "text" : "password"}
        name="confirmedPassword"
        placeholder="Confirm Password"
        onChange={handleChange}
        className="pl-[15px] w-[377px] relative top-[50px] h-[40px] mt-[25px] border rounded-[10px] border-[#46A358]"
      />
      <button
        onClick={handleRegister}
        className="w-[377px] relative top-[40px] mt-[25px] bg-green-500 hover:bg-green-600 text-white p-2 rounded"
      >
        Register
      </button>

      <div className="flex items-center relative top-[50px] mt-4">
        <span className="border-t-[1px] w-[130px] mt-[5px]"></span>
        <p className="my-[16px] mx-[10px]">Or register with</p>
        <span className="border-t-[1px] w-[130px] mt-[5px]"></span>
      </div>

      <div className="w-[377px] relative top-[50px]">
        <button
          onClick={handleGoogleRegister}
          className="w-full border border-green-500 text-green-500 py-2 rounded hover:bg-green-50"
        >
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
