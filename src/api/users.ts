import { GET_ALL_USERS, GET_SINGLE_USER } from "../data";
import apiClient from "../service/apiClient";
import { toast } from "react-toastify";

export const getAllUsers = async () => {
  try {
    const response = await apiClient(GET_ALL_USERS);
    if (typeof response !== "undefined")
      if (response.status === 200) {
        console.log("good response", response.data);
        // toast.success(response.statusText);
        return response.data;
      } else {
        toast.error(response.statusText);
        return response.statusText;
      }
  } catch (err) {
    console.log("error catched", err);
    toast.error("An error occured getting users, Please try again later.");
  }
};

export const getSingleUser = async (id: string) => {
  try {
    const response = await apiClient(GET_SINGLE_USER(id));
    if (typeof response !== "undefined")
      if (response.status === 200) {
        console.log("good response", response.data);
        // toast.success(response.statusText);
        return response.data;
      } else {
        toast.error(response.statusText);
        return response.statusText;
      }
  } catch (err) {
    console.log("error catched", err);
    toast.error("An error occured");
  }
};
