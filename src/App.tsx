import { useContractPriceApi } from './hooks/useContractPriceApi';
import { usePriceApi } from './hooks/usePriceApi';
import { polygonPriceRequest } from './models/CoinPriceRequest';

function App() {
  return (
    <div className="App" style={{ margin: '40px' }}>
      <ContractPrice />
      <SimplePrice />
    </div>
  )
}

function ContractPrice() {
  const { loading, error, data } = useContractPriceApi(polygonPriceRequest);
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>An error occured</p>
  }
  return (
    <>
      <p>Contract price</p>
      <p>USDT</p>
      <span>
        {data?.usdt}
      </span>
      <p>USDC</p>
      <span>
        {data?.usdc}
      </span>
    </>
  );
}

function SimplePrice() {
  const { loading, error, data } = usePriceApi(['bitcoin', 'ethereum']);
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>An error occured</p>
  }
  return (
    <>
      <p>Simple price</p>
      <p>Bitcoin</p>
      <span>
        {data.bitcoin.usd}
      </span>
      <p>Ethereum</p>
      <span>
        {data.ethereum.usd}
      </span>
    </>
  );
}

export default App;
