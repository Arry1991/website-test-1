import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Cookies from "js-cookie";
import Home from "./pages";
import Register from "./components/Register/Register";
import Business from "./components/Business/Business";
import Login from "./components/Login/Login";
import BusinessInfo from "./components/Business/BusinessInfo";
import BusinessMain from "./components/Business/BusinessMain";
import axios from "axios";
import SelectBusiness from "./components/SelectBusiness/SelectBusiness";
import AddBusiness from "./components/AddBusiness/AddBusiness";
import ChooseRegister from "./components/ChooseRegister/ChooseRegister";
import PatronRegister from "./components/PatronRegister/PatronRegister";

function App() {
  // This runs right when the app starts (useEffect)
  useEffect(() => {
    // if cookie with a name of token exists
    // then
    if (Cookies.get("PHPSESSID") !== undefined) {
      console.log("token is here");
      // Send to back end for verification
      const url = "/react-backend/";
      axios
        .put(url, Cookies.get("PHPSESSID")) //URL FROM BACKEND - Token Verification route needed
        // If back end send a succefful response make auth true granting access
        .then((res) => {
          setAuth(true);
        })
        // if backend send fail change auth to false
        .catch((err) => {
          console.log(err);
          setAuth(false); //CHANGE TO FALSE
        });
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          auth ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
        }
      />
    );
  };
  const handleAuth = (props) => {
    setAuth(props);
    console.log("Auth Changing");
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} auth={auth} handleAuth={handleAuth} />
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute exact path='/Business' component={Business} auth={auth} />
        <Route exact path='/Business' component={Business} />
        <Route exact path='/ChooseRegister' component={ChooseRegister} />
        <Route exact path='/Login'>
          <Login authHandler={handleAuth} />
        </Route>
        <Route exact path='/Register' component={Register}></Route>
        <Route exact path='/PatronRegister' component={PatronRegister}></Route>
        <Route exact path='/AddBusiness' component={AddBusiness}></Route>
        {/* <Route exact path='/Login' component={Login} x={handleAuth} />  */}
        <PrivateRoute
          exact
          path='/BusinessInfo'
          component={BusinessInfo}
          auth={auth}
        />
        <Route exact path='/BusinessInfo' component={BusinessInfo} />
        <PrivateRoute
          exact
          path='/BusinessMain'
          component={BusinessMain}
          auth={auth}
        />
        <Route exact path='/BusinessMain' component={BusinessMain} />
        <PrivateRoute
          exact
          path='/SelectBusiness'
          component={SelectBusiness}
          auth={auth}
        />
        <Route exact path='/SelectBusiness' component={SelectBusiness} />
        {/* 404(page not found) Redirect */}
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
