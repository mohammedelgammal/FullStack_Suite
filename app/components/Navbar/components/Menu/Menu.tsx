import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./components/Section";
import SocialLink from "./components/SocialLink";
import { NavbarMenuContext } from "@/contexts";
import { space_grotesk } from "@/common/fonts";

const Menu = () => {
  const menuContext = useContext(NavbarMenuContext);
  const variant: "hidden" | "visible" = menuContext?.isMenuOpen
    ? "visible"
    : "hidden";

  return (
    <motion.div
      variants={{
        hidden: { translateX: "100vw" },
        visible: { translateX: "0px" },
      }}
      initial={variant}
      animate={variant}
      transition={{ duration: 0.2 }}
      className="z-10 container-center-v px-16 overflow-y-auto h-screen w-128 max-md:w-screen bg-primary fixed top-0 right-0"
    >
      <div className="container-start-v gap-7 text-start min-h-fit w-fit">
        <span className="text-dark text-6xl select-none">ELSAKKA</span>
        <p
          className={`${space_grotesk.className} text-dark grote select-none `}
        >
          Achieve your fitness goals with personalized training. We create
          custom workout plans for weight loss, muscle building, and overall
          health. Start your journey today!
        </p>
        <div className="container-start-v gap-3">
          <Section title="Where are we">
            <span className={`${space_grotesk.className}`}>
              74 Brighton Gym, Cairo, EG (78912)
            </span>
          </Section>
        </div>
        <div className="container-start-v gap-3">
          <Section title="Reach out now!">
            <Link
              href="https://wa.me/201069389022"
              target="_blank"
              className="container-center gap-3"
            >
              <Image
                src="/whatsapp.png"
                alt="whatsapp icon"
                height={24}
                width={24}
              />
              <span className={`${space_grotesk.className}`}>01069389022</span>
            </Link>
          </Section>
        </div>
        <div className="container-start-v gap-3">
          <Section title="Our Working Hours">
            <span className={`${space_grotesk.className}`}>
              Saturday to Thursday 6:30 am — 10:00 pm
            </span>
          </Section>
        </div>
        <div className="container-start-v gap-3">
          <Section title="Follow Us On">
            <div className="container-center gap-3">
              <SocialLink
                variant="primary"
                href="https://www.facebook.com/p/Khaled-Elsakka-61559620383183/"
                src="/facebook.svg"
                alt="facebook icon"
              />
              <SocialLink
                variant="primary"
                href="https://www.instagram.com/elsakka1/?hl=ar"
                src="/instagram.svg"
                alt="instagram icon"
              />
              <SocialLink
                variant="primary"
                href="https://www.youtube.com/@KhaledElsakka"
                src="/youtube.svg"
                alt="youtube icon"
              />
              <SocialLink
                variant="primary"
                href="https://www.tiktok.com/@khaledelsakka658"
                src="/tiktok.svg"
                alt="tiktok icon"
              />
            </div>
          </Section>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
