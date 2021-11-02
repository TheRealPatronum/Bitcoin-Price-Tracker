import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { formatDollars, formatPercenct } from '../utils/format';
import { Button, Spinner, Card } from 'react-bootstrap';

export default function Crypto(props) {
  const [value, setValue] = useState({});
  const baseUrl = 'https://api.coincap.io/v2/assets/';
  useEffect(() => {
    axios
      .get(baseUrl + props.asset)
      .then((res) => {
        setValue(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('Finally Finished with GET');
      });
  }, [props.asset]);

  const refreschPrice = () => {
    axios
      .get(baseUrl + props.asset)
      .then((res) => {
        setValue(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('Asset refreshed');
      });
  };

  return (
    <Card>
      {value.data ? (
        <div>
          <h4>Name:</h4>
          <p>{value.data.name}</p>
          <h4>Price:</h4>
          <p>{formatDollars(value.data.priceUsd)}</p>
          <h4>Change 24hrs:</h4>
          <p>{formatPercenct(value.data.changePercent24Hr)}%</p>
          <h4>Symbol:</h4>
          <p>{value.data.symbol}</p>
          <Button variant='warning' onClick={refreschPrice}>
            Refresh
          </Button>
        </div>
      ) : (
        <div className='spins center'>
          <Button variant='warning' onClick={refreschPrice}>
            <Spinner animation='grow' as='span' size='sm' role='status' />
            Loading...
          </Button>
        </div>
      )}
    </Card>
  );
}
