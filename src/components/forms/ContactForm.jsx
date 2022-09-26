import { useRef, useState } from 'react';
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import InputField from "../ui/InputField"
import PhoneNumber from './PhoneNumber';
import { Input } from '@mantine/core';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { showLoading, updateError, updateSuccess } from '../../utils/alerts';
import "./ContactForm.css"



export default function ContactForm() {

  const [cooldown, setCooldown] = useState(false)
  const form = useRef();
  const phoneInput = useRef(null)

  const sendEmail = (e) => {
    if (!cooldown) {
      e.preventDefault()
      showLoading("order-form", "Sumbitting form, please wait...")
      setCooldown(true)
      setTimeout(() => setCooldown(false),5000)
      emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
        .then((result) => {
          console.log("sucess")
          updateSuccess("order-form", 'Thank you! We will contact you shortly.')
          form.current.reset()
          phoneInput.current.clearInput()
        })
        .catch((error) => {
          console.log("error")
          updateError("order-form", "We ran into a problem submitting your form. Please contact us!")
        });
    }
  }

  return (
    <>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className='flexbox-column full-width'>

        <div className='background1 shadow2' style={{ height: "190px", position: "relative", top: "40px", borderRadius: "30px", padding: "0px 20px"}}>
          <div className='flexbox-column' style={{ marginTop: "15px"}}>
          <h1 style={{ fontSize: "40px"}}>Contact Us</h1>
          <p className="text-center" style={{ maxWidth: "250px", marginLeft: "3px" }}>Leave your details and we will contact you as soon as we can.</p>
          </div>
        </div>

        <section className='flexbox full-width shadow1' style={{ maxWidth: "500px", backgroundColor: "white", borderRadius: "30px", padding: "30px", zIndex: "2"}}>

          <form ref={form} onSubmit={sendEmail} className='form-grid full-width' style={{ maxWidth: "375px" }} autoComplete="off" >
            <div className='flexbox span2' style={{ marginBottom: "20px"}}>
              <img src={require("../../assets/inkhouse-black.png")} alt="Inkhouse Logo" className="form-logo" />
            </div>
            <InputField name="name" type="text" required={true}/>
            <InputField name="brand" type="text" />
            <InputField name="email" type="email" className="span2" required={true}/>
            <PhoneNumber ref={phoneInput} />
            <InputField name="quantity" type="number" min={0} />

            <div className={`flexbox-start`} >
              <label>budget</label>
              <Input
                icon={<AttachMoneyIcon style={{ fill: "rgba(0, 0, 0, 0.6)"}}/>} 
                variant="unstyled"
                className="input-field"
                name="budget" 
                type="number" 
                min={0}
              />
            </div>

            <div className='flexbox-column span2' style={{ padding: "0px 10px" }}>
              <div style={{ position: "relative", top: "5px", fontSize: "25px", fontWeight: "500", color: "#FF9B54" }}>additional details</div>
              <textarea name="details" className='text-area'/>
            </div>

            <div className='flexbox-row span2' style={{ margin: "15px 10px 5px auto" }}>
              <input name="sumbitButton" className='form-button' type="submit" value="send"></input>
            </div>

          </form>

        </section>
      </motion.div>
    </>
  )
}