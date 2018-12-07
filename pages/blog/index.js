import Preview from "./../../components/blog/Preview";

function importAll(r) {
  return r.keys().map(r);
}

const previewItems = importAll(
  require.context("./../../blog", false, /\-preview\.mdx$/)
);

function dateSortDesc(a, b) {
  const date1 = new Date(a.meta.date);
  const date2 = new Date(b.meta.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

const items = previewItems
  .sort(dateSortDesc)
  .map(({ default: Component, meta }, index) => {
    return (
      <Preview
        key={meta.title}
        detail={index < 5}
        prefetch={index < 3}
        {...meta}
      >
        <Component comp />
      </Preview>
    );
  });

const Blog = () => {
  return <section className="section">{items}</section>;
};

export default Blog;
