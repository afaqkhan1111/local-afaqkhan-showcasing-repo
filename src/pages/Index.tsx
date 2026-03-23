
import React, { useRef, useState } from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

const Index = () => {
  // Lift portfolio filter state up
  const [portfolioFilter, setPortfolioFilter] = useState("all");
  const portfolioRef = useRef<HTMLDivElement>(null);

  // Handler for "View All Projects" button
  const handleViewAllProjects = () => {
    setPortfolioFilter("all");
    // Scroll smoothly to portfolio section
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Portfolio
        filter={portfolioFilter}
        setFilter={setPortfolioFilter}
        portfolioRef={portfolioRef}
        onViewAllProjects={handleViewAllProjects}
      />
      <Skills />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;

