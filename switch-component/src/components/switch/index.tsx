"use client";
import { IoIosSunny } from "react-icons/io";
import { LiaMoon } from "react-icons/lia";
import React, { forwardRef } from "react";

interface SwitchProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, onChange, ...props }, ref) => {
    return (
      <label className="cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          className="hidden sr-only"
          onChange={onChange}
          ref={ref}
          {...props}
        />
        <div
          className={`w-28 p-3 rounded-full flex items-center border-2 ${
            checked ? " border-zinc-600" : "border-[#e8d8b2]"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full  flex items-center justify-center transform transition-transform  duration-300 ease-in-out ${
              checked ? "translate-x-16" : "translate-x-0 rotate-90"
            }`}
          >
            {checked ? <LiaMoon size={28} /> : <IoIosSunny size={28} />}
          </div>
        </div>
      </label>
    );
  }
);
Switch.displayName = "Switch";

export default Switch;
