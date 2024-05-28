"use client";
import Image from "next/image";
import sndvoloutput32 from "../../public/icons/sndvoloutput32.png";
import Button from "./Button";
import useTime from "../hooks/useTime";
import { usePathname } from "next/navigation";
import { icons } from "./Layout";
import MenuDropdown from "./MenuDropdown";
import shutdown48 from "../../public/icons/shutdown48.png";
import { useGlobalContext } from "../context";

export default function Taskbar() {
  const pathname = usePathname();
  const time = useTime();
  let icon = icons.find(icon => icon.href === pathname.slice(1, pathname.length));

  const { setXPTheme, xpTheme } = useGlobalContext();

  return (
    <div className="bg-windows-gray-200 border-t-2 border-t-windows-white ">
      <div className="flex px-1 h-8 items-center">
        <MenuDropdown menuButton={{ title: "start" }} variant="start">
          <Button className="px-2 py-1 text-sm flex gap-2 items-center select-none" onClick={() => setXPTheme()}>
            <Image src={shutdown48} alt="shutdown system" width={48} height={48} />
            <span>{xpTheme ? "Classic Theme" : "XP Theme"}</span>
          </Button>
          <Button className="px-2 py-1 text-sm flex gap-2 items-center select-none">
            <Image src={shutdown48} alt="shutdown system" width={48} height={48} />
            <span>Shutdown</span>
          </Button>
        </MenuDropdown>
        {icon && (
          <div className="flex-auto">
            <Button variant="systemPushed" className="flex gap-1 items-center">
              <div className="p-1 w-6 h-6">
                <Image src={icon.icon} alt="logo" aria-hidden width={32} height={32} />
              </div>
              <span className="text-sm font-bold leading-none align-middle">{icon.name}</span>
            </Button>
          </div>
        )}
        <div className="ml-auto">
          <div className="flex items-center px-1  gap-1  border-2 border-b-windows-white border-r-windows-white border-b-2 border-t-[#808080] border-l-[#808080]">
            <>
              <div className="p-1 w-6 h-6">
                <Image src={sndvoloutput32} alt="logo" aria-hidden width={32} height={32} />
              </div>
            </>
            <span className="leading-none text-sm">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
