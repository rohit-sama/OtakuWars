import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

export default function Layout (){
    return (
          <div className="">
            <div className="gradient"></div>
            <Header/>
            <Outlet/>
        </div>
    );
}