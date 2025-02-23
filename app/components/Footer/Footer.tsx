import Image from "next/image";
import Link from "next/link";
import { Banner } from "@/common/components";
import { space_grotesk } from "@/common/fonts";
import SocialLink from "../Navbar/components/Menu/components/SocialLink";

const Footer = () => {
  return (
    <footer className="bg-dark pt-10">
      <div className="container-center px-6">
        <Banner
          title="Commit to your goals—book your session and start thriving!"
          cta="Start Your Journey!"
        />
      </div>
      <div className="container-start-v bg-dark px-6 pt-10 gap-10">
        <div className="container-start-v gap-3">
          <Link href="/" className="container-center w-fit">
            <Image
              src="/sakka_logo.png"
              alt="Khaled Elsakka Logo"
              width={50}
              height={50}
            />
            <span className="text-white text-3xl select-none">ELSAKKA</span>
          </Link>
          <p className={`text-fade ${space_grotesk.className}`}>
            Achieve lasting fitness results with science-backed, customized
            training. Whether you aim to lose weight, build strength, or boost
            overall health, we design the perfect plan for you. Start your
            journey now!
          </p>
          <div className="container-center gap-3 mt-3">
            <SocialLink
              variant="outline"
              href="https://www.facebook.com/p/Khaled-Elsakka-61559620383183/"
              src="/facebook.svg"
              alt="facebook icon"
            />
            <SocialLink
              variant="outline"
              href="https://www.instagram.com/elsakka1/?hl=ar"
              src="/instagram.svg"
              alt="instagram icon"
            />
            <SocialLink
              variant="outline"
              href="https://www.youtube.com/@KhaledElsakka"
              src="/youtube.svg"
              alt="youtube icon"
            />
            <SocialLink
              variant="outline"
              href="https://www.tiktok.com/@khaledelsakka658"
              src="/tiktok.svg"
              alt="tiktok icon"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 grid-rows-1 max-sm:grid-cols-1 max-sm:gap-10">
          <div className="flex flex-col justify-start items-start gap-5">
            <span className="text-2xl text-secondary">Quick Links</span>
            <ul
              className={`container-start-v text-disabled gap-3 ${space_grotesk.className}`}
            >
              <Link className="hover:text-secondary" href="">
                About Us
              </Link>
              <Link className="hover:text-secondary" href="">
                Contact Us
              </Link>
              <Link className="hover:text-secondary" href="">
                Gallery
              </Link>
              <Link className="hover:text-secondary" href="">
                FAQs
              </Link>
            </ul>
          </div>
          <div className={`flex flex-col justify-start items-start`}>
            <span className="text-2xl text-secondary">Working Hours</span>
            <div
              className={`container-center gap-2 py-3 text-disabled border-b border-disabled ${space_grotesk.className}`}
            >
              <span>Monday - Friday:</span>
              <span>08:00 AM - 20:00 PM</span>
            </div>
            <div
              className={`container-center gap-2 py-3 text-disabled border-b border-disabled ${space_grotesk.className}`}
            >
              <span>Saturday:</span>
              <span>09:00 AM - 16:00 PM</span>
            </div>
            <div
              className={`container-center gap-2 py-3 text-disabled border-b border-disabled ${space_grotesk.className}`}
            >
              <span>Sunday:</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
        <div className="container-start-v gap-5">
          <span className="text-2xl text-secondary">Contact Us</span>
          <div className="container-start-v gap-3">
            <div
              className={`container-center gap-3 ${space_grotesk.className}`}
            >
              <Image
                src="/whatsapp.svg"
                alt="whatsapp"
                width={25}
                height={25}
                className="-translate-y-0.5"
              />
              <Link
                className="text-disabled text-base"
                href="https://wa.me/201069389022"
                target="_blank"
              >
                01069389022
              </Link>
            </div>
            <div
              className={`container-center gap-3 ${space_grotesk.className}`}
            >
              <Image
                src="/email.svg"
                alt="email"
                width={25}
                height={25}
                className="-translate-y-0.5"
              />
              <Link
                className="text-disabled text-base"
                href="mailto:trainer@example.com"
                target="_blank"
              >
                trainer@example.com
              </Link>
            </div>
            <div
              className={`container-center gap-3 ${space_grotesk.className}`}
            >
              <Image
                src="/address.svg"
                alt="address"
                width={25}
                height={25}
                className="-translate-y-0.5"
              />
              <span className="text-disabled text-base">
                4th Floor, Howard Building, New Cairo, Egypt
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-center py-5 mt-10 border-t border-fade text-white">
        <span className="text-fade text-center">
          Made with 🖤 by Mohammed T.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
