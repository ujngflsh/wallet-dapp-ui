const transactions = [
  {
    id: 1,
    type: "Sent",
    token: "ETH",
    amount: "-0.25",
    to: "0x91A...2F3B",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "Received",
    token: "USDC",
    amount: "+500",
    to: "0xA12...9F3B",
    time: "Yesterday",
  },
  {
    id: 3,
    type: "Swap",
    token: "ETH → USDC",
    amount: "-1.0",
    to: "Uniswap",
    time: "3 days ago",
  },
];

const typeStyle: Record<string, string> = {
  Sent: "bg-red-500/10 text-red-400",
  Received: "bg-green-500/10 text-green-400",
  Swap: "bg-purple-500/10 text-purple-400",
};

export default function TransactionHistory() {
  return (
    <div className="bg-[#11162a] rounded-2xl p-6 shadow-lg mt-8">
      <h3 className="text-lg font-semibold mb-5">
        Transaction History
      </h3>

      <div className="space-y-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-4 rounded-xl bg-[#0b0f1a]"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${typeStyle[tx.type]}`}
                >
                  {tx.type}
                </span>
                <p className="font-medium">{tx.token}</p>
              </div>

              <p className="text-sm text-gray-400 mt-1">
                {tx.to}
              </p>
            </div>

            {/* Right */}
            <div className="text-right">
              <p className="font-semibold">{tx.amount}</p>
              <p className="text-sm text-gray-400">
                {tx.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
