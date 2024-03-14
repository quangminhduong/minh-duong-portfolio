import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-1 laptop:mt-8 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            
            <div className="mt-3">
            <h1 className="text-lg tablet:text-xl m-1 laptop:m-2 rounded-lg ">
              Social Media:
            </h1>
              <Socials />
            </div>
            <h1 className="text-sm tablet:text-base m-1 laptop:m-2 rounded-lg ">
              Or call me at: 
            </h1>
            <h1 className="text-sm tablet:text-base m-1 laptop:m-2 rounded-lg underline underline-offset-1">
              + 61 422 969 888
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Template Made With ❤ by{" "}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Chetan Verma</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
