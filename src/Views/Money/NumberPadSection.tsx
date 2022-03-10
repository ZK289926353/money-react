import styled from "styled-components";

const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  >.pad{
    display:grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows:  repeat(4,25%);
    >button{
      font-size:18px;
      width:100%;
      height:64px;
      border:none;
      &.ok{
        height: 128px;
        grid-column:4/5;
        grid-row:3/5;
      }
      &.zero{
        grid-column:1/3;
        grid-row:4/5;
      }
      &:nth-child(1){
        background:#F2F2F2;
      }
      &:nth-child(2),
      &:nth-child(5){
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background:#BBBBBB;
      }
      &:nth-child(12){
        background:#9A9A9A;
      }
      &:nth-child(14){
        background:#A9A9A9;
      }
    }
  }
`;

export { NumberPadSection };
