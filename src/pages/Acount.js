import React from 'react';
import styled from 'styled-components';
import Users from '../data/Users';

const CssBackgroundImg = styled.div`
    width:500px;
    height:200px;
    background-image:url("/images/ai_banner.png");
    
`;

export default ()=>{
    return(
        <>
            <Users />
            <CssBackgroundImg></CssBackgroundImg>
        </>
    )
}