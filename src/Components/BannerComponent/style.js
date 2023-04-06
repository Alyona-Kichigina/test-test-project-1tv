import styled from "styled-components";

export const Block = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 488px;
  height: 774px;
  border-radius: var(--border-radius-block);
  background: var(--color-grey-darken-1);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BannerImg = styled.div`
  background-image: url('../img/banner-img.png');
  background-position: center;
  background-repeat: no-repeat;
  height: 600px;
  width: 300px;
`
