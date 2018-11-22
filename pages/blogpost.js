const BlogPost = (props) => (
  <section className="section">
    <div className="container is-fluid">
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle">
        This is the blog post content.
      </h2>
    </div>
  </section>
)

BlogPost.getInitialProps = ({ query: { title } }) => {
  return { title };
};

export default BlogPost