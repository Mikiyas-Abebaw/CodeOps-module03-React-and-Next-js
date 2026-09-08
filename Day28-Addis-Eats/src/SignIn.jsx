import { useNavigate, useLocation } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleSignIn() {
    localStorage.setItem("isLoggedIn", "true");

    const from = location.state?.from?.pathname || "/";

    navigate(from);
  }

  return (
    <div className="sign-in">
      <h2>Sign In</h2>

      <button onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
}

export default SignIn;