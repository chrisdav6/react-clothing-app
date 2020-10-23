import React, { useState } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';

const Directory = () => {
  const [sections, setSections] = useState([
    {
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats'
    },
    {
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/hats.png',
      id: 2,
      linkUrl: 'jackets'
    },
    {
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/hats.png',
      id: 3,
      linkUrl: 'sneakers'
    },
    {
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/hats.png',
      id: 4,
      linkUrl: 'womens',
      size: 'large'
    },
    {
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/hats.png',
      id: 5,
      linkUrl: 'mens',
      size: 'large'
    }
  ]);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
