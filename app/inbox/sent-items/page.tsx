"use client";

import Image from "next/image";
import envelopeclosed from "../../../public/icons/envelopeclosed16.png";
import envelopeopen from "../../../public/icons/envelopeopen16.png";
import template from "../../../public/icons/template16.png";
import Modal from "../../UI/Modal";
import { useState } from "react";

type Email = {
  id: number;
  from: string;
  subject: string;
  date: string;
  body: string;
  important: boolean;
  opened: boolean;
  attachment: boolean;
};

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
  const emails: Email[] = [
    {
      id: 1,
      from: "joebiden@gmail.com",
      subject: "Confidential: Immediate Attention Required",
      date: "05/23/2024",
      body: "President Biden, I need to discuss an urgent, confidential matter. Please advise on a suitable time. Best regards, Rado",
      important: true,
      opened: false,
      attachment: false,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  function selectEmail(id: number) {
    const email = emails.find(email => email.id === id);
    if (email) {
      setSelectedEmail(email);
      setIsOpen(true);
    }
    return;
  }

  return (
    <>
      <ul className="flex flex-col  space-y-1">
        {emails.map(email => (
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
