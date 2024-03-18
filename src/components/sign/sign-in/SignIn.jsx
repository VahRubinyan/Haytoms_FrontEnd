import { Link } from "react-router-dom";
import "../Sign.scss";
import { ROUTER } from "../../../router/routes";

const SignIn = () => {
  return (
    <div className="sign">
      <form>
        <Link to={ROUTER.HOMEPAGE_ROUTE}>Logo</Link>
        <div className="sign-input">
          <input type="email" placeholder="Email" />
        </div>
        <div className="sign-input">
          <input type="password" placeholder="Password" />
        </div>
        <button className="sign-button">Sign In</button>
        <div class="sign-text">
          Don't have an account?{" "}
          <Link to={ROUTER.SIGNUPPAGE_ROUTE}>Sign up!</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
