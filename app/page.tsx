"use client";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

import { Fira_Sans } from "next/font/google";
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import me from "../public/images/me.jpg";
const firaSans = Fira_Sans({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

function ModalBody({
  handleDoNotDisplay,
  setIsOpen,
}: {
  handleDoNotDisplay: (e: FormEvent) => void;
  setIsOpen: (arg0: boolean) => void;
}) {
  return (
    <div className="grid items-center grid-cols-1  gap-4 max-w-56 sm:max-w-xs">
      {/* image*/}
      <div className="">
        <div className="p-1 shadow-[inset_0px_2px_2px_0px_#1a202c,inset_0px_-2px_2px_0px_#f7fafc]  bg-windows-white">
          <Image src={me} alt="radovan botik" width={2708} height={1855} />
        </div>
      </div>
      {/* buttons */}
      <div className="flex flex-col gap-2 self-start">
        <Button
          variant="system"
          href={"/cv"}
          className="py-1 capitalize w-full text-center"
          onClick={() => setIsOpen(false)}
        >
          Display CV
        </Button>
        <Button
          variant="system"
          href={"/media-player"}
          className="py-1 capitalize w-full text-center"
          onClick={() => setIsOpen(false)}
        >
          Play My Music
        </Button>
        {/* <Button variant="system" className="py-1 capitalize w-full text-center" onClick={() => setIsOpen(false)}>
          About
        </Button> */}
      </div>
      {/* check input*/}
      <div className="ml-1">
        <form onChange={handleDoNotDisplay}>
          <fieldset>
            <legend className="sr-only">Do not display again.</legend>
            <div className="relative flex items-start justify-center">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  // onChange={(e)=>console.log(e.target.value)}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <span id="comments-description" className="text-gray-500">
                  Don't show again.
                </span>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      {/* close button */}
      <Button variant="system" className="py-1 capitalize w-full text-center" onClick={() => setIsOpen(false)}>
        Close
      </Button>
    </div>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  function shouldShow() {
    const show = localStorage.getItem("show");
    if (show === "false") return setIsOpen(false);
    return setIsOpen(true);
  }

  function handleDoNotDisplay(e: FormEvent) {
    if (e.target instanceof HTMLInputElement) {
      console.log(e.target.checked);
      const isChecked = e.target.checked;
      if (isChecked) {
        localStorage.setItem("show", "false");
      }
      if (!isChecked) {
        localStorage.removeItem("show");
      }
    }
  }

  useEffect(() => {
    shouldShow();
  }, []);
  return (
    <div className="w-full h-full relative">
      {/* <Modal
        title="Welcome"
        description={<h1 className="text-2xl font-bold my-1 sm:my-2 text-center">Hi, I'm Rado</h1>}
        body={<ModalBody setIsOpen={setIsOpen} handleDoNotDisplay={handleDoNotDisplay} />}
        open={isOpen}
        setIsOpen={setIsOpen}
      /> */}
    </div>
  );
}
