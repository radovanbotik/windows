"use client";
import Image from "next/image";
import envelopeclosed from "../../../public/icons/envelopeclosed16.png";
import envelopeopen from "../../../public/icons/envelopeopen16.png";
import template from "../../../public/icons/template16.png";
import { useState } from "react";
import Modal from "@/app/UI/Modal";

type EmailProps = {
  createdAt: string;
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  important: boolean;
  opened: boolean;
  attachment: boolean;
  authorId: string | null;
};

export default function Row({ id, from, subject, createdAt, body, important, opened, attachment }: EmailProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="grid grid-cols-[32px_32px_32px_1fr_1fr_1fr] border-b border-windows-gray-200">
          <div className="inline-grid place-content-center w-full">{important && "!"}</div>
          <div className="inline-grid place-content-center w-full ">
            <Image
              src={opened ? envelopeopen : envelopeclosed}
              width={16}
              height={16}
              alt={opened ? "opened" : "closed"}
            />
          </div>
          <div className="inline-grid place-content-center w-full ">
            {attachment && <Image src={template} width={16} height={16} alt="attachment" className="w-full h-full" />}
          </div>
          <div className="inline-grid place-content-center w-full px-4">
            <p className="truncate">{from}</p>
          </div>
          <div className="inline-grid place-content-center w-full px-4">
            <p className="truncate">{subject}</p>
          </div>
          <div className="inline-grid place-content-center w-full px-4">
            <p className="truncate">{createdAt}</p>
          </div>
        </div>
      </li>
      <Modal
        title={`Mail From ${from}`}
        description={subject}
        body={<p className="max-w-xs">{body}</p>}
        open={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
