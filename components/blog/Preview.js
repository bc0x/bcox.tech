import formatDate from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

const Preview = (props) => {
  const {
    detail, link, title, date, prefetch, children
  } = props
  return (
    <div className="container box">
      <h4 className="title is-4 is-centered">{title}</h4>
      <h6 className="subtitle is-6">
        {formatDate(date, 'dddd, MMMM Do YYYY')} (
        {distanceInWordsToNow(date, {
          addSuffix: true
        })})
      </h6>
      {detail && <section className="description f5">{children}</section>}
    </div>
  )
}

export default Preview