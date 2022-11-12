import { Button } from "@mantine/core";
import NoBox from "../ui/NoBox";
import TagUpload from "./TagUpload";
import CloseIcon from '@mui/icons-material/Close';

function TagList({sizes, tagList, setTagList}) {

  function addTag(file, size) {
    const tag = { ...tagList }
    tag[size] = file
    setTagList(tag)
  }

  function deleteTag(size) {
    setTagList({...tagList, [size]: null })
  }

  return (
    <>
      <div className="full-width" style={{ display: "grid", gridTemplateColumns : "repeat(2, 1fr)", maxWidth: 300}}>
        {
          sizes.map((size,i) => {
            return(
              <TagUpload key={i} label={size} value={tagList[size]} onChange={(file) => addTag(file,size)} deleteTag={() => deleteTag(size)}/>
            )
          })
        }
      </div>
    </>
  );
}

export default TagList;