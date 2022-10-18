import React from "react";
import ScrollToTop from "./../ScrollToTop";
import dumplings from "./../images/dumplings.jpg";
import SearchBar from "../searchbar/SearchBar";
import List from "./List";

const LandingPage = (props) => {
  const { listItems, addListItem, removeListItem, removeAllListItems } = props;

  return (
    <div className="h-full m-0" style={{ minWidth: "1000px" }}>
      <ScrollToTop />
      <div className="flex flex-row items-center justify-center">
        <div className="absolute w-screen h-screen z-0">
          <img src={dumplings} alt="dumplings :)"/>
        </div>
        <div className=" w-screen h-screen z-10 flex flex-row">
          <div className="w-1/2">
            <SearchBar addListItem={addListItem} />
          </div>
          <div className="w-1/2 items-center justify-center">
            <List
              listItems={listItems}
              removeListItem={removeListItem}
              removeAllListItems={removeAllListItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
