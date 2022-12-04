import { useAuth0 } from "@auth0/auth0-react";
import { Button, Modal } from "@mantine/core";
import { Tag } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import AddTag from "../components/tags/AddTag";
import TagList from "../components/tags/TagList";
import CloseButton from "../components/ui/buttons/CloseButton";
import Loading from "../components/ui/Loading";
import { showError } from "../utils/alerts";

function Tags() { 

  const { getAccessTokenSilently } = useAuth0()
  const [tags, setTags] = useState(null)
  const [open, setOpen] = useState(false)
  const [change, setChange] = useState(false)
  const [loading, setLoading] = useState(false)

  const sizes = ["S", "M", "L", "XL"]

  useEffect(() => {
    fetchTags()
    async function fetchTags() {
      try {
        setLoading(true)
        const access_token = await getAccessTokenSilently()
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/tag`, {
          headers: {
            authorization: `Bearer ${access_token}`
          }
        })
        console.log("data", res.data)
        setTags(res.data.tags)// sort tags and missing tags
        setLoading(false)
      }
      catch (err) {
        showError("server-error", `Server error - tags`, "Contact Us!")
      }
    }
  }, [change])

  function toggleChange() {
    setChange(!change)
  }

  return (
    <>
      {loading && <Loading />}
      <div style={{ margin: 40}}>
        <h1 style={{ marginBottom: 20}}>Tags</h1>
        <Button onClick={() => setOpen(true)} uppercase>add tag</Button>
        <TagList tags={tags} toggleChange={toggleChange}/>
        <Modal
          opened={open}
          withCloseButton={false}
          centered
        >
          <CloseButton onClick={() => setOpen(false)}/>
          <AddTag missingTags={sizes} toggleChange={toggleChange} close={() => setOpen(false)}/> 
        </Modal>
      </div>
    </>
  );
}

export default Tags;