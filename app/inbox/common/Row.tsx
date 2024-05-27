"use client";
import Image from "next/image";
import envelopeclosed from "../../../public/icons/envelopeclosed16.png";
import envelopeopen from "../../../public/icons/envelopeopen16.png";
import template from "../../../public/icons/template16.png";
import Link from "next/link";

//to fix

type EmailProps = {
  createdAt: string;
  id: number;
  from: string;
  to: string;
  subject: string;
  body: string;
  important: boolean;
  opened: boolean;
  attachment: boolean;
  authorId: number | null;
  deleted: boolean;
};

export default function Row({ id, from, subject, createdAt, important, opened, attachment, deleted }: EmailProps) {
  return (
    <li className="cursor-pointer">
      <Link href={`inbox/${id}`}>
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
      </Link>
    </li>
  );
}
