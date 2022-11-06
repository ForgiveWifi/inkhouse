import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../auth/Loading";
import AddressForm from "../components/forms/AddressForm";
import NoBox from "../components/ui/NoBox";
import { showError, showLoading, updateError, updateSuccess } from "../utils/alerts";
import { TextInput } from "@mantine/core";

function Profile() {
  
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
  const [profile, setProfile] = useState({})
  const [profileRef, setProfileRef] = useState({})
  // const [address, setAddress] = useState({})
  const [shipping, setShipping] = useState({})
  const [shippingRef, setShippingRef] = useState({})
  const [loading, setLoading] = useState(false)
  const error = false

  useEffect(() => {
    async function getProfile() {
      try {
        setLoading(true)
        const access_token = await getAccessTokenSilently()
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/account`, {
          headers: {
            authorization: `Bearer ${access_token}`
          }
        })
        const { first_name, last_name, company} = res.data.metadata
        const account = {
          first_name: first_name,
          last_name: last_name,
          company: company,
        }
        setProfile(account)
        setProfileRef(account)
        if (res.data.shipping) {
          setShipping(res.data.shipping.address)
          setShippingRef(res.data.shipping.address)
        }
        setLoading(false)
      }
      catch (err) {
        setLoading(false)
        showError("profile", "API Error: profile", "Contact Us!")
      }
    }
    getProfile()
  },[])

  async function saveProfile() {
    try {
      showLoading("shipping", null, "Saving...")
      const access_token = await getAccessTokenSilently()
      await axios.post(`${process.env.REACT_APP_API_URL}/account`, 
      { 
        // address: address,
        shipping: shipping, 
        metadata: profile
      }, 
      {
        headers: {
          authorization: `Bearer ${access_token}` 
        }
      })
      updateSuccess("shipping", null, "Changes has been saved!") 
    }
    catch (err) {
      updateError("shipping", null, "Problem saving.  Contact us!") 
    }
  }

  function revert() {
    setProfile(profileRef)
    setShipping(shippingRef)
  }
  
  if (isLoading) {
    return null
  }
  return (
    <>
      {loading && <Loading />}
      {
        isAuthenticated && 
        <div style={{ margin: 40}}>
          <h1>Profile</h1>
          <div className="flexbox-row" style={{ margin: "15px 0px"}}>
            <h5 style={{ marginRight: 15}}>email:</h5>
            <div>{user.email}</div>
          </div>
          <div style={{maxWidth: 250}}>
          
          <TextInput 
            label="first name"
            value={profile.first_name}
            onChange={(e) => setProfile({...profile, first_name: e.currentTarget.value})}
            error={error}
            autoComplete="off"
          />
          <TextInput 
            label="last name"
            value={profile.last_name}
            onChange={(e) => setProfile({...profile, last_name: e.currentTarget.value})}
            error={error}
            autoComplete="off"
          />
          <TextInput
            label="company"
            value={profile.company}
            onChange={(e) => setProfile({...profile, company: e.currentTarget.value})}
            error={error}
            autoComplete="off"
          />
          </div>
          <h2 style={{ marginTop: 30}}>Shipping Address</h2>
          <AddressForm shipping={shipping} setShipping={setShipping} error={error} />
          {/* <h2>Address</h2>
          <AddressForm shipping={address} setShipping={setAddress} error={error} /> */}
          {
            (profile !== profileRef || shipping !== shippingRef) &&
            <div style={{ marginTop: 20}}>
            <Button onClick={() => saveProfile()} style={{ marginRight: 10}}>
              save
            </Button>
            <Button onClick={() => revert()}>
              cancel
            </Button>
            </div>
          }
        </div>
      }
    </>
  );
}

export default Profile;