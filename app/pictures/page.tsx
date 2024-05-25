"use client";
import { Window } from "../UI/Window";
import market from "../../public/pictures/christmassmarket.jpeg";
import krakow from "../../public/pictures/krakow.jpg";
import mafi2 from "../../public/pictures/mafi2.jpg";
import rado from "../../public/pictures/rado.jpg";
import szeged from "../../public/pictures/szeged.jpg";
import vienna from "../../public/pictures/vienna.jpg";
import Image, { StaticImageData } from "next/image";
import { ComponentPropsWithoutRef, useState } from "react";
import clsx from "clsx";
import Modal from "../UI/Modal";
import MenuDropdown from "../UI/MenuDropdown";
import Button from "../UI/Button";

const pictures = [
  {
    name: "market",
    src: market,
  },
  {
    name: "krakow",
    src: krakow,
  },
  {
    name: "mafi2",
    src: mafi2,
  },
  {
    name: "rado",
    src: rado,
  },
  {
    name: "szeged",
    src: szeged,
  },
  {
    name: "vienna",
    src: vienna,
  },
];

function Tile({
  src,
  name,
  variant,
  handleClick,
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  src: StaticImageData;
  name: string;
  variant: "list" | "tiles";
  handleClick: ({ name, src }: { name: string; src: StaticImageData }) => void;
}) {
  const variants = {
    list: {
      button: "flex items-center gap-2",
      image: "flex place-content-center h-8 w-8 p-1",
    },
    tiles: {
      button: "flex flex-col  justify-center items-center text-center",
      image: "flex place-content-center h-24 w-20 p-1",
    },
  };

  return (
    <button className={clsx(variants[variant].button)} onClick={() => handleClick({ name: name, src: src })} {...props}>
      <div className={clsx(variants[variant].image)}>
        <Image src={src} alt={name} width={480} height={640} className="object-cover" />
      </div>
      <span className="truncate text-sm max-w-20">{name}</span>
    </button>
  );
}

function Toolbar({ handleSelect }: { handleSelect: (arg: "tiles" | "list") => void }) {
  return (
    <>
      <MenuDropdown menuButton={{ title: "View" }}>
        <Button variant="toolbar" onClick={() => handleSelect("tiles")}>
          View as Tiles
        </Button>
        <Button variant="toolbar" onClick={() => handleSelect("list")}>
          View as List
        </Button>
      </MenuDropdown>
      <MenuDropdown menuButton={{ title: "Help" }}>
        <Button variant="toolbar">Get help</Button>
        <Button variant="toolbar">Info</Button>
      </MenuDropdown>
    </>
  );
}

export default function page() {
  const [selectedImage, setSelectedImage] = useState<{ name: string; src: StaticImageData } | null>(null);
  const [view, setView] = useState<"tiles" | "list">("list");
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(image: { name: string; src: StaticImageData }) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function handleSelectView(value: "tiles" | "list") {
    console.log(value);
    if (value === "tiles" || value === "list") setView(value);
    return;
  }

  return (
    <Window className="w-full h-[calc(100vh-34px)]">
      <Window.Header>Pictures</Window.Header>
      <Window.Toolbar className="flex space-x-4">
        <Toolbar handleSelect={handleSelectView} />
      </Window.Toolbar>
      <Window.Body className="bg-windows-white p-2 border-b-windows-gray border-r-windows-gray border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#000]">
        <div
          className={clsx(
            "w-full h-full flex  flex-wrap content-start px-2",
            view === "tiles" ? "flex-row gap-4" : "flex-col gap-1"
          )}
        >
          {pictures.map(picture => (
            <Tile variant={view} key={picture.name} {...picture} handleClick={handleClick} />
          ))}
        </div>
      </Window.Body>
      <Window.Footer className="flex gap-1">
        <div className="w-2/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
        <div className="w-1/3 h-5 mt-1 bg-windows-gray border-b-windows-white border-r-windows-white border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#8E888E]"></div>
      </Window.Footer>
      {selectedImage && (
        <Modal
          title={`Preview of ${selectedImage.name}`}
          body={
            <Image src={selectedImage.src} alt={selectedImage.name} height={640} width={480} className="object-cover" />
          }
          open={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </Window>
  );
}
