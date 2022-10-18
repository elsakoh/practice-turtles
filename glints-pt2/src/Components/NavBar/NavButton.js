import React from "react";

function NavButton(props) {
  return (
    <li className="w-auto h-12 mx-4 p-2 text-lg tracking-widest uppercase 
    hover:text-purple-400 hover:font-semibold">
      {props.name}
      <style jsx>{`
        .shadow-right-down:hover{
          box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.1), 2px 2px 15px -3px inset rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </li>
  );
}

export default NavButton;
