"use client";
import Image from "next/image";
import sndvoloutput32 from "../../public/icons/sndvoloutput32.png";
import Button from "./Button";
import useTime from "../hooks/useTime";
import { usePathname } from "next/navigation";
import { icons } from "./Layout";
import MenuDropdown from "./MenuDropdown";
import monitorwindows32 from "../../public/icons/monitorwindows32.png";
import monitorblue32 from "../../public/icons/monitorblue32.png";
import monitorblack32 from "../../public/icons/monitorblack32.png";
import { useGlobalContext } from "../context";
import Icon from "./Icon";
import msie16 from "../../public/icons/msie16.png";
import mailbox16 from "../../public/icons/mailbox16.png";
import desktop16 from "../../public/icons/desktop16.png";
import Divider from "./Divider";

export default function Taskbar() {
  const pathname = usePathname();
  const time = useTime();
  let icon = icons.find(icon => icon.href.split("/")[1] === pathname.split("/")[1]);

  const { setXPTheme, xpTheme } = useGlobalContext();

  function Pinned() {
    return (
      <div className="flex gap-2">
        <Icon iconSize="small" icon={desktop16} href={"/"} name="desktop" showText={false} />
        <Icon iconSize="small" icon={msie16} href={"#"} name="internet explorer" showText={false} />
        <Icon iconSize="small" icon={mailbox16} href={"/inbox"} name="mailbox" showText={false} />
      </div>
    );
  }

  return (
    <div className="bg-windows-gray-200 border-2 border-r-black border-t-windows-white border-l-windows-white border-b-windows-gray-400">
      <div className="flex h-8 items-center gap-2">
        <MenuDropdown menuButton={{ title: "start" }} variant="start">
          <Button className="px-2 py-1 text-sm flex gap-2 items-center " onClick={() => setXPTheme()}>
            <Image src={monitorblack32} alt="shutdown system" width={32} height={32} />
            <span>Sleep</span>
          </Button>
          <Button className="px-2 py-1 text-sm flex gap-2 items-center " onClick={() => setXPTheme()}>
            <Image src={monitorblue32} alt="shutdown system" width={32} height={32} />
            <span>{xpTheme ? "Classic Theme" : "XP Theme"}</span>
          </Button>
          <Button className="px-2 py-1 text-sm flex gap-2 items-center ">
            <Image src={monitorwindows32} alt="shutdown system" width={32} height={32} />
            <span>Shutdown</span>
          </Button>
        </MenuDropdown>
        <Divider orientation="vertical" />
        <Pinned />
        <Divider orientation="vertical" />
        {icon && (
          <div className="flex-auto">
            <Button variant="systemPushed" className="flex gap-1 items-center w-32">
              <div className="p-1 w-6 h-6">
                <Image src={icon.icon} alt="logo" aria-hidden width={32} height={32} />
              </div>
              <span className="text-xs font-bold leading-none">{icon.name}</span>
            </Button>
          </div>
        )}
        {icon && <Divider orientation="vertical" />}
        <div className="ml-auto h-full">
          <div className="h-full grid items-center justify-end px-1  gap-1  border-2 border-b-windows-white border-r-windows-white border-b-2 border-t-[#808080] border-l-[#808080]">
            {/* <>
              <div className="p-1 w-6 h-6">
                <Image src={sndvoloutput32} alt="logo" aria-hidden width={32} height={32} />
              </div>
            </> */}
            <p className="leading-none text-sm translate-y-[0.5px]">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
