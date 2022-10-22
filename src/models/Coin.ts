export interface Coin {
    contractAddress: string;
    id: string;
}

export const ethereum: Coin = {
    contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    id: 'ethereum'
}

export const polygon: Coin = {
    contractAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    id: 'polygon-pos'
}