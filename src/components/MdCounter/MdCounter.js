import React from "react";
import CountUp from "react-countup";
import styled from "styled-components";

const CounterBlock = styled.div`
  color: black;
  margin-top: 2rem;
  margin-left: 3rem;
  img {
      float: left;
      width: 35px;
      height: 35px;
      margin-top: 1rem;

  }
  .label {
    font-weight: 600;
    font-size: 1.2rem;
    color: gray;
    text-align: left;
    padding-left: 4rem;
  }
  .counterNumber {
    font-weight: 600;
    display: block;
    margin-top: 0.2rem;
    font-size: 3rem;
    color:black;
  }
`;

const MdCounter = (props) => {
  const { label, number, icon } = props.data;
  const srcIcon = "/images/"+ icon;
  return (
    <CounterBlock>
      <img src={srcIcon} />
      <div className="label">
        <span>{label}</span>
        <CountUp
          className="counterNumber"
          start={0}
          end={number}
          useGrouping={true}
          separator=","
        />
      </div>
    </CounterBlock>
  );
};

export default MdCounter;
