
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import InputField from "../ui/InputField"
import PhoneNumber from "./PhoneNumber"
import { sucessAlert, errorAlert, loadingAlert } from '../../utils/alerts';

import "./OrderForm.css"

export default function OrderForm() {

  const form = useRef();
  const phoneInput = useRef(null)

  const sendEmail = (e) => {
    loadingAlert()
    e.preventDefault();
    emailjs.sendForm('service_v67u0a8', 'template_1z1eccd', form.current, 'r1JeDbewFZ_ZDEMEr')
      .then((result) => {
        sucessAlert()
        form.current.reset()
        phoneInput.current.clearInput()
        console.log(result.text);
      }, (error) => {
        errorAlert()
        console.log(error.text);
      });
  }

  return (
    <>
      <section className='flex-column full-width'>
        <div className='flexbox'>
          <img src={require("../../assets/inkhouse-black.png")} alt="Inkhouse Logo" className="form-logo" />
        </div>

        <form ref={form} onSubmit={sendEmail} className='form-grid' autoComplete="off" >

          <InputField name="name" label="name" type="text" />
          <InputField name="brand" label="brand" type="text" />
          <InputField name="email" label="email" type="email" className="span2" />
          <PhoneNumber ref={phoneInput} />
          <InputField name="quantity" label="quantity" type="number" min="1" />
          <InputField name="budget" label="budget" type="number" min="1" placeholder="$" />

          <div className='flexbox-column span2' style={{ padding: "0px 10px" }}>
            <div style={{ fontSize: "25px", fontWeight: "400", color: "#FF9B54" }}>additional details</div>
            <textarea name="details" className='text-area' required/>
          </div>

          <div className='flexbox-row span2' style={{ margin: "15px auto 35px 20px" }}>
            <input name="sumbitButton" className='form-button' type="submit" value="send"></input>
          </div>

        </form>

      </section>
    </>
  )
}