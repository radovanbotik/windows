"use client";
import { Dialog } from "@headlessui/react";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import Button from "./Button";

export default function ImageViewer({
  title,
  description,
  body,
}: {
  title?: string;
  description?: ReactNode;
  body?: ReactNode;
}) {
  let [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, [body]);

  return (
    <Dialog className={"relative z-50"} open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">
        <Dialog.Panel className="group relative flex flex-col bg-[#C0C0C0] border-2 border-t-[#FFFFFF] border-r-[#808080] border-b-[#808080] border-l-[#FFFFFF] shadow-[1px_1px_0px_0px_#0000007f]">
          <Dialog.Title className="bg-windows-blue text-windows-white p-1 px-2">
            <div className="flex items-center">
              <span className="mr-auto font-black">{title}</span>
              <Button variant="windows">?</Button>
              <Button variant="windows" className="ml-1" onClick={() => setIsOpen(false)}>
                x
              </Button>
            </div>
          </Dialog.Title>
          <div className="p-2">
            {description && (
              <Dialog.Description className="my-4" as="div">
                {description}
              </Dialog.Description>
            )}
            {body}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
