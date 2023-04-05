import styled from "styled-components";
export const HoverBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, .8);
  border-radius: var(--border-radius-block);
  padding: 24px 28px 34px 28px;
  opacity: 0;
 `

export const ImgBlock = styled.div`
 position: relative;
  &:hover {
    ${HoverBlock} {
      opacity: 1;
    }
  }
`



export const Img = styled.div`
 width: 100%;
 height: 272px;
 border-radius: var(--border-radius-block);
 background-position: center; 
 background-repeat: no-repeat; 
 background-size: cover;
`

