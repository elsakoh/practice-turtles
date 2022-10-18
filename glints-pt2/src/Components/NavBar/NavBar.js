import React from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import forkspoon from "../images/forkspoon.png";


const NavBar = () => {

  return (
    <nav className="w-full h-auto p-6 top-0 z-10 bg-white" style={{minWidth: '1000px'}}>
      <div className="pt-4 text-center block lg-xl:inline-block lg-xl:float-right lg-xl:pt-8">
        <ul className="flex justify-center inline mb-0 text-black-600 lg-xl:justify-end items-center">
        <Link to="/">

            <div className="flex items-center mx-8 hover:text-purple-500">
              <div className="h-24 w-24 mx-4 rounded-full shadow-focus overflow-hidden bg-white">
                <img src={forkspoon} className="mt-2" style={{height: 90, objectFit:"cover"}} alt="spoon"/>
              </div>
              <h1 className="text-4xl karla font-semibold">Restaurants!</h1>
            </div>
            </Link>
          <Link to="/list">
            <NavButton name="Retrieve a list" />
          </Link>
  
         
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
