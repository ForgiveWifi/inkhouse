import { Button } from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import AddressForm from "../../components/forms/AddressForm";
import BackButton from "../../components/ui/buttons/BackButton";
import Header from "../../components/ui/Header";
import { showError, showLoading, updateError, updateSuccess } from "../../utils/alerts";

function NewAccount() {

  const blank = {
    company_name: "",
    first_name: "",
    last_name: "",
    address: "",
    address_2: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
  }

  const [ship_from, setShipping] = useState(blank)
  const [error, setError] = useState(false)

  const {company_name, first_name, last_name, address, city, state, zip_code, country } = ship_from 

  function createNewAccount() {
    setError(true)
    if (!((first_name && last_name) || company_name)) {
      showError("shipping-name-error", "Must contain a company name or first and last name!")
    } else 
    if (!address || ! city || !state || !zip_code || !country) {
      showError("shipping-details-error", "Fill in shipping details!")    
    } else {
    
    const account = {
      name: company_name || `{${first_name} ${last_name}}`,
      ship_from: ship_from
    }

    showLoading("account-alert", "Uploading account...")
    axios.post(`${process.env.REACT_APP_API_URL}/account`, account)
      .then((res) => {
        setError(false)
        setShipping(blank)
        updateSuccess("account-alert", `${res.data._id}`, "Created new account with ID:")
      })
      .catch((err) => {
        updateError("account-alert", "Problem uploading account to inkhouse server!", err.response.status)
    })}
  }

  return (
    <>
      <BackButton />
      <Header title="New Account" />
      <h4 style={{ maxWidth: "300px", textAlign: "center", marginBottom: "5px"}}>
        We will ship products on behalf of customers from this address.
      </h4>
      <AddressForm shipping={ship_from} setShipping={setShipping} error={error} />
      <Button style={{ margin: "25px"}} onClick={createNewAccount} uppercase>sumbit</Button>
    </>
  );
}

export default NewAccount;