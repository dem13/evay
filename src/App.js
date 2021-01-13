import './App.css';
import Layout from "./hoc/Layout/Layout";
import Day from "./components/Day/Day";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>

        <Layout>
          <Switch>
            <Route exact path="/day">
              <Day/>
            </Route>
            <Route exact path="/sign-in">
              <SignIn/>
            </Route>
            <Route exact path="/sign-up">
              <SignUp/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
