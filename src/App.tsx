import React from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import styled from "styled-components";
import Money from "Views/Money";
import NoMatch from "Views/NoMatch";
import Statistic from "Views/Statistic";
import Tags from "Views/Tags";

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/tags" element={<Tags />}></Route>
          <Route path="/money" element={<Money />}></Route>
          <Route path="/statistic" element={<Statistic />}></Route>
          <Route path="/" element={<Navigate to="/money" />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Router>
    </AppWrapper>
  );
}

export default App;
