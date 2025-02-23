import Link from "next/link";
import Image from "next/image";
import { Forehead } from "@/common/components";

const SocialMedia = () => {
  return (
    <section className="bg-dark py-10">
      <Forehead
        variant="center"
        meta="Social media"
        title="Follow for Tips, Tricks, and Updates"
        icon={
          <Image
            src="/connect.svg"
            alt="testimonials icon"
            width={25}
            height={25}
            className="-translate-y-0.5 mr-1"
          />
        }
      />
      <div className="container-center gap-5">
        {socials.map((socialLink, key) => (
          <SocialLink key={key} {...socialLink} />
        ))}
      </div>
    </section>
  );
};

const SocialLink = ({ href, src, alt }: SocialLinkPropsType) => {
  return (
    <Link
      className={`container-center bg-dark border border-disabled p-3 hover:-translate-y-1 ease-linear duration-150`}
      href={href}
    >
      <Image width={30} height={30} src={src} alt={alt} />
    </Link>
  );
};

const socials: SocialsType[] = [
  {
    href: "https://www.facebook.com/p/Khaled-Elsakka-61559620383183/",
    src: "/facebook.svg",
    alt: "facebook icon",
  },
  {
    href: "https://www.instagram.com/elsakka1/?hl=ar",
    src: "/instagram.svg",
    alt: "instagram icon",
  },
  {
    href: "https://www.youtube.com/@KhaledElsakka",
    src: "/youtube.svg",
    alt: "youtube icon",
  },
  {
    href: "https://www.tiktok.com/@khaledelsakka658",
    src: "/tiktok.svg",
    alt: "tiktok icon",
  },
];

// type definitions starts here

type SocialLinkPropsType = SocialsType;

type SocialsType = {
  href: string;
  src: string;
  alt: string;
};

export default SocialMedia;
