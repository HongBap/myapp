import { Card } from "antd";
import styled from "styled-components";

export const WrapperCard = styled(Card)`
    width : 200;
    & image {
        height : 200;
        width : 200;
        border-radius : 0px;
    },
    position : relative;
`

export const StyleNameProduct = styled.div`
    font-weight : 400;
    font-size : 12px;
    line-height : 16px;
    color : rgb(56,56,61);
    font-weight : 400;
`

export const WrapperReportText = styled.div`
    font-size : 11px;
    color : rgb(128,128,137);
    display : flex;
    align-items : center;
    margin : 6px 0 4px;
`

export const WrapperPriceText = styled.div`
    color : rgb(255,66,78);
    font-weight : 500px; 
    font-size : 16px;
`

export const WrapperDiscountText = styled.span`
    color : rgb(255,66,78);
    font-weight : 500px; 
    font-size : 12px;
`
export const WrapperStyleTextSell = styled.span`
    font-size : 15px;
    line-height : 24px;
    color : rgb(120,120,120);
`