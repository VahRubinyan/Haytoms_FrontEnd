import { Link } from "react-router-dom";
import { ROUTER } from "../../../router/routes";
import "../Sign.scss";

const SignUp = () => {
  return (
    <div className="sign">
      <form>
        <Link to={ROUTER.HOMEPAGE_ROUTE}>Logo</Link>
        <div className="sign-input">
          <input type="text" placeholder="Name" />
        </div>
        <div className="sign-input">
          <input type="text" placeholder="Surname" />
        </div>
        <div className="sign-input">
          <input type="email" placeholder="Email" />
        </div>
        <div className="sign-input">
          <input type="number" placeholder="Phone" />
        </div>
        <div className="sign-input">
          <input type="password" placeholder="Password" />
        </div>
        <div className="sign-input">
          <input type="password" placeholder="Repeat Password" />
        </div>
        <button className="sign-button">Sign In</button>
        <div class="sign-text">
          Don't have an account? <Link to={ROUTER.SIGNIN_ROUTE}>Sign in!</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
