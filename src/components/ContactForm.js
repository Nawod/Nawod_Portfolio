import React, { useState } from 'react';
import styled from 'styled-components';

const FromStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
    label {
      font-size: 1.6rem;
    }
    input,
    textarea {
      font-size: 1.6rem;
      width: 100%;
      padding: 1rem;
      color: var(--gray-1);
      background-color: var(--deep-dark);
      outline: none;
      border: none;
      border-radius: 8px;
      margin-top: 1rem;
    }
    textarea {
      min-height: 250px;
      resize: vertical;
    }
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 1.8rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    :hover {
      background-color: var(--white);
    }
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
      <FromStyle>
        <div className="form-group">
          <label htmlFor="name">
            Your name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your email
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FromStyle>
    </div>
  );
}
