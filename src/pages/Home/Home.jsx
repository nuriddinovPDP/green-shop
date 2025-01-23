import React from "react";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Projects from "../../components/Projects/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Projects />
    </div>
  );
}
