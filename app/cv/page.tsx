"use client";
import { Window } from "../UI/Window";
import document16 from "../../public/icons/document16.png";
import fileset16 from "../../public/icons/floppy16.png";
import print16 from "../../public/icons/print16.png";
import download16 from "../../public/icons/download16.png";
import me from "../../public/images/me.jpg";
import Button from "../UI/Button";
import Image from "next/image";

import clsx from "clsx";
import Select from "../UI/Select";
import { useDocContext } from "./context";
import { fontLookup, sizeLookup, sizes, fonts } from "../lib/worddata";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import MenuDropdown from "../UI/MenuDropdown";

const shortcuts = [
  {
    name: "New File",
    icon: document16,
    tooltip: "Create a new file",
  },
  // {
  //   name: "Save File",
  //   icon: floppy16,
  //   tooltip: "Save File",
  // },
  {
    name: "Download File",
    icon: download16,
    tooltip: "Download File",
    href: "/radovan_botik_en.pdf",
    download: true,
  },
  {
    name: "Print File",
    icon: print16,
    tooltip: "Print File",
    onClick: () => window.print(),
  },
];

function Navbar() {
  return (
    <div className="space-x-4  border-b-2 border-b-stone-500">
      <MenuDropdown menuButton={{ title: "File" }}>
        <Button variant="toolbar">New Document</Button>
        <a className="px-1 text-sm" href="/radovan_botik_en.pdf" download={true}>
          Download Document
        </a>
      </MenuDropdown>
      <MenuDropdown menuButton={{ title: "View" }}>
        <Button variant="toolbar" href="/radovan_botik_en.pdf">
          View Before print
        </Button>
      </MenuDropdown>
      <MenuDropdown menuButton={{ title: "Tools" }}>
        <Button variant="toolbar">Start drawing</Button>
      </MenuDropdown>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="flex px-1 border-b-2 border-b-stone-500">
      {shortcuts.map(shortcut => (
        <Button
          key={shortcut.name}
          tooltip={shortcut.tooltip}
          onClick={shortcut.onClick}
          variant="windows"
          className="h-8 w-8"
          href={shortcut.href ?? undefined}
          download={shortcut.download}
        >
          <Image src={shortcut.icon} alt={shortcut.name} width={16} height={16} />
        </Button>
      ))}
    </div>
  );
}

function TextPreferences() {
  const context = useDocContext();

  return (
    <div className="flex flex-wrap gap-2 items-center ">
      <div className="flex gap-2 flex-wrap ">
        <Select options={fonts} value={context.font} onChange={context?.changeFont} />
        <Select options={sizes} value={context.size} onChange={context?.changeSize} />
      </div>
      <div className="flex ">
        <Button
          variant="windows"
          className="font-black h-8 w-8"
          tooltip={context.bold ? "remove Bold" : "set to Bold"}
          onClick={context.toggleBold}
        >
          B
        </Button>
        <Button
          variant="windows"
          className="font-black h-8 w-8"
          tooltip={context.italics ? "remove Italic" : "set to Italic"}
          onClick={context.toggleItalic}
        >
          <span className="italic ">I</span>
        </Button>
        <Button
          variant="windows"
          className=" font-black underline h-8 w-8"
          tooltip={context.underlined ? "remove Underlined" : "set to Underlined"}
          onClick={context.toggleUnderline}
        >
          U
        </Button>
      </div>
    </div>
  );
}

function Cell({ title, body }: ComponentPropsWithoutRef<"div"> & { title: string; body: ReactNode }) {
  const { bold, italics, underlined, size, font } = useDocContext();
  const fontSize = sizeLookup.filter(object => object.size === Number(size))[0].value;
  const fontFamily = fontLookup.filter(object => object.font === font)[0].value.className;
  const isBold = bold && "font-black";
  const isItalic = italics && "italic";
  const isUnderline = underlined && "underline";
  return (
    <div className="mt-6">
      <dt className={"text-sm font-medium text-gray-500  sm:flex-shrink-0"}>{title}</dt>
      <dd className={clsx(isBold, isItalic, isUnderline, fontSize, fontFamily, "mt-1 text-gray-900 sm:col-span-2")}>
        {body}
      </dd>
    </div>
  );
}

