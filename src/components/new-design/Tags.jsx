import TagUpload from "../tags/TagUpload";

function Tags({sizes}) {
  return (
    <div className="flexbox-column background1">
        <div>Tags</div>
        {
          sizes.map((size, i) => {
            return(
              <TagUpload size={size} />
            )
          })
        }
    </div>
  );
}

export default Tags;