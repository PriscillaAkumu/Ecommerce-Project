import blogPosts from "./blogPosts";
const RecentPosts = () => {
  return (
    <>
      <div className="recent__posts">
        <div className="recent_post_heading">Recent Posts</div>
        {blogPosts.map((post, index) => (
          // Use parentheses to implicitly return the JSX element
          <div className="recent__post__items" key={index}>
            <img src={post.img} alt="" className="recent__post__img" />
            <div>
              <h3 className="recent__post__title">{post.title}</h3>
              <small>{post.date}</small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentPosts;
