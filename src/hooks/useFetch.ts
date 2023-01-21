import { getAllUsers, getSingleUser } from "./../api/users";
import { useQuery } from "react-query";
import { queryKeys } from "../data";
import { User } from "../types/response";

export const useGetAllUsers = () => {
  const { data, status, isFetching } = useQuery<User[], Error>(
    queryKeys.allUsers,
    () => getAllUsers()
  );
  return { data, status, isFetching };
};

export const useGetSingleUser = (id: string) => {
  const { data, status, isFetching } = useQuery<User[], Error>(
    queryKeys.singleUser,
    () => getSingleUser(id)
  );
  return { data, status, isFetching };
};
