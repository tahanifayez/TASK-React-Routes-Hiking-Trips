import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/homebage" Component={Home} />
        <Route path="/Trips" Component={TripsList} />
        <Route path="/details/:tripId" Component={TripDetail} />
      </Routes>
    </div>
  );
}

export default App;
