import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

const Logo = memo(function Logo() {
  return (
    <Link href="/" className="container-center gap-3">
      <Image className="-translate-y-0.5" src="/logo.png" alt="Logo" width={50} height={50} />
      <span className="text-white text-3xl select-none">C. MORSY</span>
    </Link>
  );
});

export default Logo;
