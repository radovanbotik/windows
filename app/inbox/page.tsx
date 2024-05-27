import prisma from "../../prisma/prisma";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import envelopeclosed from "../../public/icons/envelopeclosed16.png";
import envelopeopen from "../../public/icons/envelopeopen16.png";
import template from "../../public/icons/template16.png";
import Modal from "../UI/Modal";
import { useState } from "react";
import { Email, getInbox } from "../lib/inboxdata";
import Button from "../UI/Button";
import Row from "./common/Row";

type InboxProps = Prisma.PromiseReturnType<typeof getInbox>;

// function EmailRow({ id, from, subject, createdAt, important, opened, attachment }: EmailProps) {
//   return (
//     <li className="cursor-pointer">
//       <div className="grid grid-cols-[32px_32px_32px_1fr_1fr_1fr] border-b border-windows-gray-200">
//         <div className="inline-grid place-content-center w-full">{important && "!"}</div>
//         <div className="inline-grid place-content-center w-full ">
//           <Image
//             src={opened ? envelopeopen : envelopeclosed}
//             width={16}
//             height={16}
//             alt={opened ? "opened" : "closed"}
//           />
//         </div>
//         <div className="inline-grid place-content-center w-full ">
//           {attachment && <Image src={template} width={16} height={16} alt="attachment" className="w-full h-full" />}
//         </div>
//         <div className="inline-grid place-content-center w-full px-4">
//           <p className="truncate">{from}</p>
//         </div>
//         <div className="inline-grid place-content-center w-full px-4">
//           <p className="truncate">{subject}</p>
//         </div>
//         <div className="inline-grid place-content-center w-full px-4">
//           <p className="truncate">{createdAt}</p>
//         </div>
//       </div>
//     </li>
//   );
// }

export default async function Page() {
  const receivedEmails: InboxProps = await getInbox();

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
            <Row key={email.id} {...email} />
          ))}
        </ul>
      </div>
    </>
  );
}
