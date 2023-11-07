import ContainerStyle from "./ContainerStyle";
import ButtonStyle from "./ButtonStyle";
import blogimg1 from "./img/blogimg1.png";
import blogimg2 from "./img/blogimg2.png";
import blogimg3 from "./img/blogimg3.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const OurBlogs = () => {
  return (
    <>
      <section className="blog">
        <ContainerStyle>
          <div className="blog-head">
            <h2 className="blog-head-title">Our Blogs</h2>
            <p className="blog-head-desc">
              Find a bright ideal to suit your taste with our great selection
            </p>
            <div className="blog-list">
              <div className="blog-item">
                <img src={blogimg1} alt="" />
                <h4 className="blog-list-title">
                  Going all-in with millennial design
                </h4>
                <ButtonStyle>Read More</ButtonStyle>
                <div className="blog-meta">
                  <div className="blog-meta-item">
                    <AccessTimeIcon />
                    <p>5 min</p>
                  </div>
                  <div className="blog-meta-item">
                    <EventAvailableIcon />
                    <p>
                      12<sup>th</sup> Oct 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <img src={blogimg2} alt="" />
                <h4 className="blog-list-title">
                  Going all-in with millennial design
                </h4>
                <ButtonStyle>Read More</ButtonStyle>
                <div className="blog-meta">
                  <div className="blog-meta-item">
                    <AccessTimeIcon />
                    <p>5 min</p>
                  </div>
                  <div className="blog-meta-item">
                    <EventAvailableIcon />
                    <p>
                      12<sup>th</sup> Oct 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <img src={blogimg3} alt="" />
                <h4 className="blog-list-title">
                  Going all-in with millennial design
                </h4>
                <ButtonStyle>Read More</ButtonStyle>
                <div className="blog-meta">
                  <div className="blog-meta-item">
                    <AccessTimeIcon />
                    <p>5 min</p>
                  </div>
                  <div className="blog-meta-item">
                    <EventAvailableIcon />
                    <p>
                      12<sup>th</sup> Oct 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ButtonStyle>View All Post</ButtonStyle>
          </div>
        </ContainerStyle>
      </section>
    </>
  );
};

export default OurBlogs;
