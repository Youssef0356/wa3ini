import Sidebar from "./components/SideBar.jsx";
import Home from "./components/Home.jsx";
import Autism from "./components/Autism.jsx";
import Blindness from "./components/Blindness.jsx";
import Chronic from "./components/Chronic.jsx";

import Deafness from "./components/Deafness.jsx";
import Paralysis from "./components/Paralysis.jsx";

import Mindproblems from "./components/Mindproblems.jsx";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUS from "./components/AboutUS.jsx" ;
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/autism">
          <Autism />
        </Route>
        <Route path="/Blindness">
          <Blindness />
        </Route>
        <Route path="/Chronic">
          <Chronic />
        </Route>
        <Route path="/Deafness">
          <Deafness />
        </Route>
        <Route path="/Mindproblems">
          <Mindproblems />
        </Route>
        <Route path="/Paralysis">
          <Paralysis />
        </Route>
        <Route path="/AboutUS">
          <AboutUS />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;