import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Rules from "./sections/Rules";
import Criteria from "./sections/Criteria";
import Faq from "./sections/Faq";
import Timeline from "./sections/Timeline";
import Prizes from "./sections/Prizes";
import Partners from "./sections/Partners";
import Privacy from "./sections/Privacy";
import Footer from "global/Footer";

function Landing() {
  return (
    <>
      <Hero />
      {/* <Intro />
      <Rules />
      <Criteria />
      <Faq />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy /> */}
      <Footer />
    </>
  )
}

export default Landing