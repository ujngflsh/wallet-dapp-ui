export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#11162a] p-6 hidden md:block">
        <h1 className="text-xl font-bold mb-8">⚡ WalletUI</h1>

        <nav className="space-y-4 text-gray-300">
          <p className="hover:text-white cursor-pointer">Dashboard</p>
          <p className="hover:text-white cursor-pointer">Assets</p>
          <p className="hover:text-white cursor-pointer">Transactions</p>
          <p className="hover:text-white cursor-pointer">Settings</p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
