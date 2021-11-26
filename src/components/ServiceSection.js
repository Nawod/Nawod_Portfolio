import React from 'react';
import styled from 'styled-components';
import { MdCode } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItems from './ServicesSectionItems';
import Button from './Button';

const ServiceItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 7rem;
  }
  .service__button {
    text-align: center;
    margin-top: 8rem;
  }
  @media only screen and (max-width: 760px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 6rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServiceItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I will do for you" />
        <div className="services__allItems">
          <ServicesSectionItems
            desc="I turn ideas into ui/ux design that helps web and mobile application
          to get a clean and creative look."
          />
          <ServicesSectionItems
            icon={<MdCode />}
            title="Web Dev"
            desc="I also develop the web applications. I create high performance websites with responsive design."
          />
        </div>
        <div className="service__button">
          <Button
            btnText="Hire me from Fiverr"
            outLine="false"
            btnLink="https://www.fiverr.com/nawod25?up_rollout=true"
            type="a"
          />
        </div>
      </div>
    </ServiceItemStyles>
  );
}