function Document() {
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
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Radovan Botik</h3>
                      {/* <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                      <span className="sr-only">Online</span>
                    </span> */}
                    </div>
                    <p className="text-sm text-gray-500">radovanbotik@gmail.com</p>
                  </div>
                  <Cell
                    title="About"
                    body="Aspiring Frontend Developer with a solid foundation in JavaScript, React, and Next.js. Seeking opportunities to leverage my skills and passion for frontend development."
                  />
                  <Cell
                    title="Notable Achievements"
                    body='Awareded "Agent of the Month" thanks to excellent results at AT&T.'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-2/3">
        <div className="pb-5 pt-5 sm:px-0 sm:pt-0">
          <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
            <div className="flex justify-between lg:justify-start gap-4 lg:gap-10 flex-wrap ">
              <Cell
                title="Frontend"
                body={
                  <>
                    <p>Javascript ES6+ & Typescript</p>
                    <p>React & Next.js</p>
                    <p>Tailwind / SASS / CSS3</p>
                  </>
                }
              />
              <Cell
                title="Backend"
                body={
                  <>
                    <p>Node, Express.js</p>
                    <p>Mongo.db, SQL, Firebase</p>
                    <p>Tailwind / SASS / CSS3</p>
                  </>
                }
              />
              <Cell
                title="Other Skills & Proficiencies"
                body={
                  <>
                    <p>HTTP, REST, API</p>
                    <p>Git & Github</p>
                    <p>Adobe Photoshop</p>
                  </>
                }
              />
            </div>
            <Cell
              title="Languages"
              body={
                <>
                  <p>English - Upper Intermediate B2</p>
                  <p>Slovak - Native Speaker C1</p>
                </>
              }
            />
            <Cell
              title="Courses"
              body={
                <div className="flex flex-col gap-1">
                  <a href="https://www.udemy.com/certificate/UC-05c7d9be-f243-4a2b-b2a8-717e4efa597c/">
                    React & TypeScript
                  </a>
                  <a href="https://www.udemy.com/certificate/UC-192ffbd0-401d-42d7-b0a2-1483ef07114e/">JavaScript</a>
                  <a href="https://www.udemy.com/certificate/UC-145a8464-35d5-4780-bdda-5f06d100db40/">Git & GitHub</a>
                  <a href="https://www.udemy.com/certificate/UC-4d17d0b8-f5a4-4283-bca6-cccca798f179/">
                    MySQL Bootcamp
                  </a>
                  <a href="https://www.udemy.com/course/nodejs-tutorial-and-projects-course/">NodeJS</a>
                </div>
              }
            />
            <Cell
              title="Experience"
              body={
                <>
                  <p>Technical Care Representative at AT&T</p>
                  <p>
                    <time dateTime="2023-06-16">June 2023 - present</time>
                  </p>
                  <ul className={"mt-2 list-disc text-gray-900 sm:col-span-2 ml-4"}>
                    <li>Handled a range of issues related to AT&T products & services</li>
                    <li>Technical advisory and device troubleshooting</li>
                    <li>Strong command of internal tools and exceptional knowledge of products</li>
                  </ul>
                </>
              }
            />
          </dl>
        </div>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <Window className="w-full h-[calc(100vh-36px)]">
      <Window.Header>CV</Window.Header>
      <Window.Toolbar>
        <Navbar />
        {/* <Toolbar /> */}
        <TextPreferences />
      </Window.Toolbar>
      <Window.Body
        variant="window"
        className="bg-windows-white p-2 border-b-windows-gray border-r-windows-gray border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#000]  overflow-hidden"
      >
        <Document />
      </Window.Body>
      <Window.Footer className="flex gap-1">
        <div className="w-2/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
        <div className="w-1/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
      </Window.Footer>
    </Window>
  );
}
