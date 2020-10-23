import React, { useState } from 'react';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';
import SHOP_DATA from './shop.data';
import './shop.scss';

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className='Shop'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
