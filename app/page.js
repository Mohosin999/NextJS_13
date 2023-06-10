"use client";
import React from "react";
import styled from "styled-components";

const MyName = styled.h2`
  font-size: 2rem;
  color: red;
  &:hover {
    color: green;
  }
`;

const page = () => {
  return (
    <div>
      <MyName>Mohosin Hasan</MyName>
    </div>
  );
};

export default page;
