"use client";

import { useState } from "react";
import { ethers } from "ethers";
import DashboardLayout from "../components/DashboardLayout";
import AssetList from "../components/AssetList";
import TransactionHistory from "../components/TransactionHistory";
import NetworkSelector from "../components/NetworkSelector";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [network, setNetwork] = useState("Not Connected");
  const [readOnly, setReadOnly] = useState(false);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask tidak ditemukan");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const signer = await provider.getSigner();
      const userAddress = accounts[0];
      const rawBalance = await provider.getBalance(userAddress);
      const networkInfo = await provider.getNetwork();

      setAddress(userAddress);
      setBalance(parseFloat(ethers.formatEther(rawBalance)).toFixed(4));
      setNetwork(networkInfo.name);
      setWalletConnected(true);

      // selain testnet → read-only
      if (networkInfo.name === "mainnet") {
        setReadOnly(true);
      }
    } catch (error) {
      console.error(error);
      alert("Gagal connect wallet");
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Wallet Dashboard</h2>
        <NetworkSelector network={network} setNetwork={() => {}} />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Wallet Card */}
        <div className="bg-[#11162a] rounded-2xl p-6 shadow-lg">
          {!walletConnected ? (
            <button
              onClick={connectWallet}
              className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-xl text-sm text-white"
            >
              Connect MetaMask
            </button>
          ) : (
            <>
              <p className="text-sm text-gray-400">Wallet Address</p>
              <p className="text-xs text-gray-300 break-all mt-1">
                {address}
              </p>

              <p className="text-sm text-gray-400 mt-4">ETH Balance</p>
              <h3 className="text-2xl font-bold mt-1">{balance} ETH</h3>

              <p className="text-xs text-gray-500 mt-2">
                Network: {network}
              </p>

              {readOnly && (
                <p className="mt-3 text-yellow-400 text-xs">
                  ⚠️ Read-only mode (transactions disabled)
                </p>
              )}

              <div className="flex gap-3 mt-6">
                <button
                  disabled
                  className="flex-1 bg-gray-700 py-2 text-sm rounded-xl cursor-not-allowed opacity-50"
                >
                  Send
                </button>
                <button
                  disabled
                  className="flex-1 bg-gray-700 py-2 text-sm rounded-xl cursor-not-allowed opacity-50"
                >
                  Receive
                </button>
                <button
                  disabled
                  className="flex-1 bg-gray-700 py-2 text-sm rounded-xl cursor-not-allowed opacity-50"
                >
                  Swap
                </button>
              </div>
            </>
          )}
        </div>

        {/* Assets */}
        <AssetList />
      </div>

      {/* Transactions */}
      {walletConnected && (
        <TransactionHistory className="mt-10" />
      )}
    </DashboardLayout>
  );
}
