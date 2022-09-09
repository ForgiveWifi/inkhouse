
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import InputField from "../ui/InputField"
import PhoneNumber from './PhoneNumber';
import { showLoading, updateError, updateSuccess } from '../../utils/alerts';
import "./OrderForm.css"


export default function OrderForm() {

  const form = useRef();
  const phoneInput = useRef(null)

  const id = ""

  const sendEmail = (e) => {
    showLoading(id, "Sumbitting form, please wait...")
    e.preventDefault();
    emailjs.sendForm('service_v67u0a8', 'template_1z1eccd', form.current, 'r1JeDbewFZ_ZDEMEr')
      .then((result) => {
        updateSuccess(id, 'Thank you! We will contact you shortly.')
        form.current.reset()
        phoneInput.current.clearInput()
      }, (error) => {
        updateError(id, "We ran into a problem submitting your form. Please contact us!")
      });
  }

  return (
    <>
      <section className='flex-column full-width'>
        <div className='flexbox'>
          <img src={require("../../assets/inkhouse-black.png")} alt="Inkhouse Logo" className="form-logo" />
        </div>

        <form ref={form} onSubmit={sendEmail} className='form-grid' autoComplete="off" >

          <InputField name="name" type="text" />
          <InputField name="brand" type="text" />
          <InputField name="email" type="email" className="span2" />
          <PhoneNumber ref={phoneInput} />
          <InputField name="quantity" type="number" min={0} />
          <InputField name="budget" type="number" min={0} placeholder="$" />

          <div className='flexbox-column span2' style={{ padding: "0px 10px" }}>
            <div style={{ position: "relative", top: "5px", fontSize: "25px", fontWeight: "500", color: "#FF9B54" }}>additional details</div>
            <textarea name="details" className='text-area' required/>
          </div>

          <div className='flexbox-row span2' style={{ margin: "15px 20px 35px auto" }}>
            <input name="sumbitButton" className='form-button' type="submit" value="send"></input>
          </div>

        </form>

      </section>
    </>
  )
}