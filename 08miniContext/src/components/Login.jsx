import { useState,useContext } from "react"
import UserContext from "../context/UserContext"

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('');
  
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password})
    }
    return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e) =>setUsername(e.target.value)} placeholder="username" />
        <br />
        <input type="text" placeholder="password"/>
        <br /><button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login