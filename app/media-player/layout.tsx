import { ReactNode } from "react";
import ToolbarMenu from "../UI/ToolbarMenu";
import { Window } from "../UI/Window";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-[calc(100vh-34px)]">
      <Window className="w-full h-full">
        <Window.Header>My Computer</Window.Header>
        <Window.Toolbar>
          toolbar
          {/* <ToolbarMenu actions={actions}>View</ToolbarMenu>
        <div className="px-2 bg-windows-white">{pathname}</div> */}
        </Window.Toolbar>
        <Window.Body className="bg-windows-white p-2 border-b-windows-gray border-r-windows-gray border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#000]">
          <div className="w-full h-full flex  gap-4 flex-wrap content-start px-2">{children}</div>
        </Window.Body>
        <Window.Footer className="flex gap-1">
          <div className="w-2/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
          <div className="w-1/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
        </Window.Footer>
      </Window>
    </div>
  );
}
