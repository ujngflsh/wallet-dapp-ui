const assets = [
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "2.50",
    value: "$6,200",
    icon: "🟣",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    balance: "3,000",
    value: "$3,000",
    icon: "🔵",
  },
  {
    symbol: "MATIC",
    name: "Polygon",
    balance: "1,200",
    value: "$1,050",
    icon: "🟪",
  },
];

export default function AssetList() {
  return (
    <div className="bg-[#11162a] rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold">Assets</h3>
        <span className="text-sm text-gray-400">3 Tokens</span>
      </div>

      <div className="space-y-3">
        {assets.map((asset) => (
          <div
            key={asset.symbol}
            className="
              flex items-center justify-between
              p-4 rounded-xl
              bg-[#0b0f1a]
              hover:bg-[#161c33]
              transition
              cursor-pointer
            "
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1c2340] flex items-center justify-center text-lg">
                {asset.icon}
              </div>

              <div>
                <p className="font-medium">{asset.symbol}</p>
                <p className="text-sm text-gray-400">{asset.name}</p>
              </div>
            </div>

            {/* Right */}
            <div className="text-right">
              <p className="font-semibold">{asset.balance}</p>
              <p className="text-sm text-gray-400">{asset.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
