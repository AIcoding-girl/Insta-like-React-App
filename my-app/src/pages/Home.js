import React from "react";
import Header from "../components/Navbar";
// import Post from "../components/Post";
import PostList from "../components/PostList";
import "../styles/main.scss";

function Home() {
  return (
    <div className="homeContainer">
      <Header />
      <PostList />
    </div>
  );
}

export default Home;
