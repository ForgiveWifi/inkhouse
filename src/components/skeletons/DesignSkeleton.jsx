function DesignSkeleton({count}) {
  return (
    Array(count).fill(0).map((_,i) => {
      return(
        <>
          <div key={i} className="" style={{ padding: "20px"}}>
            
          </div>
        </>
      )
    })
  );
}

export default DesignSkeleton;