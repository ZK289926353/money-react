import React, { useState } from "react";
import styled from "styled-components";

const _CategorySection = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const CategorySection: React.FC = () => {
  const categoryMap={'-':'支出','+':'收入'};
  type Y= keyof typeof categoryMap;
  const [categoryList] = useState<Y[]>(['-', '+']);
  const [category, setCategory] = React.useState("-");
  return (
    <_CategorySection>
      <ul>
        {categoryList.map((c) => (
          <li key={c}
            className={category === c ? "selected" : ""}
            onClick={() => {setCategory(c)}}
          >{categoryMap[c]}
          </li>
        ))}
      </ul>
    </_CategorySection>
  );
};

export { CategorySection };
