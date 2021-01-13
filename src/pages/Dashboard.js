import React from "react";
import styled from "styled-components";
import DashFoot from "../components/Dashboard/DashFoot";
import DashHead from "../components/Dashboard/DashHead";
import DashList from "../components/Dashboard/DashList";

const DashboardPage = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <DashboardPage>
      <DashHead />
      <DashList />
      <DashFoot />
    </DashboardPage>
  );
};
