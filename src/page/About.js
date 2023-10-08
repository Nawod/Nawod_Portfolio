import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImage from '../assets/images/about-page-img.jpg';
import AboutItems from '../components/AboutItems';
import ContactSection from '../components/ContactSection';
import AboutItemsMulti from '../components/AboutItemsMulti';

const AboutStyles = styled.div`
  padding: 20rem 0 0 0;
  .top__section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 10rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0%.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
      font: 1.6rem;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__items {
    margin-top: 15rem;
  }
  .about__item {
    margin-bottom: 10rem;
  }
  .about__item__heading {
    font-size: 3.2rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 760px) {
    padding: 10rem 0 0 0;
    .top__section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__item__heading {
      font-size: 2.8rem;
    }
    .about__heading {
      font-size: 2.6rem;
    }
    .about__subheading {
      font-size: 1.6rem;
    }
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="top__section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Nawod Madhuvantha</span>
            </p>
            <h2 className="about__heading">
              A freelance UI/UX designer and web developer
            </h2>
            <div className="about__info">
              <PText>
                I am from Aralaganvila, Sri Lanka, and currently working as a
                software engineer at ZOOMi SoftLab. Also a graduated student at
                Sri Lankan Institute of Information Technology (SLIIT) who is
                holding a BSc (Hons) Information Technology degree.
                <br />
                <br />
                Since my childhood, I love art and design. As a hobby I designed
                UI/UX interfaces on Fiverr as a freelancer. I also love coding
                and getting experience with new technologies. Therefore, I tend
                to self-learning, and I have done many personal projects. Coding
                is also art for me. Therefore I joined ZOOMi SoftLab as an
                associate software engineer an I have promoted to software
                engineer. Now I have the opportunity to design along with the
                coding. I find it really interesting, and I enjoyed the process
                a lot. <br />
                <br />
                My mission is to attain the industry and contribute my
                knowledge, skills, and experience for the advancement of the
                company while studying and making myself grow with the industry.
              </PText>
            </div>
            <Button
              btnText="Download CV"
              btnLink="https://drive.google.com/file/d/1k9a7n8DgrB8_ptjAFSI2_Xgb09g8TJib/view?usp=sharing"
              type="a"
            />
          </div>
          <div className="right">
            <img src={AboutImage} alt="About section img" />
          </div>
        </div>
        <div className="about__items">
          <div className="about__item">
            <h1 className="about__item__heading">Education</h1>
            <AboutItems title="School" items={['Po/Dimbu/Weheragala M.V.']} />
            <AboutItems
              title="University"
              items={['Sri Lanka Institute of Information Technology']}
            />
          </div>
          <div className="about__item">
            <h1 className="about__item__heading">My skills</h1>
            <AboutItemsMulti
              title="Developing"
              items={['Angular', 'React', 'Next', 'TS', 'JS']}
              items2={['HTML', 'SCSS', 'Python', 'C#', 'PHP']}
            />
            <AboutItems
              title="Designing"
              items={['Adobe XD', 'Photoshop', 'Illustrator', 'Figma']}
            />
            <AboutItems
              title=" Operating Systems"
              items={['Windows', 'Linux']}
            />
          </div>
          <div className="about__item">
            <h1 className="about__item__heading">experience</h1>
            <AboutItems
              title="2021 - Now"
              items={['Software Engineer at ZOOMi Technologies Inc']}
            />
            <AboutItems
              title="2020 - Now "
              items={['Freelance web developer']}
            />
            <AboutItems
              title="2019 - 2021"
              items={['Freelance UX/UI designer on Fiverr']}
            />
          </div>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </AboutStyles>
  );
}
