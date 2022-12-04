import { v4 } from "uuid"
import { storage } from "../firebase.js";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage"

async function uploadFirebase(folder, name, image) {
  console.log("firebase")
  const uuid = name + v4()
  const image_ref = ref(storage, `${folder}/${uuid}`)
  await uploadBytes(image_ref, image)
  console.log("uploaded")
  const url = await getDownloadURL(image_ref)
  console.log("url")
  return({
    name: uuid,
    url: url,
    ref: image_ref
  })
}

async function deleteFirebase(folder, name) {
  const image_ref = ref(storage, `${folder}/${name}`)
  deleteObject(image_ref)
}

export { uploadFirebase, deleteFirebase };