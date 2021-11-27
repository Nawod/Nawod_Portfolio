import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactItemSectionStyles = styled.div`
  padding: 10rem 0 15rem;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 840px) {
    .contactSection__wrapper::after {
      left: 54%;
    }
  }
  @media only screen and (max-width: 760px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactItemSection() {
  return (
    <ContactItemSectionStyles>
      <div className="container">
        <SectionTitle heading="Contact me" subheading="Get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem
              icon={<MdLocalPhone />}
              text="+94 76 399 1948"
              path="tel:+94763991948"
            />
            <ContactInfoItem
              icon={<MdEmail />}
              text="madhuvanthanawo1@gmail.com"
              path="mailto:madhuvanthanawo1@gmail.com"
            />
            <ContactInfoItem
              text="Aralaganvila, Sri Lanka"
              path="https://www.google.lk/maps"
            />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactItemSectionStyles>
  );
}
