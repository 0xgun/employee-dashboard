import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/Table" component={Table} />
        <Route exact path="/Dashboard" component={Dashboard} />
      </Switch>

      {/* <Chart/> */}
    </>
  );
}

export default App;
