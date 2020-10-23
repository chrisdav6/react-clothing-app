import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './previewCollection.scss';

const PreviewCollection = ({ title, items }) => {
  return (
    <div className='PreviewCollection'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
