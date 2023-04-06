import React, {useCallback, useEffect, useState} from 'react';
import ListComponent from "../../Components/ListComponent";
import {GridBlock, GridVideo} from "./style";
import BannerComponent from "../../Components/BannerComponent";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ListVideo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([])

  useEffect(() => {
    getDataList()
  }, [])

  const getDataList = async () => {
    try {
      const {data} = await axios.get('https://fedevofferapi-info3.b4a.run/list')
      setData(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="pt-82 l-p-layout r-p-layout">
      <h1 className="mb-25">НАШИ ВИДЕО</h1>
      <GridBlock>
        <GridVideo>
          {data.map(({image, title, description, text, id}) => (
            <ListComponent
              image={image}
              title={title}
              description={description}
              text={text}
              key={id}
              onClick={() => navigate(`/page-video/${id}`)}
            />
          ))}

        </GridVideo>
        <BannerComponent/>
      </GridBlock>
    </div>
  );
};

export default ListVideo;
