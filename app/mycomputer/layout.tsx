"use client";
import { ReactNode, useState } from "react";
import { Window } from "../UI/Window";
import { usePathname } from "next/navigation";

export default function layout({ children }: { children: ReactNode }) {
  const actions = [
    {
      name: "Hide URL",
      href: "#",
    },
  ];
  const pathname = usePathname();

  return (
    <Window className="h-full w-full">
      <Window.Header>My Computer</Window.Header>
      <Window.Toolbar>
        <div className="py-1 px-1 flex">
          {/* <div className="w-20"></div> */}
          <div className="flex-auto text-black text-md px-1  bg-windows-white border-2 border-b-[#FFFFFF] border-l-[#808080] border-t-[#808080] border-r-[#FFFFFF] shadow-[1px_1px_0px_0px_#0000007f]">
            {pathname}
          </div>
        </div>
      </Window.Toolbar>
      <Window.Body className="bg-windows-white p-2 border-b-windows-gray border-r-windows-gray border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#000]">
        <div className="w-full h-full flex  gap-4 flex-wrap content-start px-2">{children}</div>
      </Window.Body>
      <Window.Footer className="flex gap-1">
        <div className="w-2/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
        <div className="w-1/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
      </Window.Footer>
    </Window>
  );
}
