const Blog = ({ blog }) => (
  <div>
    <p className="blog">
      {blog.title} {blog.author}
    </p>
    <p>{blog.likes}</p>
  </div>
);

export default Blog;
