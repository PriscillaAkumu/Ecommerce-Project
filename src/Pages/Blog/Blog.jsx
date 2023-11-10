import "./Blog.css";
import blogPosts from "./blogPosts";
import blogimg1 from "../Blog/img/blogimg1.png";
import ContainerStyle from "./ContainerStyle";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SearchIcon from "@mui/icons-material/Search";
import ButtonStyle from "./ButtonStyle";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <ContainerStyle>
          <div className="blog__inner">
            <div className="blog__content">
              {blogPosts.map((post, index) => (
                <div key={index}>
                  <img src={post.img} alt="" className="blog__content__img" />
                  <div className="blog__content__meta">
                    <div className="blog__content__meta__item">
                      <PersonIcon />
                      <div>{post.author}</div>
                    </div>
                    <div className="blog__content__meta__item">
                      <CalendarTodayIcon />
                      {post.date}
                    </div>
                    <div className="blog__content__meta__item">
                      <LocalOfferIcon />
                      <div>{post.category}</div>
                    </div>
                  </div>
                  <h2 className="blog__content__title">{post.title}</h2>
                  <p className="blog__content__text">{post.text}</p>
                  <div className="readmore">
                    <ButtonStyle>Read More</ButtonStyle>
                  </div>
                </div>
              ))}
            </div>
            <div className="blog__side__bar">
              <div className="blog__side__bar__search">
                <form action="" className="search__form">
                  <input type="text" />
                  <SearchIcon />
                </form>
              </div>
              <Categories />
              <RecentPosts />
            </div>
          </div>
        </ContainerStyle>
      </div>
    </>
  );
};

export default Blog;
