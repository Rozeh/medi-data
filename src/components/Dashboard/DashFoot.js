import React from "react";
import styled from "styled-components";
import MiddleMenu from "../MiddleMenu/MiddleMenu";

const FootBlock = styled.div`
  height: 400px;
  padding-top: 2rem;
  padding-left: 100px;
  background-color: #eeeeee;
  
  .ggLogo {
    width: 120px;
    margin-top: 120px;
    padding: 20px;
    border: 2px solid lightgray;
    background: white;
    border-radius: 15px;
    float:right;
    margin-right: 20px;
  }
`;

export default () => {
  return (
    <FootBlock>
        <MiddleMenu />
        <img src='/images/logo_google.png' className="ggLogo" /> 
    </FootBlock>
  );
};
