import styled from "styled-components";

export const InformationVideo = styled.div`
  border-radius: var(--border-radius-block);
  background: var(--color-grey-darken-1);
  padding: 56px 60px 56px 60px;
  display: flex;
  margin-bottom: 80px;
`

export const Img = styled.div`
  width: 232px;
  height: 342px;
  border-radius: var(--border-radius-block);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Tag = styled.div`
  font-weight: 700;
  font-size: 10px;
  color: var(--color-grey-darken-3);
  background: var(--color-grey-light-0);
  border-radius: 13px;
  padding: 4px;
  display: inline-block;
  margin-right: 12px;
`

export const Circle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: var(--color-grey-light-0);
  margin-right: 8px;
  margin-left: 8px;
`

export const GridBlock = styled.div`
  display: grid;
  grid-template-columns: 2fr auto;
  grid-column-gap: 24px;
`
