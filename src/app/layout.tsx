import "./globals.css";

export const metadata = {
  title: "Wallet dApp UI",
  description: "Web3 Wallet Dashboard UI Only",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b0f1a] text-gray-100">
        {children}
      </body>
    </html>
  );
}
