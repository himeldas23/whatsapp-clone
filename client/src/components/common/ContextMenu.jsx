import React, { useRef } from "react";

function ContextMenu({ options, coordinates, setContextMenu }) {
  const contextMenuRef = useRef(null);

  const handleClick = (e, callback) => {
    e.preventDefault();
    callback();
    setContextMenu(null);
  };

  return (
    <div
      className={`bg-dropdown-background fixed py-2 z-[100]  shadow-xl`}
      ref={contextMenuRef}
      style={{
        top:coordinates.y,
        left:coordinates.x,
      }}
    >
      <ul>
        {options.map(({ name, callback }) => (
          <li key={name} onClick={(e) => handleClick(e, callback)}
          className="px-5 py-2 cursor-pointer hover:bg-background-default"
          >
            <span className="text-white">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
