import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import City from "./pages/City";
import Error404 from "./pages/404";
import Panel from "./pages/Panel";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/city/:id" component={City} />
        <Route path="/panel" component={Panel} />
        <Route path="/notfound" component={Error404} />
        <Redirect to="/notfound" />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
