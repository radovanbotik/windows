import { ComponentPropsWithoutRef } from "react";

type SelectType<Value> = {
  options: readonly Value[];
  onChange: (arg: Value) => void;
  value: Value;
};

export default function Select<T extends string | number | readonly string[]>({
  options,
  onChange,
  value,
}: SelectType<T>) {
  return (
    <select
      className="block py-1.5 pl-3 pr-10  text-gray-900 text-sm capitalize leading-0 bg-[#cdcdcd] border-2 border-b-[#FFFFFF] border-l-[#808080] border-t-[#808080] border-r-[#FFFFFF] shadow-[1px_1px_0px_0px_#0000007f]"
      value={value}
      onChange={e => onChange(e.currentTarget.value as T)}
    >
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
