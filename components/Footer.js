import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = props => (
  <footer className="footer" color="white">
    <div className="container content has-text-centered">
      <p>
        <FontAwesomeIcon
          icon={['far', 'hand-peace']}
          color="#46adcb"
          size="2x"
        />
        <span className="am10">
          <span>Built by me&nbsp;</span>
          <FontAwesomeIcon
            icon={['fab', 'creative-commons']}
            color="#46adcb"
            size="xs"
          />
          <span>&nbsp;{new Date().getFullYear()}</span>
        </span>
        <FontAwesomeIcon icon={['far', 'heart']} color="#46adcb" size="2x" />
      </p>
      <p>
        <a
          className="am10"
          href="https://github.com/bc0x"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'github']} color="#46adcb" size="2x" />
        </a>
        <a
          className="am10"
          href="https://stackoverflow.com/story/brandon.cox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'stack-overflow']}
            color="#46adcb"
            size="2x"
          />
        </a>
        <a
          className="am10"
          href="https://www.linkedin.com/in/brandon-cox-1039116a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'linkedin-in']}
            color="#46adcb"
            size="2x"
          />
        </a>
        <a
          className="am10"
          href="https://www.twitter.com/bcox_tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'twitter-square']}
            color="#46adcb"
            size="2x"
          />
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
