import React, { useRef } from "react";
import styled from "styled-components";

const _NoteSection = styled.section`
  background: #f5f5f5;
  padding: 0px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NoteSection: React.FC = () => {
  const [note, setNote] = React.useState("");
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };
  return (
    <_NoteSection>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里添加备注"
          // 受控组件
          // value={note}
          // onChange={(e)=>setNote(e.target.value)}
          // 非受控组件
          ref={refInput}
          defaultValue={note}
          onBlur={onBlur}
        />
      </label>
    </_NoteSection>
  );
};

export { NoteSection };
