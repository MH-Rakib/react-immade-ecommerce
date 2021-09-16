import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";

const ProtectedRoute = ({ children, ...rest }) => {
  const [logedInUser, setLogedInUser] = useContext(UserContext);

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          logedInUser.isSigned ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/Login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default ProtectedRoute;
