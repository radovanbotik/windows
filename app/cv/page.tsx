"use client";
import { Window } from "../UI/Window";
import document16 from "../../public/icons/document16.png";
import floppy16 from "../../public/icons/floppy16.png";
import print16 from "../../public/icons/print16.png";
import download16 from "../../public/icons/download16.png";
import me from "../../public/images/me.jpg";
import Button from "../UI/Button";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Roboto, Fira_Sans } from "next/font/google";
import localFont from "next/font/local";

import clsx from "clsx";
import Select from "../UI/Select";
import { Font, Size } from "../lib/types";
import ToolbarMenu from "../UI/ToolbarMenu";

const actions = [
  {
    name: "File",
    actions: [
      {
        name: "New Document",
        href: "#",
      },
      {
        name: "Save Document",
        href: "#",
      },
      {
        name: "Download Document",
        href: "#",
      },
    ],
  },
  {
    name: "Edit",
    href: "#",
    actions: [
      {
        name: "Download",
        href: "#",
      },
    ],
  },
  {
    name: "View",
    href: "#",
    actions: [
      {
        name: "Display as book",
        href: "#",
      },
    ],
  },
  {
    name: "Tools",
    href: "#",
    actions: [
      {
        name: "Start Drawing",
        href: "#",
      },
    ],
  },
  {
    name: "Help",
    href: "#",
    actions: [
      {
        name: "Disable Tooltips",
        href: "#",
      },
    ],
  },
];

const shortcuts = [
  {
    name: "New File",
    icon: document16,
    tooltip: "Create a new file",
  },
  {
    name: "Save File",
    icon: floppy16,
    tooltip: "Save File",
  },
  {
    name: "Download File",
    icon: download16,
    tooltip: "Download File",
  },
  {
    name: "Print File",
    icon: print16,
    tooltip: "Print File",
    onClick: () => window.print(),
  },
  // {
  //   name: "Display Before Print",
  //   icon: fileset16,
  //   tooltip: "Display Before Printing",
  // },
];

const msSansSerif = localFont({ src: "../../public/fonts/MS_Sans_Serif.ttf" });
const roboto = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"], style: ["normal", "italic"] });
const firaSans = Fira_Sans({ weight: ["400", "700", "800", "900"], subsets: ["latin"], style: ["normal", "italic"] });

function Navbar() {
  return (
    <div className="flex gap-4 p-1 border-b-2 border-b-stone-500">
      {actions.map(action => (
        <ToolbarMenu key={action.name} {...action} className="leading-none">
          {action.name}
        </ToolbarMenu>
      ))}
    </div>
  );
}

function Toolbar() {
  return (
    <div className="flex p-1 border-b-2 border-b-stone-500">
      {shortcuts.map(shortcut => (
        <Button
          key={shortcut.name}
          tooltip={shortcut.tooltip}
          onClick={shortcut.onClick}
          variant="windows"
          className="h-8 w-8"
        >
          <Image src={shortcut.icon} alt={shortcut.name} width={16} height={16} />
        </Button>
      ))}
    </div>
  );
}

function TextPreferences({
  toggleBold,
  toggleItalic,
  toggleUnderline,
  font,
  size,
  fonts,
  sizes,
  handleChangeFont,
  handleChangeSize,
  bold,
  italics,
  underlined,
}: {
  font: Font;
  fonts: Font[];
  size: Size;
  sizes: Size[];
  handleChangeFont: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleChangeSize: (e: ChangeEvent<HTMLSelectElement>) => void;
  toggleBold: () => void;
  toggleItalic: () => void;
  toggleUnderline: () => void;
  bold: boolean;
  italics: boolean;
  underlined: boolean;
}) {
  return (
    <div className="flex flex-wrap p-1 gap-2 items-center ">
      <div className="flex gap-2 flex-wrap ">
        <Select options={fonts} value={font} onChange={handleChangeFont} />
        <Select options={sizes} value={size} onChange={handleChangeSize} />
      </div>
      <div className="flex ">
        <Button
          variant="windows"
          className="font-black h-8 w-8"
          tooltip={bold ? "remove Bold" : "set to Bold"}
          onClick={toggleBold}
        >
          B
        </Button>
        <Button
          variant="windows"
          className="font-black h-8 w-8"
          tooltip={italics ? "remove Italic" : "set to Italic"}
          onClick={toggleItalic}
        >
          <span className="italic ">I</span>
        </Button>
        <Button
          variant="windows"
          className=" font-black underline h-8 w-8"
          tooltip={underlined ? "remove Underlined" : "set to Underlined"}
          onClick={toggleUnderline}
        >
          U
        </Button>
      </div>
    </div>
  );
}

