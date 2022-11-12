import { useState } from "react";
import TagList from "../components/tags/TagList";

function Tags() { 
  const [tagList, setTagList] = useState([])

  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"]
  return (
    <>
      <div style={{ margin: 40}}>
        <h1>Tags</h1>
        <TagList sizes={sizes} tagList={tagList} setTagList={setTagList}/>
      </div>
    </>
  );
}

export default Tags;