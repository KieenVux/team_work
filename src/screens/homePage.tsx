import { useNavigate } from 'react-router-dom';
export const HomePage = () => {
    const negative = useNavigate();
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={() => negative("/login")}>Login</button>
                <button onClick={() => negative("/signUp")}>Sign Up</button>
                <button onClick={() => negative("/statisticCovid")}>Update Profile</button>
            </div>
        </div>
    )
}
