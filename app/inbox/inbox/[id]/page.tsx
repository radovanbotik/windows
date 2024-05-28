import { getEmail } from "@/app/lib/inboxdata";
import { notFound } from "next/navigation";

type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params, searchParams }: PageProps) {
  const email = await getEmail(Number(params.id));
  if (!email) return notFound();

  return (
    <>
      <div className="p-2 sm:p-4 bg-windows-gray flex flex-col gap-2">
        <div className="grid grid-cols-[10ch_1fr]">
          <span>From:</span>
          <span>{email?.from}</span>
        </div>
        <div className="grid grid-cols-[10ch_1fr]">
          <span>Sent:</span>
          <span>{email?.createdAt}</span>
        </div>
        <div className="grid grid-cols-[10ch_1fr]">
          <span>To:</span>
          <span>{email?.to}</span>
        </div>
        <div className="grid grid-cols-[10ch_1fr]">
          <span>Subject:</span>
          <span className="text-black text-md px-1  bg-windows-white border-2 border-b-[#FFFFFF] border-l-[#808080] border-t-[#808080] border-r-[#FFFFFF] shadow-[1px_1px_0px_0px_#0000007f]">
            {email?.subject}
          </span>
        </div>
      </div>

      <div className="flex-auto text-black text-md px-1  bg-windows-white border-2 border-b-[#FFFFFF] border-l-[#808080] border-t-[#808080] border-r-[#FFFFFF] shadow-[1px_1px_0px_0px_#0000007f]">
        <p>{email?.body}</p>
      </div>
    </>
  );
}
