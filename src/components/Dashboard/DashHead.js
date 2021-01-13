import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HiddenHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-right: 50px;
    
    div {
        margin-left:1.8rem;
        font-size: 1.4rem;
        margin-right: 24px;
    }
`;

const DashHeadBlock = styled.div`
  padding-top: 1.5rem;
  padding-left: 100px;
  color: #1ea235;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 1.5rem;   
  border-bottom: 1px solid lightgray;
  .logo {
    color: #1ea235;

    a {
      color: #1ea235;
    }
  }

  .dashInput {
    outline: none;
    width: 600px;
    height: 48px;
    margin-top: 0.8rem;
    border: 0.1px solid lightgray;
    border-radius: 1.5rem;
    padding-left: 1.5rem;
    font-size: 1.4rem;
  }
`;

const NavGroupBlock = styled.ul`
  width: 600px;
  display: flex;
  flex-direction: row;
  margin-top: 1.3rem;
  justify-content: space-between;

  li {
    list-style-type: none;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #8fc31f;

    &:hover {
      color: #1ea235;
    }
  }
`;

export default () => {
  return (
    <>
      <HiddenHeader>
        <div>1:1문의</div>
        <div>회원가입</div>
        <div>로그인</div>
      </HiddenHeader>
      <DashHeadBlock>
        <h2 className="logo">
          <Link><img src="/images/logo_mediback.png" /></Link>
        </h2>
        <input className="dashInput" placeholder="검색어를 입력하세요" />
        <NavGroupBlock>
          <li>
            <Link to="/">Mediback이란</Link>
          </li>
          <li>
            <Link>의료데이터</Link>
          </li>
          <li>
            <Link to="/acount">고객센터</Link>
          </li>
          <li>
            <Link>마이페이지</Link>
          </li>
        </NavGroupBlock>
      </DashHeadBlock>
    </>
  );
};
