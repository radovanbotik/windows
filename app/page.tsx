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
    <div className="flex gap-8 max-w-lg">
      {/* body */}
      <div className="w-1/2 flex flex-col">
        <div className="flex-auto p-1 shadow-[inset_0px_2px_2px_0px_#1a202c,inset_0px_-2px_2px_0px_#f7fafc]  bg-windows-white">
          <div className="h-full w-full">
            <Image src={me} alt="radovan botik" width={2708} height={1855} className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="pt-4 px-1">
          <form onChange={handleDoNotDisplay}>
            <fieldset>
              <legend className="sr-only">Notifications</legend>
              <div className="relative flex items-start">
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
                    Do not display again.
                  </span>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      {/* buttons */}
      <div className="w-1/2 flex flex-col gap-2">
        <Button
          variant="system"
          href={"/cv"}
          className="px-10 py-1 capitalize w-full text-center"
          onClick={() => setIsOpen(false)}
        >
          Display CV
        </Button>
        <Button
          variant="system"
          href={"/media-player"}
          className="px-10 py-1 capitalize w-full text-center"
          onClick={() => setIsOpen(false)}
        >
          Play My Music
        </Button>
        <Button variant="system" className="px-10 py-1 capitalize w-full text-center" onClick={() => setIsOpen(false)}>
          About
        </Button>

        <div className="relative mt-2 ">
          <div className="absolute inset-0 flex items-center " aria-hidden="true">
            <div className="w-full border-t-2 border-gray-300 " />
          </div>
        </div>
        <Button variant="system" className="px-10 py-1 capitalize w-full text-center" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </div>
    </div>
  );
}

function ModalDescription() {
  return (
    <h1 className="text-3xl font-bold my-4 ">
      <span>Welcome to </span>
      <span className="text-white font-normal">my</span>
      <span className={`${firaSans.className} inline-block align-bottom`}>Computer</span>
    </h1>
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
      <Modal
        title="Welcome"
        description={<ModalDescription />}
        body={<ModalBody setIsOpen={setIsOpen} handleDoNotDisplay={handleDoNotDisplay} />}
        open={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
