import Image from "next/image";
import { Window } from "../UI/Window";
import Button from "../UI/Button";
import outlookexpress from "../../public/icons/outlookexpress16.png";
import recyclebinempty from "../../public/icons/recyclebinempty16.png";
import directorycabinet from "../../public/icons/directorycabinet16.png";
import recyclebinempty48 from "../../public/icons/recyclebinempty48.png";
import briefcase48 from "../../public/icons/briefcase48.png";
import users48 from "../../public/icons/users48.png";
import notepad48 from "../../public/icons/notepad48.png";
import calendar48 from "../../public/icons/calendar48.png";
import write from "../../public/icons/write16.png";
import address from "../../public/icons/address16.png";
import signatureno from "../../public/icons/signatureno16.png";
import outlooktack from "../../public/icons/outlooktack16.png";
import envelopeclosed from "../../public/icons/envelopeclosed16.png";
import template from "../../public/icons/template16.png";
import Link from "next/link";
import { ReactNode } from "react";
import { EB_Garamond } from "next/font/google";
import Icon from "../UI/Icon";

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const actions = [
  {
    name: "File",
  },
  {
    name: "Edit",
  },
  {
    name: "View",
  },
  {
    name: "Tools",
  },
  {
    name: "Help",
  },
];

const quicklinks = [
  {
    name: "Compose Message",
    icon: write,
  },
  // {
  //   name: "Reply To Author",
  //   icon: "",
  // },
  // {
  //   name: "Forward Message",
  //   icon: "",
  // },
  {
    name: "Delete Message",
    icon: signatureno,
  },
  {
    name: "Address Book",
    icon: address,
  },
];

const outlook = [
  {
    name: "Outlooks express",
    icon: outlookexpress,
    href: "/inbox",
    actions: [
      { name: "Inbox", href: "/inbox/inbox?emails=received", icon: write },
      { name: "Sent Items", href: "/inbox/inbox?emails=sent", icon: directorycabinet },
      { name: "Deleted Items", href: "/inbox/inbox?emails=deleted", icon: recyclebinempty },
      { name: "Contacts", href: "/inbox/contacts", icon: address },
    ],
  },
  { name: "New search", icon: outlooktack, href: "#", actions: [] },
];

function Tree() {
  return (
    <div className="flex flex-col gap-2 text-sm tracking-tight">
      {outlook.map(parent => (
        <div className="flex">
          <div className="mr-2 sm:mr-2 flex-shrink-0">
            <Image src={parent.icon} alt="parent name" width={16} height={16} className="h-4 w-4 " />
          </div>
          <div>
            <h4 className="text-nowrap">{parent.name}</h4>
            {parent.actions.map(action => (
              <Link href={action.href} className="mt-2 flex">
                <div className="mr-2 sm:mr-2 flex-shrink-0">
                  <Image
                    src={action.icon}
                    alt={action.name}
                    width={16}
                    height={16}
                    className="h-4 w-4 border border-gray-300 bg-white text-gray-300"
                  />
                </div>
                <div>
                  <h4 className="text-nowrap">{action.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex border-2 border-t-windows-white border-l-windows-white border-b-windows-gray-400 border-r-windows-gray-400">
      {actions.map(action => (
        <button key={action.name} className="leading-none text-sm py-1 px-2 tracking-tight">
          {action.name}
        </button>
      ))}
    </div>
  );
}

function Quicklinks() {
  return (
    <div className="flex gap-4 px-2 border-2 border-t-windows-white border-l-windows-white border-b-windows-gray-400 border-r-windows-gray-400">
      {quicklinks.map(link => (
        <Button key={link.name} className="h-6 w-6 grid place-content-center">
          <Image src={link.icon} alt={link.name} width={16} height={16} />
        </Button>
      ))}
    </div>
  );
}

function Body({ children }: { children: ReactNode }) {
  return (
    <div className={`flex flex-col p-2 sm:flex-row bg-windows-gray-200 gap-1  `}>
      <div className="bg-windows-gray-400 flex flex-col border-2 border-t-black border-l-black border-r-windows-white border-b-windows-white">
        <div className="bg-windows-gray-200  px-2 sm:px-10 border-2 border-t-windows-white border-l-windows-white border-r-black border-b-black">
          <p className="tracking-tight text-center text-sm ">Outlook</p>
        </div>
        <div className="h-full flex flex-row sm:flex-col flex-wrap  justify-around mb-auto">
          <Icon
            name="Inbox (50)"
            href="/inbox"
            icon={template}
            className="text-windows-white capitalize tracking-tight"
          />
          <Icon
            name="Calendar"
            href="/inbox/calendar"
            icon={calendar48}
            className="text-windows-white capitalize tracking-tight"
          />
          <Icon
            name="Contacts"
            href="/inbox/contacts"
            icon={users48}
            className="text-windows-white capitalize tracking-tight"
          />
          <Icon
            name="Tasks"
            href="/inbox/tasks"
            icon={briefcase48}
            className="text-windows-white capitalize tracking-tight"
          />
          <Icon
            name="Notes"
            href="/inbox/notes"
            icon={notepad48}
            className="text-windows-white capitalize tracking-tight"
          />
          <Icon
            name="Recycle Bin"
            href="/inbox/recyclebin"
            icon={recyclebinempty48}
            className="text-windows-white capitalize tracking-tight"
          />
        </div>
        <div className="bg-windows-gray-200 px-2 sm:px-10  border-2 border-t-windows-white border-l-windows-white border-r-black border-b-black">
          <p className="tracking-tight text-center text-sm">Mail</p>
        </div>
        <div className="bg-windows-gray-200 px-2 sm:px-10 border-2 border-t-windows-white border-l-windows-white border-r-black border-b-black">
          <p className="tracking-tight text-center text-sm ">Other</p>
        </div>
      </div>
      <div className="flex-auto w-full h-full flex flex-col gap-2">
        <h3 className={`bg-windows-gray-400 text-white text-4xl px-1 py-3 ${ebGaramond.className} tracking-tight`}>
          Contacts
        </h3>
        <div className="flex-auto flex flex-col sm:flex-row gap-2">
          <div className="overscroll-x-contain bg-windows-white p-1 px-4 border-2 border-t-black border-l-black border-r-windows-white border-b-windows-white shrink-0">
            <Tree />
          </div>
          <div className="flex flex-col bg-windows-white h-full w-full border-2 border-t-black border-l-black border-r-windows-white border-b-windows-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Window className="w-full h-[calc(100vh-34px)]">
      <Window.Header>Inbox</Window.Header>
      <Window.Toolbar className="px-0 py-0">
        <Navbar />
        <Quicklinks />
      </Window.Toolbar>
      <Window.Body
        variant="window"
        className="bg-windows-white  border-b-windows-gray border-r-windows-gray border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#000]"
      >
        <Body>{children}</Body>
      </Window.Body>
      <Window.Footer className="flex gap-1">
        <div className="w-2/3 h-5  bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
        <div className="w-1/3 h-5  bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
      </Window.Footer>
    </Window>
  );
}
