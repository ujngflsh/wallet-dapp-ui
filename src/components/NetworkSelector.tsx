"use client";

interface NetworkSelectorProps {
  network: string;
  setNetwork: (value: string) => void;
}

export default function NetworkSelector({ network, setNetwork }: NetworkSelectorProps) {
  return (
    <div className="relative inline-block">
      <select
        value={network}
        onChange={(e) => setNetwork(e.target.value)}
        className="bg-gray-800 text-white px-3 py-1 rounded-lg"
      >
        <option value="Sepolia">Sepolia</option>
        <option value="Ethereum Mainnet">Ethereum Mainnet</option>
        <option value="Polygon">Polygon</option>
        <option value="BSC">BSC</option>
      </select>
    </div>
  );
}
