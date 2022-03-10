import React from "react";
import styled from "styled-components";

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
      &.selected{
          background:#f60;
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

const TagsSection: React.FC = () => {
    const [tags,setTags]=React.useState<string[]>(['衣','食','住','行']);
    const [selectedTags,setSelectedTags]=React.useState<string[]>([]);
    const onAddTags=()=>{
        const tagName=window.prompt('输入新增的标签');
        if(tagName!==null){
        setTags([...tags, tagName]);
        }
    };
    const onToggleTags=(tag:string)=>{
        const index=selectedTags.indexOf(tag);
        if(index>=0){
            setSelectedTags(selectedTags.filter(t=>t!==tag));
        }else{
            setSelectedTags([...selectedTags,tag]);
        }
    };
    const getClass=(tags:string)=>
        selectedTags.indexOf(tags)>=0?`selected`:``;
    
    return (
      <Wrapper>
        <ol>
            {tags.map(tag => 
                <li key={tag} onClick={()=>onToggleTags(tag)}
                className={getClass(tag)}
                >{tag}</li>
            )}
        </ol>
        <button onClick={onAddTags}>新增标签</button>
      </Wrapper>
    );
  };

export { TagsSection };
