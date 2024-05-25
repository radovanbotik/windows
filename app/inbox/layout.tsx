import Image from "next/image";
import { Window } from "../UI/Window";
import Button from "../UI/Button";
import outlookexpress from "../../public/icons/outlookexpress16.png";
import recyclebinempty from "../../public/icons/recyclebinempty16.png";
import directorycabinet from "../../public/icons/directorycabinet16.png";
import write from "../../public/icons/write16.png";
import address from "../../public/icons/address16.png";
import signatureno from "../../public/icons/signatureno16.png";
import outlooktack from "../../public/icons/outlooktack16.png";
import envelopeclosed from "../../public/icons/envelopeclosed16.png";
import template from "../../public/icons/template16.png";
import Link from "next/link";
import { ReactNode } from "react";

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
    actions: [
      { name: "Inbox", href: "/inbox", icon: write },
      { name: "Sent Items", href: "/inbox/sent-items", icon: directorycabinet },
      { name: "Deleted Items", href: "/inbox/deleted-items", icon: recyclebinempty },
      { name: "Contacts", href: "/inbox/contacts", icon: address },
    ],
  },
  { name: "New search", icon: outlooktack, actions: [] },
];

function Tree() {
  return (
    <div className="flex flex-col gap-4">
      {outlook.map(parent => (
        <div className="flex">
          <div className="mr-2 sm:mr-4 flex-shrink-0">
            <Image
              src={parent.icon}
              alt="parent name"
              width={16}
              height={16}
              className="h-4 w-4 border border-gray-300 bg-white text-gray-300"
            />
          </div>
          <div>
            <h4 className=" font-bold">{parent.name}</h4>
            {parent.actions.map(action => (
              <Link href={action.href} className="mt-2 flex">
                <div className="mr-2 sm:mr-4 flex-shrink-0">
                  <Image
                    src={action.icon}
                    alt={action.name}
                    width={16}
                    height={16}
                    className="h-4 w-4 border border-gray-300 bg-white text-gray-300"
                  />
                </div>
                <div>
                  <h4 className="">{action.name}</h4>
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
    <div className="flex gap-4 p-1 border-b-2 border-b-stone-500">
      {actions.map(action => (
        <button key={action.name} className="leading-none">
          {action.name}
        </button>
      ))}
    </div>
  );
}

function Quicklinks() {
  return (
    <div className="flex p-1 border-b-2 border-b-stone-500">
      {quicklinks.map(link => (
        <Button key={link.name} variant="windows" className="h-8 w-8 flex flex-col">
          <Image src={link.icon} alt={link.name} width={16} height={16} />
        </Button>
      ))}
    </div>
  );
}

function Body({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-windows-gray">
      <div className="bg-windows-white px-1 py-4 sm:p-4">
        <Tree />
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Window className="w-full h-[calc(100vh-34px)]">
      <Window.Header>Inbox</Window.Header>
      <Window.Toolbar>
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
        <div className="w-2/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
        <div className="w-1/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
      </Window.Footer>
    </Window>
  );
}
