import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "./data";
import { getClass, addHeader } from "./../../util";

const TimelineItem = props => {
  const { item, idx } = props;
  return (
    <>
      <div key={item.id} className={getClass("item", item.color)}>
        <div className={getClass("marker", item.marker)} />
        <div className="timeline-content">
          <p className="heading">{item.heading}</p>
          <p className={item.textColor}>{item.content}</p>
        </div>
      </div>
      {data[idx + 1] !== undefined && addHeader(data[idx + 1].date, item.date)}
    </>
  );
};

const Timeline = props => {
  return (
    <section className="section has-text-centered">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <h4 className="title is-spaced is-size-4-desktop is-size-5-mobile">
              What's been going on
            </h4>
            <h5 className="subtitle is-size-5-desktop">
              <FontAwesomeIcon
                icon={["fas", "angle-double-down"]}
                color="#46adcb"
                size="2x"
              />
            </h5>
            <div className="timeline is-centered">
              <header key="start" className="timeline-header">
                <span className="tag is-medium is-primary">Start</span>
              </header>
              {data.map((item, idx) => (
                <TimelineItem key={idx} item={item} idx={idx} />
              ))}
              <header key="end" className="timeline-header">
                <span className="tag is-medium is-primary">End</span>
              </header>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
