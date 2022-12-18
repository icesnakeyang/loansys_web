import Home from "../pages/Home";
import {Route, Routes} from "react-router-dom";
import ThankYou from "../pages/ThankYou";

const Routers=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/ThankYou" element={<ThankYou/>}></Route>
        </Routes>
    )
}

export default Routers
