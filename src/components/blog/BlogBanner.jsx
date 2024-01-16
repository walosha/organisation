import React from 'react'

function BlogBanner() {
  return (
    <div className="blog-banner sec-mar">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div className="blog-banner-wrap">
                <div className="banner-img">
                    <img src="assets/img/inner-pages/blog-banner.png" alt="" />
                </div>
                <div className="banner-content">
                    <h2>Blog</h2>
                    <p>Join 50,000+ Subscribers</p>
                    <form>
                    <div className="form-inner">
                        <input type="text" placeholder="Email here..." />
                        <button type="submit">
                        Subscribe
                        <svg width={12} height={12} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

  )
}

export default BlogBanner
