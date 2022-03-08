import React from "react";
import {
  HashRouter as Router, Navigate, Route, Routes
} from "react-router-dom";
import styled from "styled-components";
import Nav from "./Components/Nav";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow:1;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Routes>
            <Route path="/tags" element={<Tags />}></Route>
            <Route path="/money" element={<Money />}></Route>
            <Route path="/statistic" element={<Statistic />}></Route>
            <Route path="/" element={<Navigate to="/money" />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}

function NoMatch() {
  return <div>页面不存在</div>;
}

function Tags() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}

function Statistic() {
  return <h2>统计页</h2>;
}

export default App;
