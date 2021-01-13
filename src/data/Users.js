import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import styled from "styled-components";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

const UserListBlock = styled.div`
  width: 800px;
  height: 600px;
  margin: 0 auto;

  margin-top: 3rem;
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  ul {

  }
  li{
      list-style: none;
      margin-top: 0.5rem; 
      padding: 0.5rem;
      border: 1px solid lightgray;
  }
`;

function Users() {
  const [state, refetch] = useAsync(getUsers, []);

  const { loading, data: users, error } = state;

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <>
      <UserListBlock>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <b>{user.name}</b>
            </li>
          ))}
          <li><button onClick={refetch}>다시 불러오기</button></li>
        </ul>
      </UserListBlock>
    </>
  );
}

export default Users;
