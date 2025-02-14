import Image from "next/image";
import Link from "next/link";

const SocialLink = ({ href, src, alt }: SocialLinkPropType) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="container-center bg-dark h-10 w-10"
    >
      <Image src={src} alt={alt} height={20} width={20} />
    </Link>
  );
};

type SocialLinkPropType = {
  href: string;
  src: string;
  alt: string;
};

export default SocialLink;
