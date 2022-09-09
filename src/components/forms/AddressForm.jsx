import { TextInput } from "@mantine/core";

function AddressForm({shipping, setShipping, error}) {

  const {company_name, first_name, last_name, address, address_2, city, state, zip_code, country } = shipping

  const name = !((first_name && last_name) || company_name)
  
  return (
    <>
      <div>
        <div className="flexbox">
          <TextInput
            label="Company"
            value={company_name}
            onChange={(e) => setShipping({...shipping, company_name: e.currentTarget.value})}
            error={error && name}
            autoComplete="off"
          />
        </div>
        <div style={{ display: "grid", gridColumnGap: "15px"}}>
        
          <TextInput 
            label="First Name"
            value={first_name}
            onChange={(e) => setShipping({...shipping, first_name: e.currentTarget.value})}
            error={error && name}
            autoComplete="off"
          />
          <TextInput 
            label="Last Name"
            value={last_name}
            onChange={(e) => setShipping({...shipping, last_name: e.currentTarget.value})}
            error={error && name}
            autoComplete="off"
          />
          <TextInput 
            label="Address"
            value={address}
            onChange={(e) => setShipping({...shipping, address: e.currentTarget.value})}
            error={error && !address}
            autoComplete="off"
            className="span2"
          />
          <TextInput 
            label="Address 2"
            value={address_2}
            onChange={(e) => setShipping({...shipping, address_2: e.currentTarget.value})}
            error={error && !address}
            autoComplete="off"
            className="span2"
          />
          <TextInput 
            label="City"
            value={city}
            onChange={(e) => setShipping({...shipping, city: e.currentTarget.value})}
            error={error && !city}
            autoComplete="off"
          />
          <TextInput 
            label="State"
            value={state}
            error={error && !state}
            onChange={(e) => setShipping({...shipping, state: e.currentTarget.value})}
            autoComplete="off"
          />
          <TextInput 
            label="Zip Code"
            value={zip_code}
            onChange={(e) => setShipping({...shipping, zip_code: e.currentTarget.value})}
            error={error && !zip_code}
            autoComplete="off"
          />
          <TextInput 
            label="Country"
            value={country}
            onChange={(e) => setShipping({...shipping, country: e.currentTarget.value})}
            error={error && !country}
            autoComplete="off"
          />
        </div>
      </div>
    </>
  );
}

export default AddressForm;