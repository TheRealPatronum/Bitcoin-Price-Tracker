import React from 'react';
import Crypto from './Crypto';

export default function ContainerComponent() {
  return (
    <div>
      <Crypto asset='bitcoin' />
    </div>
  );
}
