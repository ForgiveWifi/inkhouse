import { Button, Modal } from "@mantine/core";
import NoBox from "../ui/NoBox";
import TagCard from "./TagCard";
import { useState } from "react";
import axios from "axios";
import { showLoading, updateError, updateSuccess } from "../../utils/alerts";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteFirebase } from "../../utils/firebaseFunctions"

function TagList({tags, toggleChange}) {

  const { getAccessTokenSilently } = useAuth0()
  const [modal, setModal] = useState(false)
  const [tag, setTag] = useState(null)

  async function deleteTag(tag) {
    try {
      const { size, design } = tag
      showLoading("delete-tag", null, "Deleting tag...")
      await deleteFirebase("tags", design.art_file)
      const access_token = await getAccessTokenSilently()
      await axios.delete(`${process.env.REACT_APP_API_URL}/tag/${size}`, {
        headers: {
          authorization: `Bearer ${access_token}`
        }
      })
      setModal(false)
      updateSuccess("delete-tag", null, "Deleted tag!")
      toggleChange()
    }
    catch {
      updateError("delete-tag", "Server error: delete", "Contact Us!")
    }
  }

  function deleteSize(tag) {
    setModal(true)
    setTag(tag)
  }

  if (!tags) {
    return null
  }
  if (tags.length === 0) {
    return <NoBox text="No tags"/>
  }
  console.log(tag)
  return (
    <>
      <div className="full-width" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 15}}>
        {
          tags.map((tag,i) => {
            return(
              <TagCard key={i} tag={tag} toggleChange={toggleChange} deleteSize={deleteSize}/>
            )
          })
        }
        { tags.length === 1 && <div></div>}
      </div>
      <Modal 
        opened={modal} 
        centered 
        size="sm"
        closeOnClickOutside={true}
        withCloseButton={false}
        exitTransitionDuration={800}>
        <div className="flexbox-column">
          <div className="full-width">Delete this tag?</div>
          <div className="flexbox-row margin-left" style={{ gap: 5}}>
            <button onClick={() => setModal(false)}>cancel</button>
            <button className="red-background radius5" onClick={() => deleteTag(tag)}>delete</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TagList;