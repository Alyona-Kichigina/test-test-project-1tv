import React from 'react';
import {Avatar, Block} from "./style";

const CommentComponent = ({image, author, description, comment}) => {
  return (
    <Block>
      <div className="flex">

        {/*<Avatar style={{backgroundImage: `url(${image})`}} />*/}
        <div>
          <h3>{author}</h3>
          <div className="color-grey-light-0 fz-16">{description}</div>
        </div>
      </div>
      <p className="pt-28">{comment}</p>
    </Block>
  );
};

export default CommentComponent;
