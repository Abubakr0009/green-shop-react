import React, { useState } from "react";

const Dashboard = () => {
 
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      username: "",
      profilePhoto: null,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFileChange = (e) => {
      setFormData({ ...formData, profilePhoto: e.target.files[0] });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  const [user, setUser] = useState(null);
  return (
    <div className="max-sm:mx-[10px]">
      <div className="flex my-[62px] gap-[30px]">
        <div className="bg-[#FBFBFB] w-[310px] h-fit text-xl p-[15px] max-sm:hidden">
          <h1 className="font-bold">My Account</h1>
          <div className="flex flex-col gap-3 mt-[15px] border-b border-[#46A35880] pb-[35px]">
            <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold border-l-[5px] border-[#46A358] text-[#46A358] text-bold bg-white">
              <span
                role="img"
                aria-label="user"
                className="anticon anticon-user"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="user"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                </svg>
              </span>
              <h3 className="font-normal text-base">Account Details</h3>
            </div>
            <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold false">
              <span
                role="img"
                aria-label="shopping"
                className="anticon anticon-shopping"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="shopping"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
                </svg>
              </span>
              <h3 className="font-normal text-base">My Products</h3>
            </div>
            <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold false">
              <span
                role="img"
                aria-label="environment"
                className="anticon anticon-environment"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="environment"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"></path>
                </svg>
              </span>
              <h3 className="font-normal text-base">Address</h3>
            </div>
            <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold false">
              <span
                role="img"
                aria-label="heart"
                className="anticon anticon-heart"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="heart"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                </svg>
              </span>
              <h3 className="font-normal text-base">Wishlist</h3>
            </div>
            <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold false">
              <span
                role="img"
                aria-label="dashboard"
                className="anticon anticon-dashboard"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="dashboard"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M924.8 385.6a446.7 446.7 0 00-96-142.4 446.7 446.7 0 00-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 00-142.4 96 446.7 446.7 0 00-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 01140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 00-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 000 79.2 55.95 55.95 0 0079.2 0 55.87 55.87 0 0014.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 00-11.3 0l-56.6 56.6a8.03 8.03 0 000 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 00-11.3 0l-31.1 31.1a8.03 8.03 0 000 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </span>
              <h3 className="font-normal text-base">Track Order</h3>
            </div>
          </div>
          <div className="flex items-center  gap-3 cursor-pointer pl-[5px] w-full h-[40px] mt-[20px] hover:text-white text-base text-red-400 hover:bg-red-600">
            <span
              role="img"
              aria-label="logout"
              className="anticon anticon-logout w-[20px]  h-[20px]"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="logout"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"></path>
              </svg>
            </span>

            <button
              onClick={() => {
                localStorage.removeItem("user");
                setUser(null);
              }}
              className=" hover:bg-red-600  cursor-pointer p-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
        <form
          id="complex-form"
          className="ant-form ant-form-vertical ant-form-large css-k7429z w-full"
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">First name *</label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="Abubakr" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Last name *</label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="Your last name" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Email address *</label>
          <input name="email" value={formData.email} onChange={handleChange} className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" type="email" placeholder="aaa123@gmail.com" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Phone Number *</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-gray-700 bg-gray-200 border border-r-0 border-gray-300 rounded-l-lg">+998</span>
            <input name="phone" value={formData.phone} onChange={handleChange} className="border rounded-r-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="Your phone number..." />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Username *</label>
          <input name="username" value={formData.username} onChange={handleChange} className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="Your username..." />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Profile photo</label>
          <input onChange={handleFileChange} className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" type="file" accept=".png,.jpg,.jpeg" />
        </div>
      </div>

     
          <button
            type="submit"
            className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[15px]"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
