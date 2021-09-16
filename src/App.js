import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Review from "./Components/Review/Review";
import NotFound from "./Components/NotFound/NotFound";
import Manage from "./Components/Manage/Manage";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import Shipment from "./Components/Shipment/Shipment";
import { createContext, useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

export const UserContext = createContext();

function App() {
  const [logedInUser, setLogedInUser] = useState({
    isSigned: false,
    name: " ",
    email: " ",
    password: " ",
    message: "",
  });

  console.log(logedInUser);

  return (
    <UserContext.Provider value={[logedInUser, setLogedInUser]}>
      <div className="">
        <Router>
          <p>User: {logedInUser.email}</p>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/Shop">
              <Shop></Shop>
            </Route>
            <Route path="/Review">
              <Review></Review>
            </Route>
            <ProtectedRoute path="/Manage">
              <Manage></Manage>
            </ProtectedRoute>
            <ProtectedRoute path="/Shipment">
              <Shipment></Shipment>
            </ProtectedRoute>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
