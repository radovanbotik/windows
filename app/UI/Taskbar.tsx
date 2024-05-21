"use client";
import Image from "next/image";
import sndvoloutput32 from "../../public/icons/sndvoloutput32.png";
import Button from "./Button";
import useTime from "../hooks/useTime";
import { usePathname } from "next/navigation";
import { icons } from "./Layout";
import Dropdown from "./Dropdown";

export default function Taskbar() {
  const pathname = usePathname();
  const time = useTime();
  let icon = icons.find(icon => icon.href === pathname.slice(1, pathname.length));
  return (
    <div className="bg-windows-gray border-t-2 border-t-windows-white ">
      <div className="flex px-1 h-8 items-center">
        <Dropdown className="mr-2" />
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
          {/* shadow-[inset_2px_2px_0px_0px_#8E888E] */}
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
