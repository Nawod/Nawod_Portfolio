import React from 'react';
import styled from 'styled-components';

const SectionTileStyle = styled.div`
  text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 5rem;
    margin-top: 0%.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 760px) {
    p {
      font-size: 1.3rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'The subheading',
  heading = 'The heading',
}) {
  return (
    <SectionTileStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTileStyle>
  );
}
