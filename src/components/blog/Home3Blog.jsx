import useHttpClient from "@/hooks/useHttpClient";
import { formatDate } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Home3Blog() {
  const [contentList, setContentList] = useState([]);
  const { isLoading, sendReq, error, clearError } = useHttpClient();

  useEffect(() => {
    getItem();
  }, []);

  async function getItem() {
    const data = await sendReq(`/api/post?take=3&page=1`, "GET");
    setContentList(data.data.items);
  }
  return (
    <div className="home3-blog-area sec-mar">
      <div className="container">
        <div
          className="row mb-55  wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section-title-3 text-center">
              <h2>The Latest Article</h2>
              <p>
                Services are professional offerings provided by businesses to
                meet specific needs or solve problems for their customers.
                Services can range from your budget.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-lg-4 gy-5">
            {contentList?.map(({ id, image, createdAt, title }) => (
              <div
                key={id}
                className="col-lg-4 col-md-6 wow animate fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="single-blog magnetic-item">
                  <div className="blog-img">
                    <img className="img-fluid" src={image} alt="" />
                    <div className="blog-tag">
                      <Link legacyBehavior href="/blog">
                        <a>Web development</a>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="blog-meta">
                      <li>
                        <Link legacyBehavior href="/blog">
                          <a>{formatDate(createdAt)}</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/blog">
                          <a>Comment (0)</a>
                        </Link>
                      </li>
                    </ul>
                    <h4>
                      <Link legacyBehavior href={"/blog-details/" + id}>
                        <a>{title}</a>
                      </Link>
                    </h4>
                    <div className="blog-footer">
                      <div className="read-btn">
                        <Link legacyBehavior href={"/blog-details/" + id}>
                          <a>
                            Read More
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                            </svg>
                          </a>
                        </Link>
                      </div>
                      <div className="social-area">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/pacific_nig">
                              <i className="bx bxl-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-pinterest-alt" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                        </ul>
                        <span>
                          <img src="assets/img/home-3/plain-icon.svg" alt="" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3Blog;
