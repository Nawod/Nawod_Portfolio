import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding: 6rem 0 0;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .para {
    font-size: 1.4rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1rem 0;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 760px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 4rem;
      }
    }
    .footer__col1 {
      .para {
        max-width: 100%;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Madhuvantha K.A.N.</h1>
          <PText>
            A freelance UI/UX designer and web developer from Sri Lanka. I will
            turn your ideas into digital design or application.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Navigation"
            Links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            Links={[
              {
                title: '+94 76 399 1948',
                path: 'tel:+94763991948',
              },
              {
                title: 'madhuvanthanawo1@gmail.com',
                path: 'mailto:madhuvanthanawo1@gmail.com',
              },
              {
                title: 'Aralaganvila, Sri Lanka',
                path: 'https://www.google.lk/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            Links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/madhuvantha-kan/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/n_a_w_w_a/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/Nawod',
              },
              {
                title: 'Fiverr',
                path: 'https://www.fiverr.com/nawod25?up_rollout=true',
              },
              {
                title: 'Behance',
                path: 'https://www.behance.net/madhuvantha',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <PText>©️ 2021 - Madhuvantha K.A.N.</PText>
      </div>
    </FooterStyles>
  );
}
