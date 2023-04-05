import React from 'react';
import {HoverBlock, ImgBlock, Img} from "./style";

const ListComponent = ({image, title, description, text, onClick }) => {
  return (
    <div className="color-white">
      <ImgBlock>
        <Img style={{backgroundImage: `url(${image})`}}/>
        <HoverBlock>
          <p className="">
            {text}
          </p>
          <button
            className="button grey" type="button"
            onClick={onClick}
          >
            Смотреть
          </button>
        </HoverBlock>
      </ImgBlock>
      <div className="fw700 text-uppercase">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ListComponent;
