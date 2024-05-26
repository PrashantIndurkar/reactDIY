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
          className={`w-28 p-3 rounded-full flex items-center ${
            checked ? "bg-zinc-800" : "bg-[#FDB813]"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full  flex items-center justify-center transform transition-transform ${
              checked ? "translate-x-16" : "translate-x-0"
            }`}
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            {checked ? <LiaMoon size={24} /> : <IoIosSunny size={24} />}
          </div>
        </div>
      </label>
    );
  }
);

export default Switch;
