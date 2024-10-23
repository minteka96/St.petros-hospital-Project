import React from "react";
import news from "../../../assets/img/news.jpg";
import covid from "../../../assets/img/covid.jpg";
import hiv from "../../../assets/img/10001.jpg";
import news3 from "../../../assets/img/news3.jpg";
import { Link } from "react-router-dom";
function News() {
  return (
    <div>
      {" "}
      <section class="blog-area section-py blog-border-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="post-items-style2">
                <div class="post-item">
                  <div class="thumb">
                    <Link
                      to={"/news-details"}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={news3}
                        alt="hope-Blog"
                        style={{ width: "290px", height: "200px" }}
                      />
                    </Link>
                  </div>
                  <div class="content">
                    <a class="category" href="blog.html">
                      News
                    </a>
                    <h4 class="title">
                      <a href="blog-details.html">
                        Problems About Social Insurance For Truck Drivers
                      </a>
                    </h4>
                    <div class="meta">
                      Decmber 14th, 2023 by{" "}
                      <a class="author" href="blog.html">
                        Admin
                      </a>
                    </div>
                  </div>
                </div>

                <div class="post-item">
                  <div class="thumb">
                    <a href="blog-details.html">
                      <img
                        src={news}
                        alt="hope-Blog"
                        style={{ width: "290px", height: "200px" }}
                      />
                    </a>
                  </div>
                  <div class="content">
                    <a class="category" href="blog.html">
                      News
                    </a>
                    <h4 class="title">
                      <a href="blog-details.html">
                        Payment Online -Things That You Know To Protect Your
                        Money Before Perform A Checkout
                      </a>
                    </h4>
                    <div class="meta">
                      Decmber 14th, 2023 by{" "}
                      <a class="author" href="blog.html">
                        Admin
                      </a>
                    </div>
                  </div>
                </div>

                <div class="post-item">
                  <div class="thumb">
                    <a href="blog-details.html">
                      <img
                        src={covid}
                        alt="hope-Blog"
                        style={{ width: "290px", height: "200px" }}
                      />
                    </a>
                  </div>
                  <div class="content">
                    <a class="category" href="blog.html">
                      News
                    </a>
                    <h4 class="title">
                      <a href="blog-details.html">
                        5 Steps To Build Strategy Planning
                      </a>
                    </h4>
                    <div class="meta">
                      Decmber 14th, 2023 by{" "}
                      <a class="author" href="blog.html">
                        Admin
                      </a>
                    </div>
                  </div>
                </div>

                <div class="post-item">
                  <div class="thumb">
                    <a href="blog-details.html">
                      <img
                        src={hiv}
                        alt="hope-Blog"
                        style={{ width: "290px", height: "200px" }}
                      />
                    </a>
                  </div>
                  <div class="content">
                    <a class="category" href="blog.html">
                      news
                    </a>
                    <h4 class="title">
                      <a href="blog-details.html">
                        5 Secrets To Coaching Your Employees To Greatness
                      </a>
                    </h4>
                    <div class="meta">
                      Decmber 14th, 2023 by{" "}
                      <a class="author" href="blog.html">
                        Admin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;