function Document({
  font,
  size,
  bold,
  italics,
  underlined,
}: {
  bold: boolean;
  italics: boolean;
  underlined: boolean;
  font: Font;
  size: Size;
}) {
  return (
    <div className={clsx("sm:flex gap-4  overflow-y-auto")}>
      <div className="sm:w-1/3  flex flex-col">
        <div>
          <div className="pb-1 sm:pb-6">
            <div>
              {/* image */}
              <div className="relative h-40 sm:h-56">
                <Image className="absolute h-full w-full object-cover" src={me} alt="me" />
              </div>
              {/* info */}
              <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                <div className="sm:flex-1">
                  {/* email */}
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Radovan Botik</h3>
                      {/* <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                      <span className="sr-only">Online</span>
                    </span> */}
                    </div>
                    <p className="text-sm text-gray-500">radovanbotik@gmail.com</p>
                  </div>
                  {/* about */}
                  <div className="mt-6">
                    <dt className={"text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"}>About</dt>
                    <dd
                      className={clsx(
                        size && size.value,
                        bold && "font-black",
                        italics && "italic",
                        underlined && "underline",
                        font && font.font.className,
                        "mt-1 text-gray-900 sm:col-span-2"
                      )}
                    >
                      <p>
                        Aspiring Frontend Developer with a solid foundation in JavaScript, React, and Next.js. Seeking
                        opportunities to leverage my skills and passion for frontend development.
                      </p>
                    </dd>
                  </div>
                  {/* Contact */}
                  {/* <div className="mt-5 space-y-1">
                    <p className="text-sm text-gray-500">
                      LinkedIn:{" "}
                      <a href="https://www.linkedin.com/in/radovan-botik/">
                        https://www.linkedin.com/in/radovan-botik/
                      </a>{" "}
                    </p>
                    <p className="text-sm text-gray-500">
                      Telephone <a href="tel:+421910931580">+421910931580</a>
                    </p>
                  </div> */}
                  {/* CTA */}
                  {/* <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                    <a
                      href="mailto:radovanbotik@gmail.com"
                      className="inline-flex w-full flex-shrink-0 items-center justify-center  bg-windows-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1"
                    >
                      Message
                    </a>
                    <a
                      href="tel:+421910931580"
                      className="inline-flex w-full flex-1 items-center justify-center  bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Call
                    </a>
                  </div> */}
                  {/* achievements */}
                  <div className="mt-6">
                    <dt className={"text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"}>
                      Notable Achievements
                    </dt>
                    <dd
                      className={clsx(
                        size && size.value,
                        bold && "font-black",
                        italics && "italic",
                        underlined && "underline",
                        font && font.font.className,
                        "mt-1 text-gray-900 sm:col-span-2"
                      )}
                    >
                      Awareded "Agent of the Month" thanks to excellent results at AT&T.
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-2/3">
        <div className="pb-5 pt-5 sm:px-0 sm:pt-0">
          <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
            {/* skills */}
            <div className="flex justify-between lg:justify-start gap-4 lg:gap-10 flex-wrap ">
              {/* frontend */}
              <div>
                <dt className={"text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"}>Frontend </dt>
                <dd
                  className={clsx(
                    size && size.value,
                    bold && "font-black",
                    italics && "italic",
                    underlined && "underline",
                    font && font.font.className,
                    "mt-1 text-gray-900 sm:col-span-2"
                  )}
                >
                  Javascript ES6+ & Typescript
                </dd>
                <dd
                  className={clsx(
                    size && size.value,
                    bold && "font-black",
                    italics && "italic",
                    underlined && "underline",
                    font && font.font.className,
                    "mt-1 text-gray-900 sm:col-span-2"
                  )}
                >
                  React & Next.js
                </dd>
                <dd
                  className={clsx(
                    size && size.value,
                    bold && "font-black",
                    italics && "italic",
                    underlined && "underline",
                    font && font.font.className,
                    "mt-1 text-gray-900 sm:col-span-2"
                  )}
                >
                  Tailwind / SASS / CSS3
                </dd>
              </div>
              {/* backend */}
              <div>
                <dt className={"text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"}>Backend </dt>
                <dd
                  className={clsx(
                    size && size.value,
                    bold && "font-black",
                    italics && "italic",
                    underlined && "underline",
                    font && font.font.className,
                    "mt-1 text-gray-900 sm:col-span-2"
                  )}
                >
                  Node, Express.js
                </dd>
                <dd
                  className={clsx(
                    size && size.value,
                    bold && "font-black",
                    italics && "italic",
                    underlined && "underline",
                    font && font.font.className,
                    "mt-1 text-gray-900 sm:col-span-2"
                  )}
                >
                  Mongo.db, PostgresSQL
                </dd>
              </div>
              {/* other skills */}
              <div>
                <dt className={"text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"}>Other skills </dt>
                <dd
                  className={clsx(
                    size && size.value,
                    bold && "font-black",
                    italics && "italic",
                    underlined && "underline",
                    font && font.font.className,
                    "mt-1 text-gray-900 sm:col-span-2"
                  )}
                >
                  Adobe Photoshop
                </dd>
                <dd
                  className={clsx(
                    size && size.value,
                    bold && "font-black",
                    italics && "italic",
                    underlined && "underline",
                    font && font.font.className,
                    "mt-1 text-gray-900 sm:col-span-2"
                  )}
                >
                  Git & Github
                </dd>
              </div>
            </div>
            {/* languages */}
            <div>
              <dt className={"text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"}>Languages</dt>
              <dd
                className={clsx(
                  size && size.value,
                  bold && "font-black",
                  italics && "italic",
                  underlined && "underline",
                  font && font.font.className,
                  "mt-1 text-gray-900 sm:col-span-2"
                )}
              >
                English - Upper Intermediate B2
              </dd>
              <dd
                className={clsx(
                  size && size.value,
                  bold && "font-black",
                  italics && "italic",
                  underlined && "underline",
                  font && font.font.className,
                  "mt-1 text-gray-900 sm:col-span-2"
                )}
              >
                Slovak - Native Speaker C1
              </dd>
            </div>
            {/* courses */}
            <div className="">
              <dt className={"text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"}>Courses</dt>
              <dd
                className={clsx(
                  size && size.value,
                  bold && "font-black",
                  italics && "italic",
                  underlined && "underline",
                  font && font.font.className,
                  "mt-1 text-gray-900 sm:col-span-2"
                )}
              >
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="https://www.udemy.com/certificate/UC-192ffbd0-401d-42d7-b0a2-1483ef07114e/">JavaScript</a>
                  </li>
                  <li>
                    <a href="https://www.udemy.com/certificate/UC-145a8464-35d5-4780-bdda-5f06d100db40/">
                      Git & GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.udemy.com/certificate/UC-05c7d9be-f243-4a2b-b2a8-717e4efa597c/">
                      React & TypeScript
                    </a>
                  </li>
                  <li>
                    <a href="https://www.udemy.com/certificate/UC-4d17d0b8-f5a4-4283-bca6-cccca798f179/">
                      MySQL Bootcamp
                    </a>
                  </li>
                  <li>
                    <a href="https://www.udemy.com/course/nodejs-tutorial-and-projects-course/">NodeJS</a>
                  </li>
                </ul>
              </dd>
            </div>
            {/* experience */}
            <div>
              <dt className={"text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"}>Experience</dt>
              <dd
                className={clsx(
                  size && size.value,
                  bold && "font-black",
                  italics && "italic",
                  underlined && "underline",
                  font && font.font.className,
                  "mt-1 text-gray-900 sm:col-span-2"
                )}
              >
                Technical Care Representative at AT&T
              </dd>
              <dd
                className={clsx(
                  size && size.value,
                  bold && "font-black",
                  italics && "italic",
                  underlined && "underline",
                  font && font.font.className,
                  "mt-2 text-gray-900 sm:col-span-2"
                )}
              >
                <time dateTime="2023-06-16">June 2023 - present</time>
              </dd>

              <ul
                className={clsx(
                  size && size.value,
                  bold && "font-black",
                  italics && "italic",
                  underlined && "underline",
                  font && font.font.className,
                  "mt-2 list-disc text-gray-900 sm:col-span-2 ml-4"
                )}
              >
                <li>Handled a range of issues related to AT&T products & services</li>
                <li>Technical advisory and device troubleshooting</li>
                <li>Strong command of internal tools and exceptional knowledge of products</li>
              </ul>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
const fonts: Font[] = [
  {
    label: "MS Sans Serif",
    font: msSansSerif,
    value: "mssansserif",
  },
  {
    label: "Roboto",
    font: roboto,
    value: "roboto",
  },
  {
    label: "Fira Sans",
    font: firaSans,
    value: "firasans",
  },
];

const sizes: Size[] = [
  {
    label: "12",
    value: "text-xs",
  },
  {
    label: "14",
    value: "text-sm",
  },
  {
    label: "16",
    value: "text-base",
  },
  {
    label: "18",
    value: "text-lg",
  },
  {
    label: "20",
    value: "text-xl",
  },
];
export default function page() {
  const [bold, setBold] = useState(false);
  const [italics, setItalics] = useState(false);
  const [underlined, setUnderlined] = useState(false);
  const [font, setFont] = useState(fonts[0]);
  const [size, setSize] = useState(sizes[1]);

  function handleChangeFont(e: ChangeEvent<HTMLSelectElement>) {
    const font = fonts.find(option => option.value === e.target.value);
    if (font) setFont(font);
    return;
  }
  function handleChangeSize(e: ChangeEvent<HTMLSelectElement>) {
    const size = sizes.find(option => option.value === e.target.value);
    if (size) setSize(size);
    return;
  }
  function toggleBold() {
    setBold(prev => !prev);
  }
  function toggleItalic() {
    setItalics(prev => !prev);
  }
  function toggleUnderline() {
    setUnderlined(prev => !prev);
  }

  return (
    <Window className="w-full h-[calc(100vh-34px)]">
      <Window.Header>CV</Window.Header>
      <Window.Toolbar>
        <Navbar />
        <Toolbar />
        <TextPreferences
          size={size}
          font={font}
          fonts={fonts}
          sizes={sizes}
          handleChangeFont={handleChangeFont}
          handleChangeSize={handleChangeSize}
          bold={bold}
          italics={italics}
          underlined={underlined}
          toggleBold={toggleBold}
          toggleItalic={toggleItalic}
          toggleUnderline={toggleUnderline}
        />
      </Window.Toolbar>
      <Window.Body
        variant="window"
        className="bg-windows-white p-2 border-b-windows-gray border-r-windows-gray border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#000]  overflow-hidden"
      >
        <Document font={font} size={size} bold={bold} italics={italics} underlined={underlined} />
      </Window.Body>
      <Window.Footer className="flex gap-1">
        <div className="w-2/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
        <div className="w-1/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
      </Window.Footer>
    </Window>
  );
}
