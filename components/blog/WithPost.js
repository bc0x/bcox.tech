import Link from "next/link";
import { MDXProvider } from "@mdx-js/tag";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import formatDate from "date-fns/format";
import { PostComponents } from "./PostComponents";

const Author = meta => (
  <div className="author">
    <img src={meta.avatar} alt={meta.name} />
    <span className="name f5">
      <span className="real-name">{meta.name}</span>
      <Link href={`https://twitter.com/${meta.twitter}`}>
        <a className="twitter" target="_blank">
          @{meta.twitter}
        </a>
      </Link>
      <span className="twitter-mobile">
        <Link href={`https://twitter.com/${meta.twitter}`}>
          <a target="_blank">@{meta.twitter}</a>
        </Link>
      </span>
    </span>
  </div>
);

export default meta => props => {
  return (
    <MDXProvider components={PostComponents}>
      <section className="section has-text-centered">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h4 className="title is-4 is-centered">{meta.title}</h4>
              <h6 className="subtitle is-6">
                {formatDate(meta.date, "dddd, MMMM Do YYYY")} (
                {distanceInWordsToNow(meta.date, {
                  addSuffix: true,
                })}
                )
              </h6>
              <content>{props.children}</content>
            </div>
          </div>
        </div>
      </section>
    </MDXProvider>
  );
};
