"use client";
import Modal from "../../UI/Modal";
import { useState } from "react";
import { contacts, Contact } from "../../lib/inboxdata";
import Button from "../../UI/Button";

function ContactRow({ name, email, selectPerson }: Contact & { selectPerson: (name: string) => void }) {
  return (
    <li onClick={() => selectPerson(name)} className="cursor-pointer">
      <div className="grid grid-cols-[1fr_1fr] border-b border-windows-gray-200">
        <div className="inline-grid place-content-center w-full px-4">
          <p className="truncate capitalize">{name}</p>
        </div>
        <div className="inline-grid place-content-center w-full px-4">
          <p className="truncate">{email}</p>
        </div>
      </div>
    </li>
  );
}

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  function selectPerson(name: string) {
    const contact = contacts.find(contact => contact.name === name);
    if (contact) {
      setSelectedContact(contact);
      setIsOpen(true);
    }
    return;
  }

  return (
    <>
      <div className="grid grid-cols-[1fr_1fr] w-full border-2 border-gray-600">
        <Button variant="system" className="inline-grid  w-full">
          Name
        </Button>
        <Button variant="system" className="inline-grid  w-full">
          Email Adress
        </Button>
      </div>
      <div className="bg-windows-white flex-auto overscroll-y">
        <ul className="flex flex-col  space-y-1">
          {contacts.map(contact => (
            <ContactRow key={contact.email} {...contact} selectPerson={selectPerson} />
          ))}
        </ul>
        <Modal
          setIsOpen={setIsOpen}
          open={isOpen}
          title={`Contact`}
          description={selectedContact?.name}
          body={<p className="max-w-sm">{selectedContact?.email}</p>}
        />
      </div>
    </>
  );
}
