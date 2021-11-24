import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';
import testimonial from '../assets/data/testimonials';

const TestimonialStyle = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    /* height: fit-content; */
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
    min-height: 200px;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 3rem;
    font-family: 'Montserrat Bold';
    font-size: 2rem;
  }
  .testimonial__title {
    margin-top: 0.3rem;
    font-size: 1.4rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
  }
  .next,
  .prev {
    margin: 0 0.5rem;
    width: fit-content;
    background-color: var(--deep-dark);
    padding: 0.5rem 2rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .next:hover,
  .prev:hover {
    background-color: var(--gray-2);
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.95);
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
  }
  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.95);
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }
`;

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonial[activeIndex];

  const handleNext = () => {
    if (activeIndex >= testimonial.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex <= 0) {
      setActiveIndex(testimonial.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  };

  return (
    <TestimonialStyle>
      <div className="container">
        <SectionTitle
          heading="Testimonial"
          subheading="Some reviews from my clients"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="testimonial__name">{activeSlide.name}</h2>
                <p className="testimonial__title">{activeSlide.title}</p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialStyle>
  );
}
