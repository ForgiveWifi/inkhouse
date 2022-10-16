import NoBox from "../ui/NoBox";
import DesignBox from "./DesignBox";
import DesignSkeleton from "./DesignSkeleton";

function DesignList({loading, designs}) {
  if (loading || designs === null) {
    return(
      <div className="design-list">
        <DesignSkeleton count={5} />
      </div>
    )
  } else 
  if (designs.length === 0) {
    return(<NoBox text="No designs" />)
  } else 
  return (
    <div className="design-list">
      {
        designs.map((design,i) => {
          return(
            <DesignBox key={i} design={design} />
          )
        })
      } 
    </div>
  );
}

export default DesignList;