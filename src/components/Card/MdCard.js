import React from 'react';
import styled from 'styled-components';

const MdCardBlock = styled.div`
        padding: 1rem 1rem;
        background: #F7F9F5;
        width: 195px;
        border-radius: 12px;
        border: 2px solid lightgray;
        box-shadow: 2px 4px 3px 0px rgba(0,0,0,0.3);


        span {
            margin-left: 4px;
            color: gray;
        }
        .numFormat {
            font-size: 1.5rem;
            margin-left: 0.8rem;
            color: gray;
        }
        .moreBtn {
            float: right;
            width: 20px;
            height: 20px;
            margin-top: 15px;
            cursor: pointer;
        }
`;

const MdCard = (props) => {
    const { statusIcon, subTitle, number } = props.data
    const imgSrc = "/images/"+ statusIcon;
    //number int형의 숫자를 천단위의 숫자로 리펙토링
    const numberFormat = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return(
        <>
            <MdCardBlock>
                <img src={imgSrc} />
                <span>{subTitle}</span>
                <div className="numFormat">{numberFormat}<img className="moreBtn" src="/images/icon_more-btn.png" /></div>
                
            </MdCardBlock>
        </>
    )
}
export default MdCard;