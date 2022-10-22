export interface CoinPriceRequest {
    id: string;
    usdcWalletAddress: string;
    usdtWalletAddress: string;
}

const ethereumPriceRequest: CoinPriceRequest = {
    id: 'ethereum',
    usdcWalletAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    usdtWalletAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
};

const goerliPriceRequest: CoinPriceRequest = {
    id: "goerli",
    usdcWalletAddress: "0x78deca24cba286c0f8d56370f5406b48cfce2f86",
    usdtWalletAddress: "0xb347aa50a880c4920e86c2c4a77a6b5809d0a645",
};

// Didn't add USDS contract address for mumbai
// "0x8bf8210d92Df678f61AaBFd561f0B1F83BA7A3fC",
export const mumbaiPriceRequest: CoinPriceRequest = {
    id: "mumbai",
    usdcWalletAddress: "0xe6b8a5cf854791412c1f6efc7caf629f5df1c747",
    usdtWalletAddress: "0xf7f730ffaec85455e3ba44f488c2bd2a741953b3",
}

export const polygonPriceRequest: CoinPriceRequest = {
    id: 'polygon-pos',
    usdcWalletAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    usdtWalletAddress:  "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
}