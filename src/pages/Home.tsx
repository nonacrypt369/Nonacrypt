import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import Challenges from "../components/Challenges";
import CoreServices from "../components/CoreServices";
import Industries from "../components/Industries";
import Journey from "../components/Journey";
import WhyChooseUs from "../components/WhyChooseUs";
import SuccessStories from "../components/SuccessStories";
import OtherServices from "../components/OtherServices";
import AboutUs from "../components/AboutUs";

export default function Home() {
  const { openContactModal } = useOutletContext<{ openContactModal: () => void }>();

  return (
    <>
      <Hero openContactModal={openContactModal} />
      <WhatWeDo />
      <Challenges />
      <CoreServices />
      <Industries />
      <Journey />
      <WhyChooseUs />
      <SuccessStories />
      <OtherServices />
      <AboutUs />
    </>
  );
}
