import styled from "styled-components";

export const GridBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
`

export const GridVideo = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
`
