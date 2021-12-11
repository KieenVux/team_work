import React from "react";
import { useQuery } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import { instance } from "../common/axios";
import { ResponseObject } from "../common/reponse.object";
import { User } from "../context/user";
import { useUser } from "../hook/user";

interface AccountProps {}

export const Account: React.FC<AccountProps> = ({}) => {
  const { user, logout } = useUser();

  const navigate = useNavigate();
  const getAccount = async (): Promise<ResponseObject<User>> => {
    const response = await instance.get("/account");
    return response.data;
  };

  const { data, isLoading } = useQuery("user", getAccount);

  // navigate to login if user not have authorization or haven't login yet
  if (user == null || user == undefined) return <Navigate to="/login" />;
  if (!user.role?.includes("user")) return <Navigate to="/login" />;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      this is Account page for user
      <button onClick={handleLogout}>Logout</button>
      {!isLoading && data && (
        <div>
          <div>You are: {data.data.name}</div>
        </div>
      )}
    </div>
  );
};
