import { useState } from "react"
import axios from "axios";
import { v4 } from "uuid"
import { storage } from "../firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import AttributesSelect from "../components/new-product/AttributesSelect";
import ProductDetails from "../components/new-product/ProductDetails";
import { showError, showLoading, updateSuccess, updateError } from '../utils/alerts'
import BackButton from "../components/ui/buttons/BackButton.jsx";
import DesignPreview from "../components/new-product/DesignPreview.jsx";
import { Button, HoverCard, Modal } from "@mantine/core";
import ProductPreview from "../components/new-product/ProductPreview";
import { Stepper } from '@mantine/core';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ImageUpload } from "../components/new-product/ImageUpload";
import AddIcon from '@mui/icons-material/Add';
import TagList from "../components/new-product/TagList.jsx";

function NewProduct() {
  
  const [printImage, setPrintImage] = useState(null)
  const [sizes, setSizes] = useState([])
  const [attributes, setAttributes] = useState({})
  const [details, setDetails] = useState({})
  const [imageList, setImageList] = useState([])

  const [dimensions, setDimensions] = useState({})

  const [error, setError] = useState(false)

  
  const [open, setOpen] = useState(false)
  const [tags, setTags] = useState(false)
  const [tagList, setTagList] = useState([])

  // const tagList_list = sizes.map(size => {
  //   return(tagList[size])
  // })

  function openConfirmModal() {
    setError(true)
    if (!details.name) {
      showError("name-error", `Fill in name!`, "Name")
    } else
    // if (!printImage) {
    //   showError("image-error", `Select a design preview!`, "Preview")
    // } else
    // if (!details.price) {
    //   showError("price-error", `Add a price!`)
    // } else
    if (!attributes.style) {
      showError("style-error", `No style selected!`)
    } else
    if (!attributes.color) {
      showError("color-error", `No color selected!`)
    } else
    if (sizes.length === 0) {
      showError("size-error", `No size selected`)
    } else
    setOpen(true)
    // if (imageList.length === 0) {
    //   showError("design-error", `Add at least 1 design!`)
    // } else 
    // if (!dimensions.width || !dimensions.height) {
    //   showError("dimension-error", "tagList must have a width and height!")
    // } else {
    //   setOpen(true)
    // }
  }

  // async function createimageList() {
  //   try {
  //     setOpen(false)
  //     const {design_data, shirt_img, tagList_data} = await uploadAllFirebase(imageList)
  //     await uploadToDatabase(design_data, shirt_img, tagList_data)
  //     setError(false)
  //     setPrintImage(null)
  //     setSizes([])
  //     setAttributes({style: ""})
  //     setDetails({name: "", description: ""})
  //     setImageList([])
  //   }
  //   catch (err) {
  //   }
  // }
  
  // async function uploadAllFirebase(imageList) {
  //   const id = "firebase-alert"
  //   try {
  //     showLoading(id, "Uploading images...")
  //     const [shirt_img, tagList_data, design_data] = await Promise.all([uploadImage("shirts", printImage), uploadtagList(tagList_list), uploadimageListFirebase(imageList)])
  //     updateSuccess(id, "Uploaded images to server!")
  //     return({design_data, shirt_img, tagList_data})
  //   }
  //   catch (err) {
  //     updateError(id, "Problem uploading images to server.  Contact us!", err.message)
  //   }
  // }

  // async function uploadimageListFirebase(imageList) {
  //   const design_data = await Promise.all(imageList.map( design => uploadFirebase(design)))
  //   return (design_data)
  // }

  // async function uploadFirebase(design) {
  //   const art = await uploadImage("art", design.art_file)
  //   const thumbnail = await uploadImage("thumbnail", design.thumbnail_file)
  //   return({
  //     ...design,
  //     art_file: art.file_name,
  //     art_url: art.url,
  //     thumbnail_file: undefined,
  //     thumbnail_url: thumbnail.url,
  //   })
  // }

  // async function uploadtagList(tagList_list) {
  //   return Promise.all(tagList_list.map(async (tag) => {
  //     const image = await uploadImage("tagList", tag)
  //     return({
  //       placement: "Neck",
  //       art_file: image.file_name,
  //       art_url: image.url,
  //       thumbnail_url: image.url,
  //       underbase: true,
  //       x_offset: 0,
  //       y_offset: 0,
  //       width: dimensions.width,
  //       height: dimensions.height
  //     })
  //   }))
  // }

  // async function uploadImage(file, image) {
  //   const name = image.name + v4() 
  //   const imageRef = ref(storage, `${file}/${name}`)
  //   await uploadBytes(imageRef, image)
  //   const url = await getDownloadURL(imageRef)
  //   return({
  //     file_name: name,
  //     url: url
  //   })
  // }

  // async function uploadToDatabase(design_data, shirt_img, tagList_data) { 
  //   const shirt_imageList = []
    
  //   for (let i = 0; i < sizes.length; i++) {
  //     shirt_imageList.push({ 
  //       name: details.name,
  //       description: details.description,
  //       image: shirt_img,
  //       attributes: {
  //         size: sizes[i],
  //         ...attributes
  //       },
  //       imageList: [...design_data, tagList_data[i]]
  //     })
  //   }

  //   for (let i = shirt_imageList.length - 1; i >= 0; i--) {
  //     await postShirt(shirt_imageList[i])
  //   }
  // }

  // async function postShirt(design_data) { 
  //   const {name, attributes} = design_data
  //   const {size} = attributes
  //   const design_name = `${name} - ${size}`
  //   try {
  //     showLoading(size, "Uploading design...", design_name)
  //     const data = await axios.post(`${process.env.REACT_APP_API_URL}/design`, design_data)
  //     updateSuccess(size, "Design has been uploaded!", design_name) 
  //     return(data)
  //   }
  //   catch {
  //     updateError(size, "Problem uploading shirt!", design_name)
  //   }
  // }

  return (
    <>
    
      <BackButton />

      <div className="flexbox flex-wrap full-width" style={{ alignItems: "flex-start", gap: "20px"}}>

        <ProductPreview color={attributes.color} imageList={imageList} setImageList={setImageList} tagList={{tagList}}/>
        
        <div className="flexbox-column">
          <div className="flexbox-column background1 full-width radius15" style={{ maxWidth: "300px", padding: "0px 15px 15px"}}>
            <h2 className="full-width">New Product</h2>
            <ProductDetails details={details} setDetails={setDetails} error={error} />
            <AttributesSelect attributes={attributes} setAttributes={setAttributes} sizes={sizes} setSizes={setSizes} error={error}/>
            {
              tags ?
              <TagList sizes={sizes} tagList={tagList} setTagList={setTagList} /> :
              <Button onClick={() => setTags(true)} leftIcon={<AddIcon />} style={{ marginTop: 15}} >ADD TAGS</Button> 
            }
          </div>
          <div className="flexbox" style={{ margin: "10px 15px 5px auto"}}>
            <Button onClick={openConfirmModal} uppercase>submit</Button>
          </div>
        </div>
        {/* { imageList.length === 0 ?  <NoBox text="no imageList" /> : <PlacementList imageList={imageList} /> } */}
        
        <Modal
          opened={open}
          onClose={() => setOpen(false)}
          overflow="outside"
          withCloseButton={false}
          centered
        >
          <Stepper color="orange" size="md" active={1}>
            <Stepper.Step label="Step 1" description="Verify Design" />
            <Stepper.Step label="Step 2" description="Upload" />
          </Stepper>
          {/* <Button onClick={createimageList} uppercase>submit</Button> */}
        </Modal>

      </div>
    </>
  );
}

export default NewProduct;