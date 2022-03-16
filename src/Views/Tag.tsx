import React from "react";
import { useTags } from "useTags";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "Components/Layout";
import Icon from "Components/Icon";
import { Button } from "Components/Button";
import styled from "styled-components";
import { Input } from "Components/Input";
import { Center } from "Components/Center";
import { Space } from "Components/Space";

type Params = {
  id: string;
};

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;
const Tag: React.FC = () => {
  const { findTag, updateTag, deleteTag } = useTags();
  let { id: idString } = useParams<Params>();
  const tag = findTag(parseInt(idString ? idString : "null"));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          value={tag.name}
          onChange={(e) => {
            updateTag(tag.id, { name: e.target.value });
          }}
        />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
      </Center>
    </div>
  );
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/tags");
  };
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack} />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      {tag ? tagContent(tag) : <Center>tag不存在</Center>}
    </Layout>
  );
};

export { Tag };
