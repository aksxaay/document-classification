import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

import { benefitOne, benefitTwo } from "../components/Data.jsx";
import Video from "../components/Video";
import Benefits from "../components/Benefits.jsx";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import PopupWidget from "../components/PopupWidget";

import SignInModal from "../utils/SignInModal"

const Home = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <SignInModal/>
      <div className="">
        <div className="dark:bg-gray-900">
          <Navbar />
          {/* <button onClick={() => setOpen(!open)}>Menu</button>
          {open && (
            <>
              <div in={!open}>
                <p>MAKE THIS OVERLAY DISAPPEAR!!!</p>
                <button onClick={() => setOpen(!open)}>HELLLO</button>
              </div>
            </>
          )} */}
          <Hero />
          <SectionTitle
            pretitle="dissonance Benefits"
            title=" Why should you use this Document Classification System"
          >
            ºdissonance is able to classify the document into the following
            categories
          </SectionTitle>
          <Benefits data={benefitOne} />
          <Benefits imgPos="right" data={benefitTwo} />
          {/* <SectionTitle
            pretitle="Watch a video"
            title="Learn how to fullfil your needs"
          >
            This section is to highlight a promo or demo video of your product.
            Analysts says a landing page with video has 3% more conversion rate.
            So, don't forget to add one. Just like this.
          </SectionTitle> */}
          {/* <Video /> */}
          <SectionTitle
            pretitle="Testimonials"
            title="Here's what our customers said"
          >
            Our customers, although very few and thin, have quickly grown to
            love the product.
          </SectionTitle>
          <Testimonials />
          <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
            Here's where we address common queries regarding our{" "}
            <span className="font-bold">Document Classification Service</span>
          </SectionTitle>
          <Faq />
          <Cta />
          <Footer />
          <PopupWidget />
        </div>
      </div>
    </>
  );
};

export default Home;
