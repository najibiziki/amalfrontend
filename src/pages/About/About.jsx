import { useOutletContext } from "react-router-dom";

import AboutHero from "../../components/about/AboutHero";
import AboutMission from "../../components/about/AboutMission";
import AboutValues from "../../components/about/AboutValues";
import AboutAmal from "../../components/about/AboutAmal";
import AboutCTA from "../../components/about/AboutCTA";

const About = () => {
  const { onSupport } = useOutletContext();

  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutAmal />
      <AboutCTA onSupport={onSupport} />
    </main>
  );
};

export default About;
