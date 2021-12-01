import React from 'react';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 320px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    min-height: 120px;
  }
  @media only screen and (max-width: 760px) {
    .projectItem__img {
      height: 300px;
    }
    .projectItem__desc {
      font-size: 1.4rem;
      min-height: 100px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Title',
  desc = 'Project description',
  link = 'https://github.com/Nawod?tab=repositories',
}) {
  return (
    <ProjectItemStyles>
      <a
        href={link}
        className="projectItem__img"
        target="_blank"
        rel="noreferrer"
      >
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <a href={link} target="_blank" rel="noreferrer">
          <h3 className="projectItem__title">{title}</h3>
          <p className="projectItem__desc">{desc}</p>
        </a>
      </div>
    </ProjectItemStyles>
  );
}
