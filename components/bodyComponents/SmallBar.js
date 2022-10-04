import React from "react";
import ButtonPrimary from "../inputs/ButtonPrimary";
function SmallBar() {
  return (
    <>
      <div className="flex justiy-center w-60% bg-white rounded p-3 drop-shadow2xl">
        <ButtonPrimary classes="" text="Explore Opportunites" />
        <ButtonPrimary classes=" " text="Connect With Us" />
        <ButtonPrimary classes="" text="Sing Up for Free" />
      </div>
    </>
  );
}

export default SmallBar;
