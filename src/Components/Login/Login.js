import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  handelGoogleSignIn,
  handleGoogleSignOut,
  signInwithEmailandPassword,
  initialiseLoginFramework,
} from "./manageLogin";

const Login = () => {
  const [logedInUser, setLogedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [userCreate, setUserCreate] = useState(false);
  const [user, setUser] = useState({
    isSigned: false,
    name: " ",
    email: " ",
    password: " ",
    message: " ",
  });

  initialiseLoginFramework();

  const googleSignIn = () => {
    handelGoogleSignIn().then((res) => {
      setUser(res);
      setLogedInUser(res);
      history.replace(from);
    });
  };

  const googleSignOut = () => {
    handleGoogleSignOut().then((res) => {
      setUser(res);
      setLogedInUser(res);
    });
  };

  const handleSubmit = (e) => {
    if (userCreate && user.email && user.password) {
      createUserWithEmailAndPassword(user.email, user.password).then((res) => {
        setUser(res);
        setLogedInUser(res);

        res.isSigned && history.replace(from);
      });
    }
    if (!userCreate && user.email && user.password) {
      signInwithEmailandPassword(user.email, user.password).then((res) => {
        setUser(res);
        setLogedInUser(res);
        if (res.isSigned) {
          history.replace(from);
        }
      });
    }
    e.preventDefault();
  };

  const handleblur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFormValid = e.target.value.length > 4;
    }
    if (isFormValid) {
      const userInfo = { ...user };
      userInfo[e.target.name] = e.target.value;
      setUser(userInfo);
    }
  };

  const handleCheckbox = () => {
    userCreate ? setUserCreate(false) : setUserCreate(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      {user.isSigned ? (
        <button className="btn" onClick={googleSignOut}>
          Sign Out
        </button>
      ) : (
        <button className="btn" onClick={googleSignIn}>
          Sign In
        </button>
      )}
      {user.isSigned ? (
        <div>
          <p>Signed in successfully!</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <img src={user.photo} style={{ width: 500 }} alt="" />
        </div>
      ) : (
        <div>
          <p>You are not signed in!</p>
        </div>
      )}
      <p>Your authantication details</p>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="checkbox"
          name="checkNewUser"
          id="checkNewUser"
          onChange={handleCheckbox}
        />
        <label htmlFor="checkNewUser">I am new here!</label>

        <br />

        <input
          onBlur={handleblur}
          type="email"
          name="email"
          placeholder="Your eamil"
          required
        />
        <br />
        <input
          onBlur={handleblur}
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <br />
        {userCreate ? (
          <input type="submit" value="Create account" />
        ) : (
          <input type="submit" value="Log In" />
        )}
      </form>
      {/* alert(user.message) */}
      <p>{user.message}</p>
      {/* {userCreate && !user.successfull && (
        <p style={{ color: "red" }}>{user.userCreateErrorMessage}</p>
      )}
      {userCreate && user.successfull && (
        <p style={{ color: "green" }}>User created successfully!</p>
      )}

      {!userCreate && <p style={{ color: "purple" }}>{user.loginMessage}</p>} */}
    </div>
  );
};

export default Login;
