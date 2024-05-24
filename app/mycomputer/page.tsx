import cddrive from "../../public/icons/cddrive48.png";
import desktop from "../../public/icons/desktop48.png";
import floppydrive from "../../public/icons/floppydrive48.png";
import harddisk from "../../public/icons/harddisk48.png";
import Icon from "../UI/Icon";

export default function Page() {
  const actions = [
    {
      name: "Desktop",
      href: "mycomputer/desktop",
      icon: desktop,
      disabled: false,
    },
    {
      name: "C: Harddisk",
      href: "/harddisk",
      icon: harddisk,
      disabled: true,
    },
    {
      name: "D: CD Drive",
      href: "/cddrive",
      icon: cddrive,
      disabled: true,
    },
    {
      name: "E: Floppy drive",
      href: "/floppydrive",
      icon: floppydrive,
      disabled: true,
    },
  ];
  return (
    <>
      {actions.map(action => (
        <Icon key={action.name} {...action} />
      ))}
    </>
  );
}
