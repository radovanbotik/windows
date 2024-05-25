"use client";

import Image from "next/image";
import envelopeclosed from "../../public/icons/envelopeclosed16.png";
import envelopeopen from "../../public/icons/envelopeopen16.png";
import template from "../../public/icons/template16.png";
import Modal from "../UI/Modal";
import { useState } from "react";
import { receivedEmails, Email } from "../lib/inboxdata";
import Button from "../UI/Button";

function EmailRow({
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
    const email = receivedEmails.find(email => email.id === id);
    if (email) {
      setSelectedEmail(email);
      setIsOpen(true);
    }
    return;
  }

  return (
    <>
      <div className="grid grid-cols-[32px_32px_32px_1fr_1fr_1fr] w-full border-2 border-gray-600">
        <Button variant="windows" className="inline-grid w-full">
          !
        </Button>
        <Button variant="windows" className="inline-grid  w-full">
          <Image src={envelopeclosed} alt="unopened" />
        </Button>
        <Button variant="windows" className="inline-grid  w-full">
          <Image src={template} alt="attachment" />
        </Button>
        <Button variant="system" className="inline-grid  w-full">
          From
        </Button>
        <Button variant="system" className="inline-grid  w-full">
          Subject
        </Button>
        <Button variant="system" className="inline-grid  w-full">
          Date
        </Button>
      </div>
      <div className="bg-windows-white flex-auto overscroll-y">
        <ul className="flex flex-col  space-y-1">
          {receivedEmails.map(email => (
            <EmailRow key={email.id} {...email} selectEmail={selectEmail} />
          ))}
        </ul>
        <Modal
          setIsOpen={setIsOpen}
          open={isOpen}
          title={`Email from ${selectedEmail?.from}`}
          description={selectedEmail?.subject}
          body={<p className="max-w-sm">{selectedEmail?.body}</p>}
        />
      </div>
    </>
  );
}
