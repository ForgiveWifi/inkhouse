import { Button } from "@mantine/core";
import NoBox from "../ui/NoBox";
import TagUpload from "./TagUpload";
import CloseIcon from '@mui/icons-material/Close';

function TagList({sizes, tagList, setTagList, setTags}) {

  function addTag(file, size) {
    const tag = { ...tagList }
    tag[size] = file
    setTagList(tag)
  }

  function deleteTag(size) {
    setTagList({...tagList, [size]: null })
  }

  function removeTags() {
    setTagList({})
    setTags(false)
  }

  return (
    <>
        <div className="label full-width">tags</div>
        {/* { sizes.length === 0 && <NoBox text="Select Sizes"/> } */}
        <div className="full-width" style={{ display: "grid", gridTemplateColumns : "repeat(2, 1fr)", maxWidth: 300}}>
          {
            sizes.map((size,i) => {
              return(
                <TagUpload key={i} label={size} value={tagList[size]} onChange={(file) => addTag(file,size)} deleteTag={() => deleteTag(size)}/>
              )
            })
          }
        {
          sizes &&
          <div className="flexbox span2" style={{ marginTop: 10}}>
            <Button onClick={() => removeTags()} style={{ borderRadius: 50, backgroundColor: "rgb(253, 81, 81)"}} leftIcon={<CloseIcon style={{fontSize: 20}} />} uppercase>
              tags
            </Button>
          </div>
        }
        </div>
    </>
  );
}

export default TagList;