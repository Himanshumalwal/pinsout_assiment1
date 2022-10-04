import React from "react";
import Link from "next/link";
import ButtonPrimary from "../inputs/ButtonPrimary";
function Navbar() {
  return (
    <>
      <div className="border-b-2 border-white-600 pt-5  flex justify-between w-10/12 items-center">
        <div>Qollab</div>
        <div className="flex flex-row justify-evenly w-6/12">
          <Link href="/about">
            <ButtonPrimary text="Companies" classes="text-white" />
          </Link>
          <Link href="/about">
            <ButtonPrimary text="Students" classes="text-white " />
          </Link>
          <Link href="/about">
            <ButtonPrimary text="College/Universities" classes="text-white" />
          </Link>
          <Link href="/about">
            <ButtonPrimary text="About Us" classes="text-white" />
          </Link>
        </div>
        <div className="flex">
          <ButtonPrimary text="Sign In" classes="text-white" />
          <ButtonPrimary text="Register" clasees="text-blue" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
