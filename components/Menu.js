import Link from 'next/link';
import 'rbx/index.css';
import './../styles.scss';
import React from 'react';
import { Hero, Navbar, Button, Icon, Field, Control } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => (
  <>
    <Navbar color="white">
      <Navbar.Brand>
        <Navbar.Item href="/">
          <img
            src="./../static/bcox_tech_dark.svg"
            alt="[ bcox ]"
            width="120"
            height="28"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="start">
          <Navbar.Item href="/blog">blog</Navbar.Item>
          <Navbar.Item
            href="/static/brandoncox_resume_201808.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </Navbar.Item>
        </Navbar.Segment>
        <Navbar.Segment align="end">
          <Navbar.Item as="div">
            <Field kind="group">
              <Control>
                <Button as="a" color="primary" href="https://github.com/bc0x">
                  <Icon>
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </Icon>
                  <span>GitHub</span>
                </Button>
              </Control>
              <Control>
                <Button
                  as="a"
                  color="info"
                  href="https://twitter.com/bcox_tech"
                >
                  <Icon>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </Icon>
                  <span>Tweet</span>
                </Button>
              </Control>
            </Field>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
    <Hero size="large" className="has-bg-img">
      <Hero.Body> </Hero.Body>
    </Hero>
  </>
);

export default Menu;
