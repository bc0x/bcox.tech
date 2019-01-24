import React from 'react';
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/tag';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import formatDate from 'date-fns/format';
import { PostComponents } from './PostComponents';

const Author = meta => (
  <div className="container has-text-centered">
    <div className="container">
      <div className="columns is-centered">
        <div className="column">
          <span className="image avatar is-24x24 m-r-5">
            <img className="is-rounded" src={meta.avatar} />
          </span>
          <span className="">{meta.name}</span>
        </div>
      </div>
    </div>
    <div className="container">
      <Link href={`https://twitter.com/${meta.twitter}`}>
        <a target="_blank">
          <span className="is-size-7"> @{meta.twitter}</span>
        </a>
      </Link>
    </div>
  </div>
);

export default meta => {
  return function Post(props) {
    return (
      <MDXProvider components={PostComponents}>
        <section className="section has-text-centered">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h4 className="title is-4 is-centered">{meta.title}</h4>
                <h6 className="subtitle is-6">
                  {formatDate(meta.date, 'dddd, MMMM Do YYYY')} (
                  {distanceInWordsToNow(meta.date, {
                    addSuffix: true
                  })}
                  )
                </h6>
                <Author {...meta.author} />
                <div className="m-t-40">
                  <content>{props.children}</content>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MDXProvider>
    );
  };
};
