"use client";

import { config, projectId } from "@/app/connection/config";
import { siweConfig } from "@/app/connection/siweConfig";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, State } from "wagmi";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

if (!projectId) throw new Error("Project ID is not defined");

const web3Modal = createWeb3Modal({
  wagmiConfig: config,
  siweConfig,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
});

export function Providers({
  children,
  initialState,
  session,
}: Readonly<{
  children: React.ReactNode;
  initialState: State | undefined;
  session: Session | null;
}>) {
  const queryClient = new QueryClient();

  return (
    <SessionProvider session={session} refetchInterval={60}>
      <WagmiProvider config={config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </SessionProvider>
  );
}
