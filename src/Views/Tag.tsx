import React from "react";
import { useTags } from "useTags";
import { useParams } from "react-router-dom";
import Layout from "Components/Layout";
import Icon from "Components/Icon";
import { Button } from "Components/Button";
import styled from "styled-components";

type Params = {
  id: string;
};

const Topbar=styled.header`
display:flex;
justify-content:space-between;
align-items:center;
line-height:20px;
padding:14px;
background:white;
`

const Tag: React.FC = (props) => {
  const { findTag } = useTags();
  let { id } = useParams<Params>();
  const tag = findTag(parseInt(id ? id : `1`));
  return (
    <Layout>
      <Topbar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  );
};

export { Tag };
