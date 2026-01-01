"use client";

import { useState } from "react";

const networks = [
  { name: "Ethereum", icon: "🟣" },
  { name: "Polygon", icon: "🟪" },
  { name: "BSC", icon: "🟡" },
  { name: "Base", icon: "🔵" },
];

export default function NetworkSelector() {
  const [selected, setSelected] = useState(networks[0]);

  return (
    <div className="bg-[#11162a] rounded-2xl p-4 shadow-lg w-fit">
      <p className="text-xs text-gray-400 mb-2">Network</p>

      <div className="flex items-center gap-3">
        <div className="text-lg">{selected.icon}</div>
        <p className="font-medium">{selected.name}</p>

        <select
          className="ml-4 bg-[#0b0f1a] text-sm rounded-lg px-2 py-1 focus:outline-none"
          onChange={(e) =>
            setSelected(networks[e.target.selectedIndex])
          }
        >
          {networks.map((net) => (
            <option key={net.name}>{net.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
