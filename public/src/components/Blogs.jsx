import React from "react";
import Blog1 from "./blogs/blog1";
import MetaTags from "./MetaTags"; // Import MetaTags
import "./blogs.css";

const BlogsPage = () => {
  return (
    <div style={{ width: "100%" }}>
      <MetaTags
        title="Study Abroad Insights - UNIFYND Blogs"
        description="Explore the latest articles, tips, and insights on studying abroad. Stay informed with UNIFYND’s expert blogs on global education and college admissions, Blogs, Latest Info"
        keywords="study abroad blogs, international education, college admissions tips, global education insights"
        url="https://unifynd.in/blogs"
        image="https://unifynd.in/path/to/blogs-image.jpg" // Update with actual image URL
      />
      <div className="row justify-content-center">
        <div className="col-12 col-md-8" style={{ width: "100%" }}>
          <Blog1 />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
