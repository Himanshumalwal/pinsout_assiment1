import React from "react";
import { Button } from "@mui/material";
function ButtonPrimary(props) {
  return (
    <>
      <Button
        sx={{ textTransform: "none" }}
        className={`${props.classes}  whitespace-nowrap hover:bg-white hover:text-black`}
      >
        {props.text}
      </Button>
    </>
  );
}

export default ButtonPrimary;
