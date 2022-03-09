import React from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import Money from "Views/Money";
import NoMatch from "Views/NoMatch";
import Statistic from "Views/Statistic";
import Tags from "Views/Tags";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tags" element={<Tags />}></Route>
        <Route path="/money" element={<Money />}></Route>
        <Route path="/statistic" element={<Statistic />}></Route>
        <Route path="/" element={<Navigate to="/money" />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  );
}







export default App;
