import { createId } from "lib/createId";
import React from "react";

const defaultTags = [
  { id: createId(), name: "衣" },
  { id: createId(), name: "食" },
  { id: createId(), name: "住" },
  { id: createId(), name: "行" },
];

const useTags = () => {
  const [tags, setTags] =
    React.useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter((tag) => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    // // 获取修改tag的下标
    // const index = findTagIndex(id);
    // // 深拷贝
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // // 把tagsClone的第index个删掉，换成{id:id,name:obj.name}
    // tagsClone.splice(index, 1, { id: id, name: obj.name });
    // setTags(tagsClone);
    setTags(
      tags.map((tag) => (tag.id === id ? { id: id, name: obj.name } : tag))
    );
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };
  return { tags, setTags, findTag, findTagIndex, updateTag, deleteTag };
};

export { useTags };
