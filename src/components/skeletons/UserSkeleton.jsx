
function UserSkeleton({count}) {
  return (
    Array(count).fill(0).map((_,i) => {
      return(
        <>
          <div key={i}>
            
          </div>
        </>
      )
    })
  );
}

export default UserSkeleton;