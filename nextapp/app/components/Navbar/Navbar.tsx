import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { Signin, Signout } from "@/components";
import logo from "@/assets/imgs/logo.png";
import profile from "@/assets/imgs/profile.jpg";
import avatar from "@/assets/imgs/avatar.png";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={logo} alt="logo image" width={50} height={50} />
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {session?.user ? (
            <div className="flex gap-5 justify-center items-center">
              <span>{session.user.name}</span>
              <Signout />
              <Image
                className="w-8 h-8 rounded-full"
                src={profile}
                alt="profile user photo"
                width={100}
                height={100}
              />
            </div>
          ) : (
            <div className="flex gap-5 justify-center items-center">
              <Signin />
              <Image
                className="w-8 h-8 rounded-full"
                src={avatar}
                alt="avatar photo"
                width={100}
                height={100}
              />
            </div>
          )}
        </div>
        <div
          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        />
      </div>
    </nav>
  );
};

export default Navbar;
