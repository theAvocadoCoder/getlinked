import { Link } from "react-router-dom";
import logo from "assets/getlinked.svg";
import insta from "assets/instagram.svg";
import facebook from "assets/facebook.svg";
import linkedin from "assets/linkedin.svg";
import twitterx from "assets/twitterx.svg";
import phone from "assets/footer-phone.svg";
import location from "assets/footer-location.svg";

function Footer() {
  return (
    <footer className="px-14 lg:px-24 xl:px-32 py-14 h-fit bg-[url('assets/footer-bg.webp')] bg-auto bg-center lg:bg-right-bottom bg-no-repeat">
      <div className="lg:h-[12.75rem] flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between 2xl:gap-[100px] lg:justify-between text-[.75rem] [linie-height:1.293rem]">
        {/* column one */}
        <div className="flex flex-col items-start justify-between md:w-[40%] lg:w-[min(50%,30rem)] md:max-w-[50%]">
          <div className="flex flex-col gap-3 lg:gap-2">
            <Link to="/">
              <img src={logo} alt="" className="h-[1.875rem]" />
            </Link>
            <p>
              Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
            </p>
          </div>
          <p className=" justify-self-end">
            Terms of Use
            <span className="text-orchid-gl font-medium"> | </span>
            Privacy Policy
          </p>
        </div>

        {/* Column two */}
        <div className="flex flex-col items-start gap-[.375rem] md:w-[min(25%,15rem)]">
          <p className="text-orchid-gl font-semibold text-[0.875rem] [line-height:1.5085rem]">Useful Links</p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/overview">
                Overview
              </Link>
            </li>
            <li>
              <Link to="/timeline">
                Timeline
              </Link>
            </li>
            <li>
              <Link to="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/register">
                Register
              </Link>
            </li>
            <li className="inline-flex flex-row gap-3">
              <span className="text-orchid-gl">Follow us</span>
              <div className="inline-flex items-center gap-4">
                <a href="https://instagram.com/getlinked.ai/" target="_blank" rel="noreferrer">
                  <img src={insta} alt="" />
                </a>
                <a href="https://twitter.com/getLinkedai/" target="_blank" rel="noreferrer">
                  <img src={twitterx} alt="" />
                </a>
                <a href="https://facebook.com/getLinkedai/" target="_blank" rel="noreferrer">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://linkedin.com/company/getlinked-ai/" target="_blank" rel="noreferrer">
                  <img src={linkedin} alt="" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* column three */}
        <div className="flex flex-col md:w-[min(25%,10rem)] gap-2 lg:gap-[1.19rem]">
          <p className="text-orchid-gl font-semibold">Contact Us</p>
          <div className="flex flex-col gap-[1.37rem]">
            <a href="tel:+23467981819" target="_blank" rel="noreferrer" className="inline-flex gap-[.87rem] lg:gap-4">
              <img src={phone} alt="" />
              <span>+234 679 81819</span>
            </a>
            <a href="https://maps.app.goo.gl/zUC2ynVFwQxm1cDQ9" target="_blank" rel="noreferrer" className="inline-flex gap-[.87rem] lg:gap-4">
              <img src={location} alt="" />
              <span>
                27, Alara Street Yaba 100012 Lagos State
              </span>
            </a>
          </div>
        </div>
      </div>
      <p className="mt-[3.75rem] lg:mt-[3.69rem] w-full text-center text-[.75rem]">All rights reserved. © getlinked Ltd.</p>
    </footer>
  )
}

export default Footer