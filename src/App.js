import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Spots from "./pages/Spots/Spots";
import Products from "./pages/Products/Products";
import Messages from "./pages/Messages/Messages";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/spots" exact component={Spots} />
          <Route path="/products" exact component={Products} />
          <Route path="/messages" exact component={Messages} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
