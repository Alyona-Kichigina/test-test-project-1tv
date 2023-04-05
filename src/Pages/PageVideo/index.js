import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {InformationVideo, Img} from "./style";
import CommentComponent from "../../Components/CommentComponent";

// http://fedevofferapi-info3.b4a.run/item/:id.

const PageVideo = () => {
  const [data, setData] = useState([])
  const [comment, setComment] = useState([])
  const {id} = useParams()

  useEffect(() => {
    getDataVideo()
    getCommentVideo()
  }, [])

  const getDataVideo = useCallback(async () => {
    try {
      const {data} = await axios.get(`https://fedevofferapi-info3.b4a.run/item/${id}`)
      setData(data)
    } catch (e) {
      console.log(e)
    }
  }, [])

  const getCommentVideo = useCallback( async () => {
    try {
      const {data} = await axios.get(`https://fedevofferapi-info3.b4a.run/comments/${id}`)
      setComment(data.comments)
    } catch (e) {
      console.log(e)
    }
  }, [])
  return (
    <div>
      <h1>ВЫБРАННОЕ ВИДЕО</h1>
      <InformationVideo>
        <Img style={{backgroundImage: `url(${data.image})`}} />
        <div>
          <h2>{data.title}</h2>
          <button className="button blue" type="button block">СМОТРЕТЬ</button>
          <button className="button green" type="button block">СМОТРЕТЬ за 1 ₽ без рекламы</button>
        </div>
      </InformationVideo>
      {comment.map(({id, image, author, description, comment}) => (
        <CommentComponent
          key={id}
          image={image}
          author={author}
          description={description}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default PageVideo;
