import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';

const ProjectStyle = styled.div`
  padding: 10rem 0 0 0;
  .project__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 4rem;
    margin-bottom: 10rem;
  }
  .project__serachbar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
    input {
      width: 100%;
      font-size: 1.8rem;
      padding: 0.8rem;
      color: var(--black);
      border-radius: 6px;
      outline: none;
      border: none;
    }
    .searchIcon {
      position: absolute;
      width: 2rem;
      right: 1rem;
      path {
        color: var(--deep-dark);
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .project__serachbar,
    .project__serachbar form,
    .project__serachbar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [SearchText, setSearchText] = useState('');
  const [ProjectData, setProjectData] = useState(ProjectInfo);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  };

  useEffect(() => {
    if (SearchText === '') return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(SearchText.toLowerCase())
      )
    );
  }, [SearchText]);

  return (
    <ProjectStyle>
      <div className="container">
        <SectionTitle heading="projects" subheading="Some of my recent works" />
        <div className="project__serachbar">
          <form>
            <input
              type="text"
              value={SearchText}
              onChange={handleChange}
              placeholder="Search by name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="project__allItems">
          {ProjectData.reverse().map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </ProjectStyle>
  );
}
