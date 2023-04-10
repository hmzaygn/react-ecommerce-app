import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useAxios, { axiosPublic } from "./useAxios";
import { fetchStart } from "../features/authSlice";

const useProductCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosWithToken } = useAxios();

  const getAllItems = async (setItems) => {
    try {
      const { data } = await axiosPublic.get("items/");
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllItems };
};

export default useProductCalls;
