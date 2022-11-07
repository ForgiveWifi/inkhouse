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
import ConfirmModal from "../components/new-product/ConfirmModal.jsx";
import formatDesign from "../utils/formatDesign.js";
import html2canvas from "html2canvas";
import { useAuth0 } from "@auth0/auth0-react";
import { useMediaQuery } from '@mantine/hooks';
import NoBox from "../components/ui/NoBox.jsx";

function NewProduct() {

  const mobile = useMediaQuery('(min-width: 860px)')

  const { getAccessTokenSilently } = useAuth0()

  const [currentImage, setCurrentImage] = useState({ placement: "front", width: 200, x_offset: 60, y_offset:0})
  const [sizes, setSizes] = useState([])
  const [attributes, setAttributes] = useState({style: "3001", color: { value: "White", hex: "white", light: true }})
  const [details, setDetails] = useState({name: "", description: ""})
  const [imageList, setImageList] = useState([])

  const [error, setError] = useState(false)
  // const [openConfirm, setOpenConfirm] = useState(false)
  
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
    // setOpenConfirm(true)
    submitProduct()
  }

  async function submitProduct() {
    try {
      const {product_images, design_data} = await uploadAllFirebase()
      await postProduct(product_images, design_data)
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
      const design_data = await uploadImageList(imageList)
      updateSuccess("firebase", null, "Uploaded images!")
      return({ product_images, design_data })
    }
    catch (err) {
      updateError("firebase", "Server Error: firebase", "Contact us!")
    }
  }

  async function screenshot(id) {
    const canvas = await html2canvas(document.getElementById(id))
    const screenshot = await new Promise((resolve) => canvas.toBlob(async function(blob) {
      const image = new Image();
      const name = `${details.name}-${id}`
      image.src = blob;
      const imageRef = ref(storage, `${id}/${name}`)
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

  async function postProduct(product_images, design_data) { 
    const {name, description} = details
    try {
      showLoading(name, "Uploading...", name)
      const formatted_design = design_data.map((design) => formatDesign(design))
      const access_token = await getAccessTokenSilently()
      const product = {
        name: name, 
        description: description,
        sizes: sizes,
        images: product_images,
        attributes: {
          ...attributes,
          color: attributes.color.value.toUpperCase()
        },
        designs: formatted_design 
      }
      await axios.post(`${process.env.REACT_APP_API_URL}/product`, product, {
        headers: {
          authorization: `Bearer ${access_token}` 
        }
      })
      updateSuccess(name, "Product has been uploaded!", name) 
    }
    catch (err) {
      updateError(name, "Problem uploading shirt.  Contact us!", name) 
    }
  }

  return (
    <>
    
      <BackButton />
      {
        !mobile ? 
        <div style={{ marginTop: 30, padding: 20}}><NoBox text="Use a wider screen to create designs" /></div> :
        <div className="flexbox flex-wrap full-width" style={{ margin: "80px 0px 15px", alignItems: "flex-start", gap: 15}}>
          <div className="flexbox-column background3 full-width radius15" style={{ maxWidth: "300px", padding: "5px 15px 15px"}}>
            <h2 className="full-width">New Product</h2>
            <ProductDetails details={details} setDetails={setDetails} error={error} />
            <AttributesSelect attributes={attributes} setAttributes={setAttributes} sizes={sizes} setSizes={setSizes} error={error}/>
          </div>
          <div className="flexbox-column">
            <ProductPreview frontImages={frontImages} backImages={backImages} color={attributes.color} currentImage={currentImage} setCurrentImage={setCurrentImage} imageList={imageList} setImageList={setImageList}/>
            <Button onClick={openConfirmModal} className="form-button" style={{ margin: "10px 3px 5px auto"}}  leftIcon={<AddIcon />} uppercase>submit</Button>
          </div>
          {/* <ConfirmModal openConfirm={openConfirm} close={() => setOpenConfirm(false)} details={details} attributes={attributes} sizes={sizes}/> */}
        </div>
      }
    </>
  );
}

export default NewProduct;