import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {InformationVideo, Img, Tag, Circle, GridBlock} from "./style";
import CommentComponent from "../../Components/CommentComponent";
import BannerComponent from "../../Components/BannerComponent";

const PageVideo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [comment, setComment] = useState([])
  const {id} = useParams()

  useEffect(() => {
    getDataVideo()
    getCommentVideo()
  }, [])

  const getDataVideo = async () => {
    try {
      const {data} = await axios.get(`https://fedevofferapi-info3.b4a.run/item/${id}`)
      setData(data)
    } catch (e) {
      console.log(e)
    }
  }

  const getCommentVideo =  async () => {
    try {
      const {data} = await axios.get(`https://fedevofferapi-info3.b4a.run/comments/${id}`)
      setComment(data.comments)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="pt-82 l-p-layout r-p-layout">
      <div className="flex jc-space-between mb-25 ai-flex-end">
        <h1>ВЫБРАННОЕ ВИДЕО</h1>
        <div
          className="color-blue text-uppercase fz-12"
          onClick={() => navigate(`/list-video`)}
        >
          все ВИДЕО
        </div>
      </div>
      <GridBlock>
        <div className="">
          <InformationVideo>
            <Img style={{backgroundImage: `url(${data?.image})`}} />
            <div className="pl-56">
              <h2 className="pb-8">{data?.title}</h2>
              <div className="mb-12">
                {data?.labels?.fullhd && (
                  <Tag>Full HD</Tag>
                )}
                {data?.labels?.subtitles && (
                  <Tag>СУБ</Tag>
                )}
                <Tag>{data?.labels?.age_restrictions}</Tag>
              </div>
              <div className="mb-12 color-grey-light-0 flex ai-center">
                <span>{data?.production?.year}</span>
                <Circle/>
                <span className="mr-5">{data?.production?.country},</span>
                {data && data.length > 0 && data?.genre.map((item) => (
                  <span>{item}</span>
                ))}
              </div>
              <button
                className="button blue block mb-20 fz-12 "
                type="button"
              >
                СМОТРЕТЬ
                <div className="fw400 pt-4 text-transform-none">
                  осталось смотреть 7 дней
                </div>
              </button>
              <button
                className="button green block mb-20 fz-12"
                type="button"
              >
                СМОТРЕТЬ за 1 ₽ без рекламы
              </button>
              <div className="flex">
                <button
                  className="button grey-2 medium flex jc-center ai-center mr-9"
                  type="button"
                >
                  <img src="../icon/triangle-icon.svg" alt="" className="mr-12"/>
                  ТРЕЙЛЕР
                </button>
                <div className="btn-min mr-9">
                  <img src="../icon/bookmark-icon.svg" alt=""/>
                </div>
                <div className="btn-min mr-9">
                  <img src="../icon/heart-icon.svg" alt=""/>
                </div>
                <div className="btn-min">
                  <img src="../icon/share-icon.svg" alt=""/>
                </div>
              </div>
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
        <BannerComponent/>
      </GridBlock>
    </div>
  );
};

export default PageVideo;
