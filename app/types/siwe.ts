import type {
    SIWEVerifyMessageArgs,
    SIWECreateMessageArgs,
  } from "@web3modal/siwe";
  import type { SIWESession } from "@web3modal/siwe";
  
  interface SIWEConfig {
    // Required
    getNonce: () => Promise<string>;
    createMessage: (args: SIWECreateMessageArgs) => string;
    verifyMessage: (args: SIWEVerifyMessageArgs) => Promise<boolean>;
    getSession: () => Promise<SIWESession | null>;
    signOut: () => Promise<boolean>;
  
    // Optional
    onSignIn?: (session?: SIWESession) => void;
    onSignOut?: () => void;
    // Defaults to true
    enabled?: boolean;
    // In milliseconds, defaults to 5 minutes
    nonceRefetchIntervalMs?: number;
    // In milliseconds, defaults to 5 minutes
    sessionRefetchIntervalMs?: number;
    // Defaults to true
    signOutOnDisconnect?: boolean;
    // Defaults to true
    signOutOnAccountChange?: boolean;
    // Defaults to true
    signOutOnNetworkChange?: boolean;
  }
  