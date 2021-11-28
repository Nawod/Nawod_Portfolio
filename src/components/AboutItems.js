import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  position: relative;
  .title {
    font-size: 2.2rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 25rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 380px) {
    .para {
      font-size: 1.3rem;
    }
    .items {
      gap: 0.8rem;
    }
  }
  @media only screen and (max-width: 330px) {
    .para {
      font-size: 1.3rem;
    }
    .items {
      flex-direction: column;
    }
  }
`;

export default function AboutItems({
  title = 'title',
  items = ['item1', 'item2'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
