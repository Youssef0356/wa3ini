import Sidebar from "./components/SideBar.jsx";
import Home from "./components/Home.jsx";
import Autism from "./components/Autism.jsx";
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
        <Route path="/AboutUS">
          <AboutUS />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;