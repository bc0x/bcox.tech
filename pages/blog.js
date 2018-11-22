import Link from 'next/link'

const postFileNames =
  preval`
    module.exports = require("fs").readdirSync("./posts")
  ` || []

const posts = postFileNames.map(name => {
  console.log(name)
  const {
    meta: { title }
  } = require("../posts/" + name)

  return {
    title
  }
})

const Blog = () => (
  <section className="section">
    <div className="container is-fluid">
      <h1 className="title">Blog</h1>
      <h2 className="subtitle">
        Under Construction.......
      </h2>
      {posts.map(post => (
        <div key={post.title}>
          <Link as={`/blog/${post.title}`} href={`/blogpost?title=${post.title}`}>
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
    </div>
  </section>
)

export default Blog