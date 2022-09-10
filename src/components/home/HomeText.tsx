import FormModal from "../modals/FormModal";

function HomeText() {
  return (
    <>
      <div className="flexbox-start" style={{ maxWidth: "350px"}}> 
        <h1>Welcome to Inkhouse!</h1>
        <FormModal />
      </div>
    </>
  );
}

export default HomeText;