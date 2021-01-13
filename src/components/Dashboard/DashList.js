import React from 'react';
import styled from 'styled-components';
import MdCounter from '../MdCounter/MdCounter';
import Slick from '../Slick/Slick';

import data from '../../data/data.json';
import cards from '../../data/data.json';
import MdCard from '../Card/MdCard';

const DashListBlock = styled.div`
    margin-top: 2rem;
    margin-left: 0.2vw;
    display: flex;
    flex-direction: row;
    padding-left: 100px;
    margin-bottom: 2rem;

    .slickMain {
        width: 720px;
        height: 430px;
        border-radius: 12px;
        box-shadow: -2px -3px 8px 3px rgba(0,0,0,0.12);
    }
    .counter {
        display:flex;
        flex-direction: column-reverse;
        width: 450px;
        margin-left:30px;
        text-align: center;
        padding-bottom: 60px;
    }

    .cardInform {
        margin-top: 2rem;
        margin-left: 3rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
        grid-template-rows: 100px 100px 100px;
    }
`;


export default () => {
    return (
        <>
            <DashListBlock>
                <div className="slickMain"><Slick /></div>
                <div className="counter">
                    {data.counts.map(count => <MdCounter key={count.id} data={count} />)}</div>
                <div className="cardInform">
                    {cards.cards.map(card => <MdCard key={card.id} data={card} className="cardBox"/> )}
                </div>
            </DashListBlock>
        </>
    );
}