import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import envelopeclosed from "../../../public/icons/envelopeclosed16.png";
import template from "../../../public/icons/template16.png";
import { getReceivedEmails, getSentEmails, getDeletedEmails } from "../../lib/inboxdata";
import Button from "../../UI/Button";
import Row from "../common/Row";

type InboxProps = Prisma.PromiseReturnType<typeof getReceivedEmails>;
type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params, searchParams }: PageProps) {
  const emailType = searchParams.emails;

  let receivedEmails: InboxProps | null = null;
  if (emailType === "received") receivedEmails = await getReceivedEmails();
  if (emailType === "sent") receivedEmails = await getSentEmails();
  if (emailType === "deleted") receivedEmails = await getDeletedEmails();

  if (!receivedEmails) return notFound();
  // return (
  //   <div>
  //     <div className="p-2">
  //       <h2 className="text-7xl font-bold">Outlook</h2>
  //     </div>
  //     <div className="p-2 bg-windows-blue">
  //       <h3 className="text-4xl font-bold indent-12 text-white">Express</h3>
  //     </div>
  //   </div>
  // );
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
