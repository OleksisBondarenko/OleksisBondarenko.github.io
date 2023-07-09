import React from 'react';
import style from './index.module.css';

interface ILinkImage {
  image: string,
  href: string,
}

const IMAGE_ALT = 'image';

function LinkImage({ image, href }: ILinkImage) {
  return (
    <a className={style.link} href={href}>
      <img src={image} alt={IMAGE_ALT} />
    </a>
  );
}

export default LinkImage;
