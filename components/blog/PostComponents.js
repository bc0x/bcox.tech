import React from 'react';

const H1 = ({ children }) => {
  console.log('here');
  return (
    <h3 className="title is-4 is-centered has-text-success">{children}</h3>
  );
};
const LI = ({ children }) => {
  return null;
};
const UL = ({ children }) => {
  return null;
};
const Code = ({ children, syntax, className }) => {
  return null;
};
const P = ({ children }) => {
  return null;
};
const HR = () => {
  return null;
};

export const PostComponents = {
  h1: H1,
  li: LI,
  ul: UL,
  code: Code,
  p: P,
  hr: HR
};
