import { mainContext } from "./context";
import { useContext } from "react";
const Loading=()=>{
    const {loading}=useContext(mainContext);
    return(
        <div className={`${loading ? "loading show-loading": "loading" }`}>
            <h1 className="lodaingHeading">Loading...</h1>
        </div>
    )
}
export default Loading;