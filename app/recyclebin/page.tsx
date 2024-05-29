"use client";
import { Window } from "../UI/Window";
import MenuDropdown from "../UI/MenuDropdown";
import Button from "../UI/Button";

export default function page() {
  return (
    <div className="w-full h-[calc(100vh-36px)]">
      <Window className="w-full h-full">
        <Window.Header>Recycle Bin</Window.Header>
        <Window.Toolbar>
          <div className="flex gap-2 ml-1">
            <MenuDropdown menuButton={{ title: "View" }}>
              <Button variant="toolbar" onClick={() => console.log("Tiles")}>
                Tiles
              </Button>
              <Button variant="toolbar" onClick={() => console.log("List")}>
                List
              </Button>
            </MenuDropdown>
            <MenuDropdown menuButton={{ title: "Options" }}>
              <Button variant="toolbar" onClick={() => console.log("Emptied")}>
                Empty Recyclebin
              </Button>
              <Button variant="toolbar" onClick={() => console.log("Restored")}>
                Restore Items
              </Button>
            </MenuDropdown>
          </div>
        </Window.Toolbar>
        <Window.Body className="bg-windows-white p-2 border-b-windows-gray border-r-windows-gray border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#000]"></Window.Body>
        <Window.Footer className="flex gap-1">
          <div className="w-2/3 h-6 mt-1 px-2 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
          <div className="w-1/3 h-6 mt-1 px-2 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
        </Window.Footer>
      </Window>
    </div>
  );
}
