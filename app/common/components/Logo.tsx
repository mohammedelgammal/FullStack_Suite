import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

const Logo = memo(() => {
  return (
    <Link href="/" className="container-center">
      <Image
        src="/sakka_logo.png"
        alt="Khaled Elsakka Logo"
        width={50}
        height={50}
      />
      <span className="text-white text-3xl select-none">ELSAKKA</span>
    </Link>
  );
});

export default Logo;
