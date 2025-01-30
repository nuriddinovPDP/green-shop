import React from "react";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Projects from "../../components/Projects/Projects";
import Add from "../../components/Add/Add";
import Posts from "../../components/Posts/Posts";
import Info from "../../components/Info/Info";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Projects />
      <Add />
      <Posts />
      <Info />
      <Footer />
    </div>
  );
}
