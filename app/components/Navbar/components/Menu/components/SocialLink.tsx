import Image from "next/image";
import Link from "next/link";

const SocialLink = ({ href, src, alt, variant }: SocialLinkPropType) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`container-center h-10 w-10 ${
        variant == "primary" ? "bg-dark" : "border border-fade rounded-full"
      }`}
    >
      <Image src={src} alt={alt} height={20} width={20} />
    </Link>
  );
};

type SocialLinkPropType = {
  href: string;
  src: string;
  alt: string;
  variant: "primary" | "outline";
};

export default SocialLink;
