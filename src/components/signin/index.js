import React from 'react'
import { useCreateDispatchContext } from '../../context/UserContext';
import {useNavigate} from "react-router-dom"

 function Signin() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const { handleAuthChange } = useCreateDispatchContext();

  const handleOnChange = () => {
    if (userName !== "admin" && password !== "ahsan12") {
      return;
    }
    handleAuthChange(true);
    navigate("/cart");
  };

  return (
    <div>
      <h1>username</h1>{" "}
      <input
        type="name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <h2>password</h2>{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleOnChange}>Login</button>
    </div>
  );
}
export default Signin;

