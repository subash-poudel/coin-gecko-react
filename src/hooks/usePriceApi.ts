import axios from "axios";
import useSWR from "swr";

const simplePriceFetcher = (coinList: string) => {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinList}&vs_currencies=usd`;
    return axios.get(url).then(res => res.data)
}

export function usePriceApi(coins: string[]) {
    const listofCoins = coins.join('%2C'); // %2C is , character in url
    const { data, error } = useSWR('get prices', () => simplePriceFetcher(listofCoins));
    const loading = !data && !error;
    return { data, error, loading };
}
