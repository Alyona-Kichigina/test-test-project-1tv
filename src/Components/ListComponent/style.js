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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: .2s;
 `

export const ImgBlock = styled.div`
 position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    ${HoverBlock} {
      opacity: 1;
    }
  }
`



export const Img = styled.div`
 width: 488px;
 height: 272px;
 border-radius: var(--border-radius-block);
 background-position: center; 
 background-repeat: no-repeat; 
 background-size: cover;
`

