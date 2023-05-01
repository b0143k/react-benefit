import React, { useRef } from "react";

export default function InputRef() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        style={{ display: "flex", justifyContent:"center", }}
        ref={fileInputRef}
      />
      <button onClick={handleClick}>Pick a File</button>
    </div>
  );
}