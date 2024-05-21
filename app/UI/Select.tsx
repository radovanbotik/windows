import { ComponentPropsWithoutRef } from "react";

export default function Select({
  options,
  onChange,
  value,
}: ComponentPropsWithoutRef<"select"> & {
  options: { label: string; value: string }[];
  // value: { value: string | number };
}) {
  return (
    <select
      className="block py-1.5 pl-3 pr-10  text-gray-900 text-sm capitalize leading-0 bg-[#cdcdcd] border-2 border-b-[#FFFFFF] border-l-[#808080] border-t-[#808080] border-r-[#FFFFFF] shadow-[1px_1px_0px_0px_#0000007f]"
      value={value}
      onChange={onChange}
    >
      {options.map(option => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
