import React, { useState } from 'react';
import Crypto from './Crypto';
import { Dropdown } from 'react-bootstrap';

export default function ContainerComponent() {
  const [value, setvalue] = useState('dogecoin');
  return (
    <div>
      <div className='con'>
        <Dropdown>
          <Dropdown.Toggle variant='warning' id='dropdown-basic'>
            Select Blockchain Asset
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setvalue('algorand')}>
              Algorand
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('avalanche')}>
              Avalanche
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('binance-coin')}>
              Binance Coin
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('binance-usd')}>
              Binance USD
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('bitcoin')}>
              Bitcoin
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('bitcoin-cash')}>
              Bitcoin-Cash
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('cardano')}>
              Cardano
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('chainlink')}>
              Chainlink
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('dogecoin')}>
              Dogecoin
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('ethereum')}>
              Ethereum
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('litecoin')}>
              Litecoin
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('polkadot')}>
              Polkadot
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('polygon')}>
              Polygon
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('shiba-inu')}>
              Shiba INU
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('solana')}>
              Solana
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('terra-luna')}>
              Terra
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('tether')}>
              Tether
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('uniswap')}>
              Uniswap
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('usd-coin')}>
              USD Coin
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('wrapped-bitcoin')}>
              Wrapped Bitcoin
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setvalue('xrp')}>XRP</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Crypto asset={value} />
      </div>
    </div>
  );
}
