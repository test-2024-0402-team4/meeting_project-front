import { css } from "@emotion/react";

export const layout = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const authority = css`
width: 1200px;
`;

export const authorityButton = css`
width: 100px;
height: 50px;
margin-left: 20px;
margin-bottom: 10px;

&:nth-of-type(1){
margin-left: 150px;
}
`;

export const showDate = css`
display: flex;
justify-content: flex-end;
width: 900px;
`;

export const boardPageTitle = css`
display: flex;
justify-content: center;
align-items: center;
width: 300px;
height: 40px;
border: 1px solid black;
`;

export const boardListLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 900px;
    border: 1px solid #97e5e7;
`;

export const boardPageProfile = css`
display: flex;
border-bottom: 1px solid #dbdbdb;
width: 100%;
height: 80px;
align-items: center;
`;
export const boardPageProfileImg = css`
display: flex;
justify-content: center;
align-items: center;
width: 65px;
height:65px;
border: 1px solid black;
border-radius: 50%;
margin-left: 18px;
margin-right: 20px;
margin: 15px 20px 15px 18px;
`

export const boardPageMain = css`
display: flex;
width: 95%;
height: 80%;
align-items: center;
margin: 15px 20px 15px 18px;
border-bottom: 1px solid #dbdbdb;
`;

export const boardPageViewCount = css`

`;


