"use client";
import { useState } from "react";
import Switch from "../components/switch";
import lightOn from "../assets/audio/lightOn.wav";

export default function Home() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        enabled ? "bg-zinc-800" : "bg-[#FDB813]"
      }`}
    >
      <Switch
        checked={enabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEnabled(e.target.checked);
          new Audio(lightOn).play();
        }}
      />
    </div>
  );
}
