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
  .items,
  .items2 {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 25rem;
  }
  .item,
  .item2 {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items,
    .items2 {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
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
