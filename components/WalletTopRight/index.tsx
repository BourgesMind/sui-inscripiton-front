'use client'
import React from "react";
import {WalletStandardProvider} from '@wallet-standard/react';
import SuiWalletTopRight from "@/components/WalletTopRight/SuiWalletTopRight";

const WalletTopRight = () => {
    return (
        <WalletStandardProvider>
            <SuiWalletTopRight></SuiWalletTopRight>
        </WalletStandardProvider>
    )
}

export default WalletTopRight;