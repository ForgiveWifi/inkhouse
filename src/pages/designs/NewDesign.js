import { useState } from "react"
import axios from "axios";
import { v4 } from "uuid"
import { storage } from "../../firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import DesignPosition from "../../components/new-design/DesignPosition";
import AttributesSelect from "../../components/new-design/AttributesSelect";
import DesignDetails from "../../components/new-design/DesignDetails";
import Header from "../../components/ui/Header";
import { showError, showLoading, updateSuccess, updateError } from '../../utils/alerts'
import BackButton from "../../components/ui/buttons/BackButton.jsx";
import DesignTags from "../../components/new-design/DesignTags.jsx";
import DesignPreview from "../../components/displays/DesignPreview.jsx";
import NoBox from "../../components/ui/NoBox.jsx";
import PlacementList from "../../components/list/PlacementList.jsx";
import { Button, Modal } from "@mantine/core";

function NewDesign() {

  const [printImage, setPrintImage] = useState(null)
  const [sizes, setSizes] = useState([])
  const [attributes, setAttributes] = useState({})
  const [details, setDetails] = useState({})
  const [designs, setDesigns] = useState([])

  const [tags, setTags] = useState([])
  const [dimensions, setDimensions] = useState({})

  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)

  const tags_list = sizes.map(size => {
    return(tags[size])
  })

  function openModal() {
    setError(true)
    if (!details.name) {
      showError("name-error", `Fill in name!`)
    } else
    if (!printImage) {
      showError("image-error", `Select a shirt image!`)
    } else
    if (!attributes.style) {
      showError("style-error", `No style selected!`)
    } else
    if (sizes.length === 0) {
      showError("size-error", `No size selected`)
    } else
    if (!attributes.color) {
      showError("color-error", `No color selected!`)
    } else
    if (designs.length === 0) {
      showError("design-error", `Add at least 1 design!`)
    } else 
    if (tags_list.includes(null) || tags_list.includes(undefined)) {
      showError("tag-error", "All sizes must have a tag")
    } else
    if (!dimensions.width || !dimensions.height) {
      showError("dimension-error", "Tags must have a width and height!")
    } else {
      setOpen(true)
    }
  }

  async function createDesigns() {
    try {
      setOpen(false)
      const {design_data, shirt_img, tags_data} = await uploadAllFirebase(designs)
      await uploadToDatabase(design_data, shirt_img, tags_data)
      setError(false)
      setPrintImage(null)
      setSizes([])
      setAttributes({style: ""})
      setDetails({name: "", description: ""})
      setDesigns([])
    }
    catch (err) {
    }
  }
  
  async function uploadAllFirebase(designs) {
    const id = "firebase-alert"
    try {
      showLoading(id, "Uploading images...")
      const [shirt_img, tags_data, design_data] = await Promise.all([uploadImage("shirts", printImage), uploadTags(tags_list), uploadDesignsFirebase(designs)])
      updateSuccess(id, "Uploaded images to server!")
      return({design_data, shirt_img, tags_data})
    }
    catch (err) {
      updateError(id, "Problem uploading images to server.  Contact us!", err.message)
    }
  }

  async function uploadDesignsFirebase(designs) {
    const design_data = await Promise.all(designs.map( design => uploadFirebase(design)))
    return (design_data)
  }

  async function uploadFirebase(design) {
    const art = await uploadImage("art", design.art_file)
    const thumbnail = await uploadImage("thumbnail", design.thumbnail_file)
    return({
      ...design,
      art_file: art.file_name,
      art_url: art.url,
      thumbnail_file: undefined,
      thumbnail_url: thumbnail.url,
    })
  }

  async function uploadTags(tags_list) {
    return Promise.all(tags_list.map(async (tag) => {
      const image = await uploadImage("tags", tag)
      return({
        placement: "Neck",
        art_file: image.file_name,
        art_url: image.url,
        thumbnail_url: image.url,
        underbase: true,
        x_offset: 0,
        y_offset: 0,
        width: dimensions.width,
        height: dimensions.height
      })
    }))
  }

  async function uploadImage(file, image) {
    const name = image.name + v4() 
    const imageRef = ref(storage, `${file}/${name}`)
    await uploadBytes(imageRef, image)
    const url = await getDownloadURL(imageRef)
    return({
      file_name: name,
      url: url
    })
  }

  async function uploadToDatabase(design_data, shirt_img, tags_data) { 
    const shirt_designs = []
    
    for (let i = 0; i < sizes.length; i++) {
      shirt_designs.push({ 
        name: details.name,
        description: details.description,
        image: shirt_img,
        attributes: {
          ...attributes, 
          size: sizes[i]
        },
        designs: [...design_data, tags_data[i]]
      })
    }

    for (let i = shirt_designs.length - 1; i >= 0; i--) {
      await postShirt(shirt_designs[i])
    }
  }

  async function postShirt(design_data) { 
    const {name, attributes} = design_data
    const {size} = attributes
    const design_name = `${name} - ${size}`
    try {
      showLoading(size, "Uploading design...", design_name)
      const data = await axios.post(`${process.env.REACT_APP_API_URL}/design`, design_data)
      updateSuccess(size, "Design has been uploaded!", design_name) 
      return(data)
    }
    catch {
      updateError(size, "Problem uploading shirt!", design_name)
    }
  }

  return (
    <>
      
      <BackButton />
      <div>
        <Header title="New Design" />
      </div>
      <div className="flexbox-column full-width">
        <DesignDetails details={details} setDetails={setDetails} printImage={printImage} setPrintImage={setPrintImage} error={error} />
        <AttributesSelect attributes={attributes} setAttributes={setAttributes} sizes={sizes} setSizes={setSizes} error={error}/>
        <DesignPosition designs={designs} setDesigns={setDesigns}/>
        { designs.length === 0 ?  <NoBox text="no designs" /> : <PlacementList designs={designs} /> }
        { sizes.length !== 0 && <DesignTags sizes={sizes} tags={tags} setTags={setTags} dimensions={dimensions} setDimensions={setDimensions}/> }
        <Modal
          opened={open}
          onClose={() => setOpen(false)}
          overflow="outside"
          withCloseButton={false}
          centered
        >
          <DesignPreview details={details} attributes={attributes} sizes={sizes} image={printImage} />
          <div className="flexbox" style={{ marginTop: "15px"}}>
            <Button onClick={createDesigns} uppercase>submit</Button>
          </div>
        </Modal>
        <div style={{ marginTop: "20px" }}>
          <Button onClick={openModal} uppercase>submit</Button>
        </div> 

      </div>
    </>
  );
}

export default NewDesign;