/*  need to think !!!!! */
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletMax: "767.98px",
  desktop: "1279px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletMax: `(max-width: ${size.tabletMax})`,
  desktop: `(min-width: ${size.desktop})`,
};

// use
// import styled from 'styled-components';
// import { device } from './device';

// const Page = styled.div`
//   margin: auto;
//   font-family: "sans-serif";
//   text-align: center;

//   @media ${device.laptop} {
//     max-width: 800px;
//   }

//   @media ${device.desktop} {
//     max-width: 1400px;
//   }
// `;
