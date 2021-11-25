import React from 'react';
import styled from 'styled-components';
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
  FaBehanceSquare,
} from 'react-icons/fa';
import hero from '../assets/images/hero.JPG';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeadingStyle = styled.div`
  .hero {
    margin-top: -8.5rem;
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    position: relative;
  }
  .hero__heading {
    font: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 6rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    /* box-shadow: 0px 4px 8px 0px black; */
  }
  .hero__info {
    margin-top: -18rem;
    p {
      color: var(--white);
      text-shadow: 0px 0px 3px black;
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__socail_text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.8rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 3rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
      p {
        color: var(--gray-1);
        text-shadow: none;
      }
    }
    .hero__social {
      left: 0px;
      bottom: 15px;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.4rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__socail_text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HomeHeading() {
  return (
    <HeadingStyle>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Madhuvantha K.A.N.</span>
          </h1>
          <div className="hero__img">
            <img src={hero} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am working as a freelance UI/UX designer and web developer for 2
              years. I love self-learning and getting experience with new
              technologies.
            </PText>
            <Button
              btnLink="/projects"
              btnText="see my works"
              outLine={false}
            />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
            <div className="hero__socail_text">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/madhuvantha-kan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/n_a_w_w_a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagramSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Nawod"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithubSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/madhuvantha"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaBehanceSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeadingStyle>
  );
}
