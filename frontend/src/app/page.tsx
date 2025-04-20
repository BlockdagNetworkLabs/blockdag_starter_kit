"use client";

import ConnectButton from "@/components/ConnectButton";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function Home() {
  const { address, isConnected } = useAccount();
  // const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#070E1B]">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-2xl font-bold text-white mb-8">
          BlockDAG Starter Kit
        </h1>
        <div className="bg-gray-800 rounded-lg p-6">
          {isConnected ? (
            <>
              <p className="text-white">Connected to {address}</p>
              <button
                onClick={() => disconnect()}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Disconnect
              </button>
            </>
          ) : (
            <ConnectButton />
          )}
        </div>
      </div>
    </main>
  );
}
