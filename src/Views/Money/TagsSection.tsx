import React from "react";
import styled from "styled-components";
import { useTags } from "hooks/useTags";

const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin-left: -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: #f60;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = { value: number[]; onChange: (selected:number[]) => void };

const TagsSection: React.FC<Props> = (props) => {
  const {tags,addTags}=useTags();
  const selectedTagIds = props.value;
  const onToggleTags = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter((t) => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) =>
  selectedTagIds.indexOf(tagId) >= 0 ? `selected` : ``;

  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => onToggleTags(tag.id)}
            className={getClass(tag.id)}
          >
            {tag.name}
          </li>
        ))}
      </ol>
      <button onClick={addTags}>新增标签</button>
    </Wrapper>
  );
};

export { TagsSection };
