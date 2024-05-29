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
  backdrop = false,
}: {
  title?: string;
  description?: ReactNode;
  body?: ReactNode;
  backdrop?: boolean;
  open: boolean;
  setIsOpen: (arg0: boolean) => void;
}) {
  return (
    <Dialog className={"relative z-50"} open={open} onClose={() => setIsOpen(false)}>
      {backdrop && <div className="fixed inset-0 bg-black/70" aria-hidden="true" />}
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <Dialog.Panel className="group relative flex flex-col  bg-[#C0C0C0] border-2 border-t-[#FFFFFF] border-r-[#808080] border-b-[#808080] border-l-[#FFFFFF] shadow-[1px_1px_0px_0px_#0000007f]">
          <Dialog.Title className="bg-windows-blue text-windows-white text-sm py-1 px-2 " as="div">
            <div className="flex items-center">
              <span className="mr-auto leading-none">{title}</span>
              <Button variant="windows" className="w-4 h-4">
                ?
              </Button>
              <Button variant="windows" className="ml-1 w-4 h-4" onClick={() => setIsOpen(false)}>
                x
              </Button>
            </div>
          </Dialog.Title>
          <div className="p-1 ">
            {description && <Dialog.Description as="div">{description}</Dialog.Description>}
            {/* body */}
            {body}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
