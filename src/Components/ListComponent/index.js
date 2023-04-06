import React from 'react';
import {HoverBlock, ImgBlock, Img} from "./style";

const ListComponent = ({image, title, description, text, onClick }) => {
  return (
    <div className="">
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
      <div className="fw700 text-uppercase pt-15">
        <div className="lh-20">{title}</div>
        <div className="lh-20">{description}</div>
      </div>
    </div>
  );
};

export default ListComponent;
