import React from "react";
import Header from "../components/Navbar";
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
