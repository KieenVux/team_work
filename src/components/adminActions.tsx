import { Navigate, useNavigate } from 'react-router-dom'
import { useStore } from '../context/user'


function Users() {
    const user = useStore()

    const navigate = useNavigate();

    console.log('userInfos.data:',user.fetchApiData);
    

    if (!user.isAuthenticated)
        return <Navigate to={"/userAction"} />

    const onClickNextPage = () => navigate("/deleteUsers")

    return (
        <div style={{ textAlign: 'center' }}>
            <h3 >Welcome Admin: {user.fetchApiData.data.name}</h3>
            <button onClick={onClickNextPage}>Delete user now</button>
            <button onClick={onClickNextPage}>Update user now</button>
            <button onClick={onClickNextPage}>Create user now</button>
        </div>
    )
}

export default Users
