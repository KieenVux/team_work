import { IUser } from "../context/user";
import { useAxios } from "./useAxios";
export const useCRUD = () => {
    const { data, execute } = useAxios<IUser>();

    const getAllUsers = async () => {
        await execute("get", "users");
        console.log(data);
    };
    const createUser = async () => {
        await execute("post", "users", "", { id: "11", name: "Kiet" });
        console.log(data);
    };
    const updateUser = () => {
        execute("patch", "users", "/1", { name: "Kiet" });
        console.log(data);
    };
    const deleteUser = () => {
        execute("delete", "users", "/11");
        console.log(data);
    };
    return { getAllUsers, createUser, updateUser, deleteUser };
};
