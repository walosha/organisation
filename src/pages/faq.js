import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";

function Faqpage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="FAQs"
        title="Frequently Asked Questions?"
        pageName="FAQS"
      />
      <div className="faq-page sec-mar">
        <div className="container">
          <div className="row gy-5 justify-content-lg-between justify-content-center">
            <div className="col-lg-4">
              <div className="faq-items">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Application
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Payment
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Support
                    </button>
                  </li>
                </ul>
              </div>
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>HAVE QUESTION?</h5>
                </div>
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-20">
                        <div className="form-inner">
                          <label>name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email</label>
                          <input type="email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Phone</label>
                          <input type="email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Message</label>
                          <textarea defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="accordion" id="accordionExample1">
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Question: How long does it take to develop a custom
                          software solution?{" "}
                        </button>
                      </h5>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The timeline for developing a custom software solution
                          varies based on project complexity and requirements.
                          Typically, it can range from a few weeks for small
                          projects to several months for larger, more intricate
                          applications. Our team works closely with clients to
                          establish realistic timelines and milestones
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How do you ensure the security of our software and
                          data?{" "}
                        </button>
                      </h5>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Security is a top priority for us. We employ industry
                          best practices, conduct thorough testing, and
                          implement encryption measures to safeguard your
                          software and data. Our team follows secure coding
                          standards, performs regular security audits, and stays
                          informed about the latest security threats to provide
                          a robust and secure solution.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Can you integrate the new software with our existing
                          systems?{" "}
                        </button>
                      </h5>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Yes, our team has extensive experience in system
                          integration. We work to ensure seamless compatibility
                          with your existing systems, whether they are
                          databases, APIs, or third-party applications.
                          Integration is a crucial aspect, and we prioritize
                          interoperability to enhance the efficiency of your
                          overall business processes.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          What level of involvement do we have during the
                          development process?{" "}
                        </button>
                      </h5>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          We encourage client involvement throughout the
                          development process. Our approach is collaborative,
                          and we provide regular updates, conduct feedback
                          sessions, and involve you in key decision-making
                          processes. This ensures that the final software aligns
                          perfectly with your vision and requirements.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="accordion" id="accordionExample2">
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What is the cost of developing custom software?{" "}
                        </button>
                      </h5>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The cost of custom software development depends on
                          factors like project scope, features, and complexity.
                          We provide detailed project estimates after
                          understanding your requirements during the initial
                          consultation. Our goal is to offer transparent pricing
                          and ensure that the solution aligns with your budget
                          and goals.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFour1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour1"
                          aria-expanded="false"
                          aria-controls="collapseFour1"
                        >
                          What payment methods do you accept for software
                          development services?{" "}
                        </button>
                      </h5>
                      <div
                        id="collapseFour1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          We accept various payment methods, including bank
                          transfers, credit cards, and other secure online
                          payment options. Our goal is to provide flexibility to
                          clients, and we can discuss and tailor payment
                          arrangements to accommodate your preferences.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFive1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive1"
                          aria-expanded="false"
                          aria-controls="collapseFive1"
                        >
                          How is the payment structure organized throughout the
                          software development process?{" "}
                        </button>
                      </h5>
                      <div
                        id="collapseFive1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The payment structure is typically organized into
                          milestones or phases. We often request an initial
                          deposit to commence the project, followed by payments
                          linked to key project milestones. The specifics depend
                          on the project scope and duration. We aim to create a
                          transparent payment plan, ensuring that payments align
                          with project progress and deliverables.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="accordion" id="accordionExample3">
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingOne2">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne2"
                          aria-expanded="true"
                          aria-controls="collapseOne2"
                        >
                          What kind of support services do you offer after the
                          software is deployed?{" "}
                        </button>
                      </h5>
                      <div
                        id="collapseOne2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          We provide comprehensive post-deployment support
                          services, including bug fixes, software updates, and
                          addressing any issues that may arise. Our support team
                          is accessible via various channels, ensuring a prompt
                          response to your queries. We offer different support
                          plans tailored to your needs, ensuring the continued
                          success and reliability of your software.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingTwo2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo2"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        >
                          How do you handle emergency support and critical
                          issues outside regular business hours?{" "}
                        </button>
                      </h5>
                      <div
                        id="collapseTwo2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          We understand that issues may arise outside regular
                          business hours. Our support services include
                          provisions for emergency support during such times. We
                          have a dedicated on-call team available 24/7 to
                          address critical issues promptly. Our goal is to
                          minimize downtime and ensure the continuous operation
                          of your software, even during unforeseen
                          circumstances.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          What support and maintenance services do you offer
                          post-launch?{" "}
                        </button>
                      </h5>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Post-launch, we offer comprehensive support and
                          maintenance services to address any issues, implement
                          updates, and ensure the continued smooth operation of
                          your software. Our team is responsive and proactive,
                          providing ongoing assistance to keep your software
                          optimized and up-to-date with evolving technologies.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Faqpage;
