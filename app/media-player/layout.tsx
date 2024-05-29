import { ReactNode } from "react";
import { Window } from "../UI/Window";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <Window className="w-full h-full">
      <Window.Header>Media Player</Window.Header>
      <Window.Toolbar></Window.Toolbar>
      <Window.Body className="bg-windows-white p-2 border-b-windows-gray border-r-windows-gray border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#000]">
        <div className="w-full h-full gap-4 px-2">{children}</div>
      </Window.Body>
      <Window.Footer className="flex gap-1">
        <div className="w-2/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
        <div className="w-1/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
      </Window.Footer>
    </Window>
  );
}
