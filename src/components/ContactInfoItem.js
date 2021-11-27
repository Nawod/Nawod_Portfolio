import React from 'react';
import styled from 'styled-components';
import { MdPlace } from 'react-icons/md';
import PText from './PText';

const ContactInfoItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    svg {
      width: 2.8rem;
    }
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'info',
  path = '#',
}) {
  return (
    <ContactInfoItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <a href={path} target="_blank" rel="noreferrer">
          <PText>{text}</PText>
        </a>
      </div>
    </ContactInfoItemStyles>
  );
}
