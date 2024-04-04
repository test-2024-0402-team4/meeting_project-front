import { css } from "@emotion/react";

export const layout = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const authority = css`
width: 1300px;

`;



export const authorityButton = css`
    width: 100px;
    height: 50px;
    margin-left: 20px;
    &:nth-of-type(1){
    margin-left: 150px;
    }
    
`;

    export const boardListLayout = css`
    box-sizing: border-box;
    height: 500px;
    width: 1000px;
    border: 1px solid #97e5e7;
    
    `;
export const headerTitle = css`
    text-align: center;
    font-size: 40px;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 15px;
`;

export const searchInput = css`
display: flex;
justify-content: flex-end;
width: 70%;
padding-bottom: 10px;
`;

export const inputBox = css`
margin-left: 15px;
`;

export const boardListHeader = css`
box-sizing: border-box;
display: flex;
width: 100%;
border-bottom:2px solid #dbdbdb ;
& > div{
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 40px;
    width: 80px;
    flex-grow: 1;
    font-weight: 700;
    cursor: default;
}
& > div:nth-of-type(1){
    border-right: 1px solid #dbdbdb ;
    flex-grow: 0;
    width: 80px;
}
& > div:nth-of-type(2){
    border-right: 1px solid #dbdbdb ;
    flex-grow: 0;
    width: 460px;
}
& > div:nth-of-type(3){
    border-right: 1px solid #dbdbdb ;
    flex-grow: 0;
    width: 160px;
}
& > div:nth-of-type(4){
    border-right: 1px solid #dbdbdb ;
    flex-grow: 0;
    width: 120px;
}
& > div:nth-of-type(5){
    border-right: 1px solid #dbdbdb ;
    flex-grow: 0;
    width: 80px;
}
`;
export const boardListItem = css`

   
    cursor: pointer;
    color: #222;
    text-decoration: none;
    &>li{
        box-sizing: border-box;
        display: flex;
        width: 100%;
        border-bottom:1px solid #dbdbdb ;
        &:hover{
            background-color: beige;
        }

        & > div{
            display: flex;
            justify-content: center;
            align-items: center;
            
            height: 40px;
            width: 80px;
            flex-grow: 1;
           
            
        }
        & > div:nth-of-type(1){
            border-right: 1px solid #dbdbdb ;
            flex-grow: 0;
            width: 80px;
        }
        & > div:nth-of-type(2){
            border-right: 1px solid #dbdbdb ;
            flex-grow: 0;
            width: 460px;
        }
        & > div:nth-of-type(3){
            border-right: 1px solid #dbdbdb ;
            flex-grow: 0;
            width: 160px;
        }
        & > div:nth-of-type(4){
            border-right: 1px solid #dbdbdb ;
            flex-grow: 0;
            width: 120px;
        }
        & > div:nth-of-type(5){
            border-right: 1px solid #dbdbdb ;
            flex-grow: 0;
            width: 80px;
        }
    }

`;

export const test1 = css`
background-color: #97e5e7;
`

export const pageNumber = css`
padding: 15px;
`;

export const writeButtonLayout =css`
display: flex;
justify-content: flex-end;
width: 68%;
margin-top: 10px;
`;
export const writeButton = css`
width: 90px;
height: 40px;
`;
