import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "fake-jwt");
    navigate("/dashboard");
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h1>CineVerse Login</h1>

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;