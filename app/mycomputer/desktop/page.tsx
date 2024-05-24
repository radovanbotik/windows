import mailbox from "../../../public/icons/mailbox48.png";
import recyclebinfull from "../../../public/icons/recyclebinfull48.png";
import directory from "../../../public/icons/directory48.png";
import wm from "../../../public/icons/wm48.png";
import file from "../../../public/icons/file32.png";
import Icon from "@/app/UI/Icon";

export default function Page() {
  const icons = [
    {
      name: "Inbox",
      href: "/inbox",
      icon: mailbox,
    },
    {
      name: "Recycle Bin",
      href: "/recyclebin",
      icon: recyclebinfull,
    },
    {
      name: "Pictures",
      href: "/pictures",
      icon: directory,
    },
    {
      name: "CV",
      href: "/cv",
      icon: file,
    },
    {
      name: "Media Player",
      href: "/media-player",
      icon: wm,
    },
  ];
  return (
    <>
      {icons.map((icon, index) => {
        return <Icon key={icon.name} {...icon} />;
      })}
    </>
  );
}
