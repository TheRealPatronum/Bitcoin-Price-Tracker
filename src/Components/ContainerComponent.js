import React, { useState } from 'react';
import Crypto from './Crypto';

export default function ContainerComponent() {
  const [value, setvalue] = useState('dogecoin');
  return (
    <div>
      <Crypto asset={value} />
    </div>
  );
}
