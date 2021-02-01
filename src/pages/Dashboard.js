import React from "react";
import styled from "styled-components";
import DashFoot from "../components/Dashboard/DashFoot";
import DashHead from "../components/Dashboard/DashHead";
import DashList from "../components/Dashboard/DashList";
import { Mobile, PC } from "../helper/MediaQuery";

const DashboardPage = styled.div`
  margin-top: 2rem;
`;

const DashboartMobilePage = styled.div`

`;

export default () => {
  return (
    <>
      <Mobile>
        <DashboartMobilePage>
        <h1>여긴 모바일이다</h1>
        </DashboartMobilePage>
      </Mobile>
      <PC>
        <DashboardPage>
          <DashHead />
          <DashList />
          <DashFoot />
        </DashboardPage>
      </PC>
    </>
  );
};
