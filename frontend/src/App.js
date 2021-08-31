import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import City from "./pages/City";
import Error404 from "./pages/404";
import Panel from "./pages/Panel";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { connect } from "react-redux";
import { useEffect } from "react";
import userActions from "./redux/actions/usersActions";

const App = (props) => {
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      props.logInLS(token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/city/:id" component={City} />
        {!props.token && <Route path="/signup" component={Signup} />}
        {!props.token && <Route path="/login" component={Login} />}
        <Route path="/panel" component={Panel} />
        <Route path="/notfound" component={Error404} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,

  }
}

const mapDispatchToProps = {
  logInLS: userActions.logInLS
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
