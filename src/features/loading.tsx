import { IUser } from '../context/user';
import { useAxios } from '../hooks/useAxios';
import { HomePage } from '../screens/homePage';
import './loading.css'

export const Loading = () => {
    const { data, loading } = useAxios<IUser>();
    return (
        <div className="circle-loading">
        </div>
    )
}
