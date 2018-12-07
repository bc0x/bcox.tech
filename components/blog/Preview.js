import formatDate from "date-fns/format";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import Link from "next/link";

const Preview = props => {
  const { detail, link, title, date, prefetch, children } = props;
  return (
    <div className="container box has-text-centered">
      <h4 className="title is-4 is-centered">{title}</h4>
      <h6 className="subtitle is-6">
        {formatDate(date, "dddd, MMMM Do YYYY")} (
        {distanceInWordsToNow(date, {
          addSuffix: true,
        })}
        )
      </h6>
      <div className="container">
        {detail && <section className="description f5">{children}</section>}
      </div>
      <div className="container">
        <Link href={link}>
          <a className="button is-primary is-outlined m-t-20">Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default Preview;
