import React from "react";
import Header from "../components/Navbar";
import Post from "../components/Post";
import "../styles/main.scss";

function Home() {
  return (
    <div>
      <Header />
      <Post />
    </div>
  );
}

export default Home;
