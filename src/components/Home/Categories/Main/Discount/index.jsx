import { memo } from "react";
import { Skeleton } from "antd";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = import.meta.env.VITE_API;
const fetchCategories = async () => {
  const { data } = await axios.get(`
    ${api}/features/discount?access_token=64bebc1e2c6d3f056a8c85b7`);
  return data;
};

const Discount = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return (
    <>
      <div className="mt-[20px] text-start bg-[#d9fae0] w-full h-[400px] flex flex-col items-center">
        <h1 className="mt-[18px] text-[#46A358] text-4xl font-bold">
          {data?.data?.title}
        </h1>
        <p className="mt-[11px] text-2xl font-bold">
          UP TO {data?.data?.discoount_up_to}% OFF
        </p>

        <img
          src={data?.data?.poster_image_url}
          alt="Discount Image"
          className="my-[10px] h-[180px]"
        />
      </div>
    </>
  );
};

export default memo(Discount);
