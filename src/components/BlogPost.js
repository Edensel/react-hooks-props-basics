import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";
import Densel from "./Densel";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
      <Densel comeHome="Densel welcome's you all to this blog, are you a big fun then subscribe."/>
    </div>
  );
}

export default BlogPost;
