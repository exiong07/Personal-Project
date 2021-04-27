import React from "react";
import FishSpotter from "../../Images/FishSpotter.png";

export default function Logo() {
  return (
    <div>
      <img src={FishSpotter} className="Logo" alt="fish-spotter-logo" />
    </div>
  );
}
