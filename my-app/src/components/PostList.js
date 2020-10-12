import React from "react";
import "../styles/main.scss";

import { data } from "./posts";
import SpecificPost from "./Post";

// Events: handling events in React

function PostList() {
  return (
    <section className="post-list">
      {data.map((post) => {
        return <SpecificPost key={post.id} {...post}></SpecificPost>;
      })}
    </section>
  );
}

export default PostList;
