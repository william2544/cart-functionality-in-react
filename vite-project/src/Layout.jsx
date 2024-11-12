import Navber from "./components/Navber";
import { Outlet } from "react-router-dom";
export default function Layout() {
    return(
        <div>
            <Navber/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
};
