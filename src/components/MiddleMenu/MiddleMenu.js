import React from 'react';
import styled from 'styled-components';

import mdMenu from '../../data/data.json';
import MiddleItem from './MiddleItem';

const MiddleMenuBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1.2rem;

    .quickmenu-item {
        width: 180px;
        height: 170px;
        border-radius: 12px;
        background-color: white;
        border: 2px solid lightgray;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .item-block{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .md-title {
        margin-top: 0.8rem;
        font-size: 1.2rem;
    }
`;

export default (props) => {
    return(
        <MiddleMenuBlock>
            {mdMenu.mdMenu.map(menu => <MiddleItem key={menu.id} data={menu} />)}
        </MiddleMenuBlock>
    )
}