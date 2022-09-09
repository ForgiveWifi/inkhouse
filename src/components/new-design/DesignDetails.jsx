import { TextInput } from "@mantine/core";
import ImageUpload from "../ui/ImageUpload";

function DesignDetails({details, setDetails, printImage, setPrintImage, error}) {
  return (
    <>
      <div>Details</div>
      <div className="flexbox-column background1 radius10" style={{ padding: "5px 15px 15px" }}>
        <TextInput 
          label="name"
          value={details.name}
          onChange={(e) => setDetails({...details, name: e.currentTarget.value})}
          error={error && !details.name}
          autoComplete="off"
        />
        <TextInput 
          label="description"
          value={details.description}
          onChange={(e) => setDetails({...details, description: e.currentTarget.value})}
          autoComplete="off"
          placeholder="Optional"
        />
         <ImageUpload 
          label="Print Image" 
          value={printImage} 
          onChange={setPrintImage} 
        />
      </div>
    </>
  );
}

export default DesignDetails;