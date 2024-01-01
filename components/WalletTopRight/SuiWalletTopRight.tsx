'use client'
import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { type SuiClientOptions } from '@mysten/sui.js/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {getFullnodeUrl} from "@mysten/sui.js/src/client";


const SuiWalletTopRight = () => {

    // Config options for the networks you want to connect to
    const { networkConfig } = createNetworkConfig({
        localnet: { url: getFullnodeUrl('localnet') },
        mainnet: { url: getFullnodeUrl('mainnet') },
    });
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
                <WalletProvider>
                    <YourApp />
                </WalletProvider>
            </SuiClientProvider>
        </QueryClientProvider>
    );


}

export default SuiWalletTopRight