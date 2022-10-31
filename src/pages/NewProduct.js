import { useState } from "react"
import axios from "axios";
import { v4 } from "uuid"
import { storage } from "../firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import AttributesSelect from "../components/new-product/AttributesSelect";
import ProductDetails from "../components/new-product/ProductDetails";
import { showError, showLoading, updateSuccess, updateError } from '../utils/alerts'
import BackButton from "../components/ui/buttons/BackButton.jsx";
import { Button } from "@mantine/core";
import ProductPreview from "../components/new-product/ProductPreview";
import AddIcon from '@mui/icons-material/Add';
import TagList from "../components/new-product/TagList.jsx";
import ConfirmModal from "../components/new-product/ConfirmModal.jsx";
import formatDesign from "../utils/formatDesign.js";
import html2canvas from "html2canvas";
import { useAuth0 } from "@auth0/auth0-react";

function NewProduct() {

  const [currentImage, setCurrentImage] = useState({ placement: "front", width: 200, x_offset: 60, y_offset:0})
  const [sizes, setSizes] = useState([])
  const [attributes, setAttributes] = useState({style: "3001", color: { value: "White", hex: "white", light: true }})
  const [details, setDetails] = useState({name: "", description: ""})
  const [imageList, setImageList] = useState([])

  const { getAccessTokenSilently } = useAuth0()

  const [error, setError] = useState(false)

  // const [openConfirm, setOpenConfirm] = useState(false)
  const [tags, setTags] = useState(false)
  const [tagList, setTagList] = useState({})

  const orderedTags = sizes.map(size => {
    return(tagList[size])
  })
  
  const frontImages = imageList.filter((image) => image.placement === "front")
  const backImages = imageList.filter((image) => image.placement === "back")

  function openConfirmModal() {
    setError(true)
    if (!details.name) {
      showError("name-error", null, `No product name!`)
    } else
    if (!attributes.style) {
      showError("style-error", null, `No style selected!`)
    } else
    if (sizes.length === 0) {
      showError("size-error", null, `No size selected`)
    } else
    if (imageList.length === 0) {
      showError("design-error", null, `Add at least 1 design!`)
    } else 
    if (currentImage.image) {
      showError("image-error", null, `Place current image!`)
    } else
    if (tags && orderedTags.some(tag => tag === null || tag === undefined)) {
      showError("tag-error", null, `Missing tags!`)
    } else
    // setOpenConfirm(true)
    submitProduct()
  }

  async function submitProduct() {
    try {
      const {product_images, design_data, tag_list} = await uploadAllFirebase()
      await uploadAllProducts(product_images, design_data, tag_list)
      setError(false)
      setSizes([])
      setAttributes({style: "3001", color: { value: "White", hex: "white", light: true }})
      setDetails({name: "", description: ""})
      setImageList([])
    }
    catch (err) {
    }
  }
  async function uploadAllFirebase() {
    try {
      showLoading("firebase", null, "Uploading images...")
      const product_images = await uploadProductImages()
      const tag_list = await uploadTags(orderedTags)
      const design_data = await uploadImageList(imageList)
      updateSuccess("firebase", null, "Uploaded images!")
      return({ product_images, design_data, tag_list})
    }
    catch (err) {
      updateError("firebase", "Server Error: firebase", "Contact us!")
    }
  }

  async function screenshot(id) {
    const canvas = await html2canvas(document.getElementById(id))
    const screenshot = await new Promise((resolve) => canvas.toBlob(async function(blob) {
      const image = new Image();
      const name = `${id}-${details.name}`
      image.src = blob;
      const imageRef = ref(storage, `products/${name}`)
      await uploadBytes(imageRef, blob)
      const url = await getDownloadURL(imageRef)
      resolve(url)
    })); 
    return(screenshot)
  }

  async function uploadProductImages() {
    const previews = []
    if (frontImages.length !== 0) {
      const front = await screenshot("front-preview")
      previews.push(front)
    } 
    if (backImages.length !== 0) {
      const back = await screenshot("back-preview")
      previews.push(back)
    }
    return(previews)
  }

  async function uploadImageList() {
    const design_data = await Promise.all(imageList.map( design => uploadImage(design)))
    return (design_data)
  }

  async function uploadTags() {
    if (tags) {
      return Promise.all(orderedTags.map(async (tag) => {
        const image = await uploadFirebase("tag", tag)
        return({
          placement: "Neck",
          art_file: image.name,
          art_url: image.url,
          underbase: true,
          x_offset: 0,
          y_offset: 0,
          width: 4.0,
          height: 3.0
        })
      }))
    } else return null
  }


  async function uploadImage(design) {
    const art = await uploadFirebase("art", design.image)
    return({
      ...design,
      image: null,
      art_file: art.name,
      art_url: art.url,
    })
  }

  
  async function uploadFirebase(folder, image) {
    const name = image.name + v4() 
    const imageRef = ref(storage, `${folder}/${name}`)
    await uploadBytes(imageRef, image)
    const url = await getDownloadURL(imageRef)
    return({
      name: name,
      url: url
    })
  }

  async function uploadAllProducts(product_images, design_data, tag_list) { 
    
    const formatted_design = design_data.map((design) => formatDesign(design))
    const {name, description} = details 
    
    for (let i = sizes.length - 1; i >= 0; i--) {
      await postProduct({
        name: name,
        description: description,
        images: product_images,
        attributes: {
          ...attributes,
          size: sizes[i],
          color: attributes.color.value.toUpperCase()
        },
        designs: tags ? [...formatted_design, tag_list[i]] : formatted_design 
      })
    }
    }

  async function postProduct(product) { 
    const { name, attributes } = product
    const { size } = attributes
    const design_name = `${name} - ${size}`
    try {
      showLoading(size, "Uploading...", design_name)
      const access_token = await getAccessTokenSilently()
      console.log(access_token)
      const data = await axios.post(`${process.env.REACT_APP_API_URL}/product`, product, {
        headers: {
          authorization: `Bearer ${access_token}` 
        }
      })
      updateSuccess(size, "Design has been uploaded!", design_name) 
      return(data)
    }
    catch (err) {
      updateError(size, "Problem uploading shirt.  Contact us!", design_name) 
    }
  }

  return (
    <>
    
      <BackButton />

      <div className="flexbox flex-wrap full-width" style={{ alignItems: "flex-start", gap: "20px"}}>
        <div className="flexbox-column background1 full-width radius15" style={{ maxWidth: "300px", padding: "5px 15px 15px"}}>
          <h2 className="full-width">New Product</h2>
          <ProductDetails details={details} setDetails={setDetails} error={error} />
          <AttributesSelect attributes={attributes} setAttributes={setAttributes} sizes={sizes} setSizes={setSizes} error={error}/>
          {
            tags ?
            <TagList sizes={sizes} tagList={tagList} setTagList={setTagList} setTags={setTags} /> :
            <Button onClick={() => setTags(true)} leftIcon={<AddIcon />} style={{ borderRadius:50, marginTop: 15}} >ADD TAGS</Button> 
          }
        </div>
        <div className="flexbox-column">
          <ProductPreview frontImages={frontImages} backImages={backImages} color={attributes.color} currentImage={currentImage} setCurrentImage={setCurrentImage} imageList={imageList} setImageList={setImageList}/>
          <Button className="form-button" style={{ margin: "10px 3px 5px auto"}} onClick={openConfirmModal} uppercase>submit</Button>
        </div>
        {/* <ConfirmModal openConfirm={openConfirm} close={() => setOpenConfirm(false)} details={details} attributes={attributes} sizes={sizes}/> */}
      </div>
    </>
  );
}

export default NewProduct;