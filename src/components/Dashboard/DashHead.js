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
  margin-top: 3rem;
  border-bottom: 2px solid lightgrey;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding-bottom: 3rem;
  margin-bottom: 3rem;

  .logo {
    padding-left: 100px;
    width: 300px;
  }

  .dashInput {
    outline: none;
    width: 40vw;
    height: 55px;
    margin-left: 40px;
    border: 0.1px solid lightgray;
    border-radius: 1.5rem;
    padding-left: 1.5rem;
    font-size: 1.4rem;
  }
`;

const NavGroupBlock = styled.ul`
  width: 680px;
  li {
    list-style-type: none;
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: 40px;
    cursor: pointer;
    float:left;
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
          <div><Link><img src="/images/logo_mediback.png" className="logo" /></Link></div>
          <div><input className="dashInput" placeholder="검색어를 입력하세요" /></div>
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
