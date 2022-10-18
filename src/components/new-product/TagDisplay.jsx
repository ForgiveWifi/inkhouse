function TagDisplay({tagList}) {

  const firstTag = findFirstTag(tagList)

  function findFirstTag(tagList) {
    const firstTag = Object.keys(tagList.tagList).find((key) => tagList.tagList[key] !== null)
    return(tagList.tagList[firstTag])
  }

  return (
    <>
      {
        firstTag ?
        <div style={{ width: 80, height: 60, borderRadius: 5, position: "absolute", top: 85, overflow: "hidden"}}>
          <img src={URL.createObjectURL(firstTag)} alt={firstTag.name} style={{ width: 80 }}/>
        </div> :
        <div style={{ position: "absolute", top: 80, backgroundColor: "rgb(236, 236, 236)", width: 20, height: 50}}> </div>
      }

    </>
  );
}

export default TagDisplay;