"use client";
import { Dialog } from "@headlessui/react";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import Button from "./Button";

export default function Modal({
  title,
  description,
  body,
  open,
  setIsOpen,
}: {
  title?: string;
  description?: ReactNode;
  body?: ReactNode;
  open: boolean;
  setIsOpen: (arg0: boolean) => void;
}) {
  return (
    <Dialog className={"relative z-50"} open={open} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        {/* <Dialog.Panel className="group relative flex flex-col border-t-2 border-t-windows-gray border-l-2 border-l-windows-gray pl-1 pt-1  min-w-96 bg-windows-gray border-b-black border-r-black border-r-2 border-b-2 shadow-[inset_2px_0px_0px_0px_#fff,inset_0px_2px_0px_0px_#fff;]"> */}
        <Dialog.Panel className="group relative flex flex-col bg-[#C0C0C0] border-2 border-t-[#FFFFFF] border-r-[#808080] border-b-[#808080] border-l-[#FFFFFF] shadow-[1px_1px_0px_0px_#0000007f]">
          <Dialog.Title className="bg-windows-blue text-windows-white p-1" as="div">
            <div className="flex items-center">
              <span className="mr-auto font-black">{title}</span>
              <Button variant="windows">?</Button>
              <Button variant="windows" className="ml-1" onClick={() => setIsOpen(false)}>
                x
              </Button>
            </div>
          </Dialog.Title>
          <div className="p-1">
            <Dialog.Description as="div">{description}</Dialog.Description>
            {/* body */}
            {body}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
