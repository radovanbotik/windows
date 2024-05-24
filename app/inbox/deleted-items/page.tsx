"use client";

import Image from "next/image";
import envelopeclosed from "../../../public/icons/envelopeclosed16.png";
import envelopeopen from "../../../public/icons/envelopeopen16.png";
import template from "../../../public/icons/template16.png";
import Modal from "../../UI/Modal";
import { useState } from "react";
import { deletedEmails,type Email } from "@/app/lib/inboxdata";

function Email({
  id,
  from,
  subject,
  date,
  important,
  opened,
  attachment,
  selectEmail,
}: Email & { selectEmail: (id: number) => void }) {
  return (
    <li onClick={() => selectEmail(id)} className="cursor-pointer">
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
          <p className="truncate">{date}</p>
        </div>
      </div>
    </li>
  );
}

export default function Page() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  function selectEmail(id: number) {
    const email = deletedEmails.find(email => email.id === id);
    if (email) {
      setSelectedEmail(email);
      setIsOpen(true);
    }
    return;
  }

  return (
    <>
      <ul className="flex flex-col  space-y-1">
        {deletedEmails.map(email => (
          <Email key={email.id} {...email} selectEmail={selectEmail} />
        ))}
      </ul>
      <Modal
        setIsOpen={setIsOpen}
        open={isOpen}
        title={`Email from ${selectedEmail?.from}`}
        description={selectedEmail?.subject}
        body={<p className="max-w-sm">{selectedEmail?.body}</p>}
      />
    </>
  );
}
