/* eslint-disable quotes */
import { Footer, Navbar } from "../components";
import SideBar from "../components/SideBar";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden relative">
    <Navbar />
    <SideBar />
    <Hero />

    <div className="relative">
      <About />
      <div className="gradient-0.3 z-0" />
      <Explore />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-0.3 z-0" />
      <WhatsNew />
    </div>

    <World />

    <div className="relative">
      <Insights />
      <div className="gradient-0.3 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
