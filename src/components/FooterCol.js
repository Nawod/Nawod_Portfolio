import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyle = styled.div`
  .heading {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.6rem;
  }
`;

export default function FooterCol({
  heading = 'col heading',
  Links = [
    { type: 'Link', title: 'Home', path: '/' },
    { type: 'Link', title: 'About', path: '/about' },
  ],
}) {
  return (
    <ColStyle>
      <h1 className="heading">{heading}</h1>
      <ul>
        {Links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}
