"use client";
import { Window } from "../UI/Window";
import market from "../../public/pictures/christmassmarket.jpeg";
import krakow from "../../public/pictures/krakow.jpg";
import mafi2 from "../../public/pictures/mafi2.jpg";
import rado from "../../public/pictures/rado.jpg";
import szeged from "../../public/pictures/szeged.jpg";
import vienna from "../../public/pictures/vienna.jpg";
import Image, { StaticImageData } from "next/image";
import React, { ComponentPropsWithoutRef, useRef, useState } from "react";
import clsx from "clsx";
import Modal from "../UI/Modal";
import MenuDropdown from "../UI/MenuDropdown";
import Button from "../UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import Icon from "../UI/Icon";
import prev50 from "../../public/icons/player/prev50.png";
import next50 from "../../public/icons/player/next50.png";
import play50 from "../../public/icons/player/play50.png";
import Divider from "../UI/Divider";

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
  variant: "list" | "tiles" | "extraLarge";
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
    extraLarge: {
      button: "flex flex-col  justify-center items-center text-center",
      image: "flex place-content-center h-48 w-40 p-1",
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

function Toolbar({ handleSelect }: { handleSelect: (arg: "tiles" | "list" | "extraLarge") => void }) {
  return (
    <div className="flex gap-2 ml-1">
      <MenuDropdown menuButton={{ title: "View" }}>
        <Button variant="toolbar" onClick={() => handleSelect("tiles")}>
          View as Tiles
        </Button>
        <Button variant="toolbar" onClick={() => handleSelect("list")}>
          View as List
        </Button>
        <Button variant="toolbar" onClick={() => handleSelect("extraLarge")}>
          View as extra large Icons
        </Button>
      </MenuDropdown>
      <MenuDropdown menuButton={{ title: "Help" }}>
        <Button variant="toolbar">Get help</Button>
        <Button variant="toolbar">Info</Button>
      </MenuDropdown>
    </div>
  );
}

function Slider({ images, currentSlide }: { images: StaticImageData[]; currentSlide: number }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const prev = useRef<HTMLDivElement | null>(null);
  const next = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex-col gap-2">
      <Swiper
        className="max-w-xs sm:max-w-md"
        // navigation={true}
        modules={[Navigation, Autoplay]}
        initialSlide={currentSlide}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        // autoplay={{
        //   delay: 2000,
        // }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image src={image} alt={"image"} height={640} width={480} className="object-cover block" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2">
        <div onClick={() => swiperRef.current?.slidePrev()} ref={prev}>
          <Icon showText={false} icon={prev50} name="previous" />
        </div>
        <div onClick={() => swiperRef.current?.slideNext()} ref={next}>
          <Icon showText={false} icon={next50} name="next" />
        </div>
        <div className="ml-auto">
          <div
            onClick={() =>
              swiperRef.current?.autoplay.running
                ? swiperRef.current?.autoplay.stop()
                : swiperRef.current?.autoplay.start()
            }
          >
            <Icon showText={false} icon={play50} name="previous" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function page() {
  const images = [market, krakow, mafi2, rado, szeged, vienna];
  const [selectedImage, setSelectedImage] = useState<{ name: string; src: StaticImageData } | null>(null);
  const [view, setView] = useState<"tiles" | "list" | "extraLarge">("extraLarge");
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(image: { name: string; src: StaticImageData }) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function handleSelectView(value: "tiles" | "list" | "extraLarge") {
    console.log(value);
    if (value === "tiles" || value === "list" || value === "extraLarge") setView(value);
    return;
  }

  return (
    <Window className="w-full h-full">
      <Window.Header>Pictures</Window.Header>
      <Window.Toolbar>
        {/* <div className="flex space-x-2 px-4"> */}
        <Toolbar handleSelect={handleSelectView} />
        {/* </div> */}
      </Window.Toolbar>
      <Window.Body className="bg-windows-white p-2 border-b-windows-gray border-r-windows-gray border-r-2 border-b-2 shadow-[inset_2px_2px_0px_0px_#000] ">
        <div
          className={clsx(
            "w-full h-full flex flex-row flex-wrap px-2 overflow-y-auto",
            view === "tiles" && "flex-row gap-4 items-start",
            view === "list" && "flex-col gap-1",
            view === "extraLarge" && "flex-row gap-2 items-start"
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
          title={`Preview of ${"image"}`}
          body={
            // <Image src={selectedImage.src} alt={selectedImage.name} height={640} width={480} className="object-cover" />
            <Slider images={images} currentSlide={images.indexOf(selectedImage.src)} />
          }
          backdrop={true}
          open={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </Window>
  );
}
