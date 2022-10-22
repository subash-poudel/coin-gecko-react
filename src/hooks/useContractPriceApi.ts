import axios from "axios";
import useSWR from "swr";
import { CoinPriceRequest } from "../models/CoinPriceRequest";
import { CoinPriceResponse } from "../models/CoinPriceResponse";

const tokenPriceFetcher = (request: CoinPriceRequest) => {
    const { id, usdcWalletAddress, usdtWalletAddress } = request;
    const address = `${usdcWalletAddress}%2C${usdtWalletAddress}`
    const url = `https://api.coingecko.com/api/v3/simple/token_price/${id}?contract_addresses=${address}&vs_currencies=USD`;
    return axios.get(url).then(res => res.data)
}

export function useContractPriceApi(request: CoinPriceRequest) {
    const { data: response, error } = useSWR('useContractPriceApi', () => tokenPriceFetcher(request));
    const loading = !response && !error;
    let data: CoinPriceResponse | null = null;
    if (response) {
        const {id, usdcWalletAddress, usdtWalletAddress} = request;
        data = {
            id: id,
            usdc: response[usdcWalletAddress.toLocaleLowerCase()].usd,
            usdt: response[usdtWalletAddress.toLocaleLowerCase()].usd,
        }
    }
    return { loading, error, data };
}