import { Input } from "Components/Input";
import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

const _NoteSection = styled.section`
  background: #f5f5f5;
  padding: 0px 16px;
  font-size: 14px;
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <_NoteSection>
      <Input
        label="备注"
        type="text"
        placeholder="在这里添加备注"
        value={note}
        onChange={onChange}
      ></Input>
    </_NoteSection>
  );
};

export { NoteSection };
