import React from "react";
import { useQuery } from "react-query";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { instance } from "../common/axios";
import { ResponseObject } from "../common/reponse.object";
import { User } from "../context/user";
import { useUser } from "../hook/user";

interface AccountsProps {}

export const Accounts: React.FC<AccountsProps> = ({}) => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const getAccounts = async (): Promise<ResponseObject<User[]>> => {
    const response = await instance.get("/account/index");
    return response.data;
  };

  const { data, isLoading } = useQuery("user", getAccounts);

  // navigate to login if user not have authorization or haven't login yet
  if (user == null || user == undefined) return <Navigate to="/login" />;
  if (!user.role?.includes("admin")) return <Navigate to="/login" />;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <div>this is account pages for admin</div>
      <button onClick={handleLogout}>Logout</button>
      {user.role.includes("user") && <Link to="/account">View my profile</Link>}
      {!isLoading &&
        data &&
        data?.data.map((item, index) => <div key={index}>{item.name}</div>)}
    </div>
  );
};
