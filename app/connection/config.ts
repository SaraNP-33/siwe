import { cookieStorage, createStorage } from "wagmi";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import {
  mainnet,
  // sepolia,
} from "wagmi/chains";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
const chains = [
  mainnet,
  // sepolia,
] as const;

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", //jlk !! must be same as domain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
