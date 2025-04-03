import { Slider } from "antd";
import Discount from "./Discount";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const api = import.meta.env.VITE_API;

const fetchUsers = async () => {
  const { data } = await axios.get(`
    ${api}/flower/category?access_token=64bebc1e2c6d3f056a8c85b7`);
  return data;
};

const CategoriesMain = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [range, setRange] = useState([
    searchParams.get("range_min") || 0,
    searchParams.get("range_max") || 1000,
  ]);

  const category = searchParams.get("category") || "house-plants";

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  const updateSort = (sortType) => {
    searchParams.set("category", sortType);
    setSearchParams(searchParams);
  };

  const updateRange = (min, max) => {
    searchParams.set("range_min", min)
    searchParams.set("range_max", max)

    setSearchParams(searchParams)
  }


  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik yuz berdi: {error.message}</p>;

  return (
    <div className="w-[250px] bg-[#F5F5F580] p-[15px] my-[30px] ">
      <h3 className="font-bold text-start">Categories</h3>
      <div className="flex flex-col gap-4 mt-[10px] pl-[10px]">
        {data?.data.map(({ title, count, route_path }, index) => {
          return (
            <div
              onClick={() => updateSort(route_path)}
              key={index}
              className={`flex text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors ${
                category === route_path && "text-green-600"
              }`}
            >
              <h1>{title}</h1>
              <h1>({count})</h1>
            </div>
          );
        })}
      </div>
      <div className="mt-[15px] text-start">
        <h3 className="font-bold ">Price Range</h3>
        <Slider range defaultValue={[1, 1000]} max={1000}  onChange={(e) => setRange(e)}/>
        <p className="font-normal">
          Price: <span className="font-bold text-[#46A358]">{range[0]}$ - {range[1]}$</span>
        </p>
        <button 
        onClick={() => updateRange(range[0],range[1])}
        className="mt-[16px] bg-[#46A358] text-white px-[23px] py-[8px] rounded-lg">
          Filter
        </button>
      </div>
      <Discount />
    </div>
  );
};

export default CategoriesMain;
