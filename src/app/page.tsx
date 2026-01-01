import DashboardLayout from "../components/DashboardLayout";
import AssetList from "../components/AssetList";
import TransactionHistory from "../components/TransactionHistory";
import NetworkSelector from "../components/NetworkSelector";

export default function Home() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          Wallet Dashboard
        </h2>

        <NetworkSelector />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Wallet Card */}
        <div
  className="
    bg-[#11162a]
    rounded-2xl
    p-6
    shadow-lg
    hover:shadow-xl
    transition
  "
>

          <p className="text-sm text-gray-400">Total Balance</p>
          <h3 className="text-3xl font-bold mt-2">$12,450.23</h3>

          <p className="text-xs text-gray-500 mt-2">
            Wallet: 0xA12...9F3B
          </p>

          <div className="flex gap-3 mt-6">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 active:scale-95 transition py-2 text-sm rounded-xl">
              Send
            </button>
            <button className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 text-sm rounded-xl">
              Receive
            </button>
            <button className="flex-1 bg-purple-600 hover:bg-purple-700 py-2 text-sm rounded-xl">
              Swap
            </button>
          </div>
        </div>

        {/* Assets */}
        <AssetList />
      </div>

      {/* Transactions */}
      <TransactionHistory className="mt-10" />
    </DashboardLayout>
  );
}
