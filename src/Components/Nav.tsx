import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.33333%;
      text-align: center;
      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: red;
          .icon {
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink end
            to="/tags" 
            className={({ isActive }) => (isActive ? "selected" : undefined)}
          >
            <Icon name="tag" />
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/money"
            className={({ isActive }) => (isActive ? "selected" : undefined)}
          >
            <Icon name="money" />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistic"
            className={({ isActive }) => (isActive ? "selected" : undefined)}
          >
            <Icon name="chart" />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
