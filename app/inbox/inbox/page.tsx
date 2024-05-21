import Button from "@/app/UI/Button";
import Image from "next/image";
import envelopeclosed from "../../../public/icons/envelopeclosed16.png";
import template from "../../../public/icons/template16.png";

export default function Page() {
  return (
    <div className="flex flex-col ">
      <div className="flex w-full border-2 border-gray-600 flex-wrap">
        <Button variant="windows">!</Button>
        <Button variant="windows">
          <Image src={envelopeclosed} alt="unopened" />
        </Button>
        <Button variant="windows">
          <Image src={template} alt="attachment" />
        </Button>
        <div className="flex flex-auto">
          <div className="w-full grid place-content-center truncate">radok@rado.com</div>
          <div className="w-full grid place-content-center truncate">cat gifs</div>
          <div className="w-full grid place-content-center truncate">02/16/1993</div>
        </div>
      </div>
    </div>
  );
}
