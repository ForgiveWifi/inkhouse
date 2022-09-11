import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DesignDisplay from "../../components/displays/DesignDisplay";

import BackButton from "../../components/ui/buttons/BackButton";
import { showError } from "../../utils/alerts";

function SingleDesign() {

  const { design_id } = useParams()
  const [design, setDesign] = useState(null)
  const [loading, setLoading] = useState()

  useEffect(() => {
    fetchDesign()
    async function fetchDesign() {
      try {
        setLoading(true)
        const res = await axios.get(`https://inkhouse-api.herokuapp.com/design/${design_id}`)
        setDesign(res.data)
        setLoading(false)
      }
      catch (err) {
        if (err.response.status === 404) {
          showError("404-error", "Design does not exist!")
        } else {
          showError("server-error", `Problem getting design ID: ${design_id} from inkhouse server!`, err.message)
        }
      }
    }
  },[])
  return (
    <>
      <div className="flexbox-column full-width background1 radius15 full-width shadow-2" style={{ maxWidth: "600px", padding: "15px", marginTop: "20px"}} >
        <BackButton />
        <DesignDisplay loading={loading} design_id={design_id} design={design}/>
      </div>
    </>
  );
}

export default SingleDesign;