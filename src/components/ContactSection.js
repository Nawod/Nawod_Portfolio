import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;
  }
  .contactSection__heading {
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 760px) {
    .contactSection__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyles>
      <div className="container">
        <div className="contactSection__wrapper">
          <PText>Have a project in mind</PText>
          <h3 className="contactSection__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactSectionStyles>
  );
}
