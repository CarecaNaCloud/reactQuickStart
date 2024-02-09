import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { UserCard } from './components/UserCard';
import { List } from './components/List';
import { Events } from './components/Events';
import { UseStateStudyCaseOne} from './components/UseState';
import { UseStateStudyCaseTwo} from './components/UseState/CaseTwo';

const CaseOneWrapper = styled.div`
  display: block;
`;

const CaseTwoWrapper = styled.div`
  display: block;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserCard />
    <List />
    <Events />
    <CaseOneWrapper>
      <h2 style={{fontSize: '1.2rem'}}>Individual data storage</h2>
      <UseStateStudyCaseOne />
      <UseStateStudyCaseOne />
      <UseStateStudyCaseOne />
    </CaseOneWrapper>
    <CaseTwoWrapper>
      <UseStateStudyCaseTwo/>
    </CaseTwoWrapper>

  </React.StrictMode>
);
