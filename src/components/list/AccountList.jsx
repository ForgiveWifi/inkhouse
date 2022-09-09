import NoBox from "../ui/NoBox";
import AccountBox from "../boxes/AccountBox";
import UserSkeleton from "../skeletons/UserSkeleton";

function AccountList({loading, accounts}) {
  if (loading || accounts === null) {
    return(
      <div className="account-list">
        <UserSkeleton count={5} />
      </div>
    )
  } else 
  if (accounts.length === 0) {
    return(<NoBox text="No accounts" />)
  } else 
  return (
    <div className="account-list">
      {
        accounts.map((user,i) => {
          return(
            <AccountBox key={i} user={user} />
          )
        })
      } 
    </div>
  );
}

export default AccountList;