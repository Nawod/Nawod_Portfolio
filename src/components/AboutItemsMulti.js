import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemMultiStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  margin-bottom: 9rem;
  position: relative;
  .title {
    font-size: 2.2rem;
  }
  .items__group {
    position: absolute;
    left: 25rem;
  }
  .items {
    margin-top: 5rem;
    margin-bottom: 1rem;
  }
  .items,
  .items2 {
    display: flex;
    gap: 1.5rem;
    position: relative;
  }
  .item,
  .item2 {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 760px) {
    margin-top: 0;
    margin-bottom: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items__group {
      position: initial;
      gap: 1rem;
    }
    .items {
      margin-top: 0;
    }
    .title {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 380px) {
    .para {
      font-size: 1.3rem;
    }
    .items,
    .items2 {
      gap: 0.8rem;
    }
  }
  @media only screen and (max-width: 330px) {
    .para {
      font-size: 1.3rem;
    }
    .items,
    .items2 {
      flex-direction: column;
    }
  }
`;

export default function AboutItemsMulti({
  title = 'title',
  items = ['item1', 'item2'],
  items2 = ['item1', 'item2'],
}) {
  return (
    <AboutItemMultiStyles>
      <h1 className="title">{title}</h1>
      <div className="items__group">
        <div className="items">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <PText>{item}</PText>
            </div>
          ))}
        </div>
        <div className="items2">
          {items2.map((item, index) => (
            <div className="item2" key={index}>
              <PText>{item}</PText>
            </div>
          ))}
        </div>
      </div>
    </AboutItemMultiStyles>
  );
}
