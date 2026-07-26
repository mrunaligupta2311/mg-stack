 import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CTA from "../components/sections/CTA";

const Home = () => {
  return (
    <>
      <Hero />

      <FeaturedProjects />

      <Services />
      
      <Process />

      
      <WhyChooseUs />

      <CTA />
    </>
  );
};

export default Home;