import Hero from "../../components/home/Hero";
import Impact from "../../components/home/Impact";
import Mission from "../../components/home/Mission";
import FeaturedProjects from "../../components/home/FeaturedProjects";
import SocialStories from "../../components/home/SocialStories";
import CallToAction from "../../components/home/CallToAction";

const Home = () => {
  return (
    <main>
      <Hero />
      <Impact />
      <Mission />
      <FeaturedProjects />
      <SocialStories />
      <CallToAction />
    </main>
  );
};

export default Home;
