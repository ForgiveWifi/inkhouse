import toDate from "../../utils/toDate";
import toTime from "../../utils/toTime";

function AccountBox({user}) {

  const { _id, name, ship_from, joined_at} = user
  const {address, city, state, zip_code} = ship_from

  return (
    <>
      <div className="background1 radius15" style={{ width: "450px", padding: "20px", margin: "15px"}}>
        <div>{_id}</div>
        <div>{name}</div>
        <div>{`${address}, ${city}, ${state}, ${zip_code}`}</div>
        <div>{toDate(joined_at, "long")}</div>
        <div>{toTime(joined_at)}</div>
      </div>
    </>
  );
}

export default AccountBox;