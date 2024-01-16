import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";
import data from "../data/mesonaryData";
function ProjectMasonaryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category === "All" ? "All" : category);
  };
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((project) => project.category === selectedCategory);
  return (
    <Layout>
      <Breadcrumb
        pageList="Projects Masonary"
        title="Our Complited Projects"
        pageName="PROJECTS MASONARY"
      />
      <div className="portfolio-masonary-page sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="isotope-menu">
                <li
                  className={selectedCategory === "All" ? "active" : ""}
                  onClick={() => handleCategoryFilter("All")}
                >
                  All
                </li>
                <li
                  className={selectedCategory === "UI/UX" ? "active" : ""}
                  onClick={() => handleCategoryFilter("UI/UX")}
                >
                  UI/UX
                </li>
                <li
                  className={selectedCategory === "Web Design" ? "active" : ""}
                  onClick={() => handleCategoryFilter("Web Design")}
                >
                  Web Design
                </li>
                <li
                  className={selectedCategory === "Developing" ? "active" : ""}
                  onClick={() => handleCategoryFilter("Developing")}
                >
                  Developing
                </li>
                <li
                  className={
                    selectedCategory === "Graphic Design" ? "active" : ""
                  }
                  onClick={() => handleCategoryFilter("Graphic Design")}
                >
                  Graphic Design
                </li>
              </ul>
            </div>
          </div>
          <div className="row g-4 project-items mb-55">
            {filteredData.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`col-lg-${item.class} col-sm-6 single-item ${item.category}`}
                >
                  <div className="single-work magnetic-item">
                    <div className="work-img">
                      <img className="img-fluid" src={item.image} alt="" />
                    </div>
                    <div className="work-content">
                      <h3>
                        <Link legacyBehavior href="/project-details">
                          <a>{item.title}</a>
                        </Link>
                      </h3>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="load-more-btn">
                <Link legacyBehavior href="/project-masonary">
                  <a className="primary-btn3">Load More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProjectMasonaryPage;
