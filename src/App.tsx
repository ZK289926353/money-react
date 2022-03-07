import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow:1;
`;

const Nav=styled.nav`
  border:1px solid blue;
  >ul{
    display:flex;
    >li{
      width:33.33333%;
      text-align:center;
      padding:16px
    }
  }
`

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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistic">统计页</Link>
            </li>
          </ul>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
