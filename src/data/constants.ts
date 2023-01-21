import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

// Base url
export const apiBaseUrl =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/";

// Api Routes
export const GET_ALL_USERS = "users";
export const GET_SINGLE_USER = (id: string) => `users/${id}`;

export const queryKeys = {
  allUsers: "allUsers",
  singleUser: "singleUser",
};
