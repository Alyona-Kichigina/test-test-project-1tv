import React, {useCallback, useEffect, useState} from 'react';
import ListComponent from "../../Components/ListComponent";
import {GridBlock} from "./style";
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

  const openPageVideo = useCallback((id) => {
    console.log(id)
  }, [])

  return (
    <div>
      <h1>НАШИ ВИДЕО</h1>
      <div className="flex">
        <GridBlock>
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

        </GridBlock>
        <BannerComponent/>
      </div>
    </div>
  );
};

export default ListVideo;
